import React from 'react';
import './App.css';
      
import 'echarts-gl'
import ReactEcharts from "echarts-for-react";

function App() {
  
  const GL_OPTION = {

    grid3D: {},
    xAxis3D: {},
    yAxis3D: {},
    zAxis3D: {},
    series: [{
        type: 'scatter3D',
        symbolSize: 25,
        data: [[-1, -1, -1], [0, 0, 0], [1, 1, 1]],
        itemStyle: {
            opacity: 1
        }
    }]

  }


  return (
    <div className="App">
      <ReactEcharts
        option={GL_OPTION}
      />
    </div>
  );
}

export default App;
