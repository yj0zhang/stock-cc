import Response from './Response';
import Exception from '../../shared/Exception';
import ERR_TYPES from '../../shared/ERR_TYPES';

export default function createResponse(res) {
  console.log('res', res);
  let response: any = null;
  const statusCode = res.statusCode;

  // 处理业务的status
  let json = res.data || null;
  if (typeof json === 'string') {
    try {
      json = JSON.parse(json);
    } catch (e) {
      json = null;
    }
  }

  if (!json) {
    let message = res.errMsg || null;
    response = new Response({ raw: res, message });
    response.error = new Exception(null, ERR_TYPES.API_SERVER);
    return response;
  }

  // handle http res.
  if (statusCode !== 200 && (!json.code)) {
    let errType = ERR_TYPES.UNKNOWN;

    if (400 <= statusCode && statusCode <= 451) {
      errType = ERR_TYPES.API_CLIENT;
    } else if (500 <= statusCode && statusCode <= 511) {
      errType = ERR_TYPES.API_SERVER;
    }

    let errMsg = (json || {}).msg || (`${res.statusCode}: \`${res.errMsg}\`` || '');

    response = new Response({
      raw: res,
      data: json.data,
      code: json.code,
      message: errMsg
    });
    response.error = new Exception(
      errMsg,
      errType
    );
    return response;
  } else {

    if (json.code !== 0) {
      let message = json.msg || null;
      response = new Response({ raw: res, message });
      response.error = new Exception(message, ERR_TYPES.API_SERVER);
      return response;
    }

    response = new Response({
      data: json.data,
      code: json.code,
      message: json.msg,
      raw: res,
    });

    return response;
  }

}
