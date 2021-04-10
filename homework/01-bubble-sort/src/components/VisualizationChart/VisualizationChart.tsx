import React from 'react';
import Column from './Element/Element';
import './VisualizationChart.css';

type Props = {
  chart?: number[];
};

const VisualizationChart: React.FC<Props> = ({ chart }) => {
  console.log(chart);
  let chartArray = chart?.length ? (chart.map((col, index) => {
    return <Column key={index} height={col} />}
    )) : (<div>press New Set</div>);

  return <div className='Chart'>{chartArray}</div>;
};
export default VisualizationChart;