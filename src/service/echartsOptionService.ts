import map from "lodash/map"
import min from "lodash/min"
import max from "lodash/max"
import { echarts } from "@/components/echart"

const upColor = '#00da3c';
const downColor = '#ec0000';

function splitData(rawData: Array<Array<string | number>>) {
    let categoryData: Array<string | number> = [];
    let values: Array<Array<string | number>> = [];
    let volumes: Array<Array<string | number>> = [];
    for (let i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i][0]);
        values.push(rawData[i]);
        volumes.push([i, rawData[i][4], rawData[i][0] > rawData[i][1] ? 1 : -1]);
    }

    return {
        categoryData: categoryData,
        values: values,
        volumes: volumes
    };
}

function calculateMA(dayCount, data) {
    let result: Array<string | number> = [];
    for (let i = 0, len = data.values.length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        let sum = 0;
        for (let j = 0; j < dayCount; j++) {
            sum += data.values[i - j][1];
        }
        result.push(+(sum / dayCount).toFixed(3));
    }
    return result;
}

const realTimeLineOptions = (data) => {
  let timeNode = map(data.lineNode, "time");
  let priceList = map(data.lineNode, "price");
  let minPrice = min(priceList);
  let maxPrice = max(priceList);
  return {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: false
            }
        }
    },
    title: {
        left: 'center',
        text: '实时数据',
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: timeNode
    },
    yAxis: {
        type: 'value',
        // boundaryGap: [minPrice, maxPrice]
        min: minPrice,
        max: maxPrice
    },
    dataZoom: [{
        type: 'inside',
        realtime: true,
        start: 90,
        end: 100
    }, {
        start: 90,
        end: 100,
        realtime: true,
    }],
    series: [
        {
            name: '价格数据',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: priceList,
            markLine: {
              data: [
                  {type: 'average', name: '平均值'}
              ]
            }
        }
    ]
  }
}

interface IlineNode {
  dateTime: string,
  openPrice: number,
  closePrice: number,
  lowestPrice: number,
  highestPrice: number,
  dealNum: number
}

const offlineOptions = (lineData: Array<IlineNode>) => {
  let rawData:Array<Array<string | number>> = []
  let highLightStartDate = "", highLightEndDate = "", start = 80, end = 100;

  if (lineData.length / 5 < 1) {
    start = 0
  }
  let startIndex = Math.floor(start * (lineData.length / 100))
  highLightStartDate = lineData[startIndex < 0 ? 0 : startIndex].dateTime
  highLightEndDate = lineData[lineData.length - 1].dateTime;

  for(let i = 0,len = lineData.length; i < len; i++) {
      let {dateTime, openPrice, closePrice, lowestPrice, highestPrice, dealNum} = lineData[i];
      rawData.push([dateTime, openPrice, closePrice, lowestPrice, highestPrice, dealNum]);
  }
  let data = splitData(rawData);

  return {
    coordRange: [highLightStartDate, highLightEndDate],
    options: {
      backgroundColor: '#fff',
      animation: false,
      // legend: {
      //     bottom: 10,
      //     left: 'center',
      //     data: ['Dow-Jones index', 'MA5', 'MA10', 'MA20', 'MA30']
      // },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross'
          },
          backgroundColor: 'rgba(245, 245, 245, 0.8)',
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          textStyle: {
              color: '#000'
          },
          position: function (pos, params, el, elRect, size) {
              let obj = {top: 10};
              obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
              return obj;
          }
          // extraCssText: 'width: 170px'
      },
      axisPointer: {
          link: {xAxisIndex: 'all'},
          label: {
              backgroundColor: '#777'
          }
      },
      toolbox: {
          feature: {
              dataZoom: {
                  yAxisIndex: false
              },
              brush: {
                  type: ['lineX', 'clear']
              }
          }
      },
      brush: {
          xAxisIndex: 'all',
          brushLink: 'all',
          outOfBrush: {
              colorAlpha: 0.1
          }
      },
      visualMap: {
          show: false,
          seriesIndex: 5,
          dimension: 2,
          pieces: [{
              value: 1,
              color: downColor
          }, {
              value: -1,
              color: upColor
          }]
      },
      grid: [
          {
              left: '10%',
              right: '8%',
              height: '50%'
          },
          {
              left: '10%',
              right: '8%',
              top: '63%',
              height: '16%'
          }
      ],
      xAxis: [
          {
              type: 'category',
              data: data.categoryData,
              scale: true,
              boundaryGap: false,
              axisLine: {onZero: false},
              splitLine: {show: false},
              splitNumber: 20,
              min: 'dataMin',
              max: 'dataMax',
              axisPointer: {
                  z: 100
              }
          },
          {
              type: 'category',
              gridIndex: 1,
              data: data.categoryData,
              scale: true,
              boundaryGap: false,
              axisLine: {onZero: false},
              axisTick: {show: false},
              splitLine: {show: false},
              axisLabel: {show: false},
              splitNumber: 20,
              min: 'dataMin',
              max: 'dataMax'
          }
      ],
      yAxis: [
          {
              scale: true,
              splitArea: {
                  show: true
              }
          },
          {
              scale: true,
              gridIndex: 1,
              splitNumber: 2,
              axisLabel: {show: false},
              axisLine: {show: false},
              axisTick: {show: false},
              splitLine: {show: false}
          }
      ],
      dataZoom: [
          {
              type: 'inside',
              xAxisIndex: [0, 1],
              start: start,
              end: end
          },
          {
              show: true,
              xAxisIndex: [0, 1],
              type: 'slider',
              top: '85%',
              start: start,
              end: end
          }
      ],
      series: [
          {
              name: 'Dow-Jones index',
              type: 'candlestick',
              data: data.values,
              itemStyle: {
                  color: upColor,
                  color0: downColor,
                  borderColor: null,
                  borderColor0: null
              },
              tooltip: {
                  formatter: function (param) {
                      param = param[0];
                      return [
                          'Date: ' + param.name + '<hr size=1 style="margin: 3px 0">',
                          'Open: ' + param.data[0] + '<br/>',
                          'Close: ' + param.data[1] + '<br/>',
                          'Lowest: ' + param.data[2] + '<br/>',
                          'Highest: ' + param.data[3] + '<br/>'
                      ].join('');
                  }
              }
          },
          {
              name: 'MA5',
              type: 'line',
              data: calculateMA(5, data),
              smooth: true,
              lineStyle: {
                  opacity: 0.5
              }
          },
          {
              name: 'MA10',
              type: 'line',
              data: calculateMA(10, data),
              smooth: true,
              lineStyle: {
                  opacity: 0.5
              }
          },
          {
              name: 'MA20',
              type: 'line',
              data: calculateMA(20, data),
              smooth: true,
              lineStyle: {
                  opacity: 0.5
              }
          },
          {
              name: 'MA30',
              type: 'line',
              data: calculateMA(30, data),
              smooth: true,
              lineStyle: {
                  opacity: 0.5
              }
          },
          {
              name: 'Volume',
              type: 'bar',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: data.volumes
          }
      ]
    }
  }
}
export {
  realTimeLineOptions,
  offlineOptions
}
