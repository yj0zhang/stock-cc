
interface _polling_status_ {
  pending: number;
  processing: number;
  stop: number;
}

const pollingStatus: _polling_status_ = {
  pending: 0, //等待执行
  processing: 1, //正在进行
  stop: 2 //停止
};

export default class PollingService implements PollingInterface {
  pollingInterval: number
  task: Function
  _errCb: Function
  _cb: Function
  _status: number
  _taskId: number
  _pollingStatus: _polling_status_
  constructor(
    pollingInterval,
    task, //返回promise
    cb = () => {},
    errCb = () => {}
  ) {
    this.pollingInterval = pollingInterval || 1000 * 30;
    this.task = task;
    this._errCb = errCb;
    this._cb = cb;
    this._status = pollingStatus.stop;
    this._taskId = 0;
    this._pollingStatus = pollingStatus;
  }

  restart(task) {
    // 重启
    console.log("restart...");
    if (this._status !== this._pollingStatus.stop) {
      this.stopPolling ();
    }
    if (task) {
      console.log("set task");
      this._setTask(task);
    }
    // 启动轮询任务
    this.startPolling();
    console.log("restart end");
  }

  startPolling() {
    if (this._status === pollingStatus.stop) {
      // 开始
      console.log("start");
      this._setStatus(pollingStatus.pending);
      this._doPolling();
    }
  }

  stopPolling() {
    // 停止
    console.log("stop", this._taskId);
    this._setStatus(pollingStatus.stop);
    clearInterval(this._taskId);
    this._taskId = 0;
    this._errCb ('user canceled');
  }

  _setTask(task) {
    this.task = task;
  }

  _taskCanceled(taskId) {
    // 任务是否被取消
    if (this._taskId !== taskId) {
      return true;
    }
    if (this._status === pollingStatus.stop) {
      return true;
    }

    return false;
  }

  _runTask() {
    let tid = this._taskId;
    this._setStatus (pollingStatus.processing);
    let self = this;
    try {
      this.task ().then (
        data => {
          self._setStatus (pollingStatus.pending);
          if (self._taskCanceled (tid)) {
            //task 被取消
            // console.log('task', tid, 'reject')
            self._errCb("user canceled");
          } else {
            // console.log('task', tid, 'resolved')
            self._cb (data);
          }
        },
        err => {
          // console.log('task', tid, 'reject')
          self._setStatus(pollingStatus.pending);
          self._errCb(err);
        }
      );
    } catch (error) {
      throw error;
    }
  }

  _doPolling() {
    if (!this.task) {
      throw new Error("task should not be null");
    }
    this._taskId = Number(setInterval (
      this._runTask.bind (this),
      this.pollingInterval
    ));
    this._runTask ();
  }

  _setStatus(status) {
    this._status = status;
  }
}
