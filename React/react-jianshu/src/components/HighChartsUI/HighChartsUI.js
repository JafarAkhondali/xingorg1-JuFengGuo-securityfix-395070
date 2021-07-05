import React from 'react';
import './HighChartsUI.scss'
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
// const {log} = console;

HighchartsMore(Highcharts)
class HighChartsUI extends React.Component {
  render(){
    let HighChartsUI = <>
      <div id="container" style={{width: '600px', height:'400px'}}>
      </div>
    </>
    return HighChartsUI;
  }

  componentDidMount() {
    // 图表配置
    var options = {
      chart: {
        zoomType: 'xy'
      },
      title: {
        text: '误差图'
      },
      xAxis: [{
        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      }],
      yAxis: [{ // Primary yAxis
        labels: {
          format: '{value} °C',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        title: {
          text: '温度',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        }
      }],
      tooltip: {
        shared: true,
        crosshairs: [{
          width: 1,
          color: '#333'
        }, {
          width: 0,
          color: 'green'
        }],
        formatter: function () {
          console.log( this.points, this.x, this.y)
          let result = ''
          if(this.x === '六月'){
            result = `
            <h3>${ this.x }</h3>
            <br/>
            <p>温度： ${this.y}</p>
            `
          }
          console.log(result)
          return result
        }
      },
      plotOptions: {
        boxplot: {
          lineWidth: 0,
          // medianColor: '#0C5DA5',
          medianWidth: 0,
          stemColor: '#333',
          stemDashStyle: 'dot',
          stemWidth: 1,
          whiskerColor: '#333',
          whiskerLength: 4,
          whiskerWidth: 2
        },
        series: {
          color: '#333',
          marker: {
            enabled: false // 关闭数据点
          }
        }
      },
      series: [{
        name: '降水',
        type: 'spline',
        data: [ 25.2, 26.5, 23.3, 18.3, 13.9, 19.6, null, null, null, null, null, null],
        tooltip: {
          pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f} mm</b> '
        }
      }, {
        name: '温度',
        type: 'spline',
        dashStyle: 'ShortDot', // 点虚线
        data: [null, null, null, null, null, 19.6, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
          pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}°C</b> '
        }
      }, {
        name: '温度误差',
        type: "boxplot",
        data: [null, null, null, null, null, null, [23, 23, 23, 23, 29.3], [24.1, 24.1, 24.1, 24.1, 27.8], [23.2,23.2,23.2,23.2, 32.9], [18.0, 21.1], [12.9, 14.0], [7.6, 10.0]],
        tooltip: {
          pointFormat: '(误差范围: {point.low}-{point.high}°C)<br/>'
        }
      }]
    };
    // 图表初始化函数
    Highcharts.chart('container', options);
  }
}

export default HighChartsUI;