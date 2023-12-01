import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

import './index.scss';

const BarChart = ({ title, series }) => {
  const barRef = useRef(null);

  useEffect(() => {
    const chartDom = barRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: title,
      },
      xAxis: {
        type: 'category',
        data: ['Vue', 'React', 'Angular']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: series,
          type: 'bar'
        }
      ]
    };

    option && myChart.setOption(option);
  }, [title, series]);

  return <div className="bar" ref={barRef}></div>;
};

export default BarChart;