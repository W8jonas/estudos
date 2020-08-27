import * as React from "react"
import './App.css'
      
import 'echarts-gl'
import ReactEcharts from "echarts-for-react";


const database = require("./assets/data-gl/populationPreProcessed.json")

const baseTexture = require('./assets/data-gl/asset/world_topo_bathy_200401.jpg')
const heightTexture = baseTexture
const environment = require('./assets/data-gl/asset/starfield.jpg')


function App() {
  
  const data = database.filter(function (dataItem) {
		return dataItem[2] > 0;
	}).map(function (dataItem) {
		return [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])];
	})
  
  const GL_OPTION = {
	backgroundColor: '#000',
	globe: {
		baseTexture: baseTexture,
		heightTexture: heightTexture,
		shading: 'lambert',

		// displacementScale: 0.05,
		// displacementQuality: 'medium',
		
		environment: environment,
		light: {
			main: {
				intensity: 3
			}
		},
		viewControl: {
			autoRotate: false
		}
	},
	visualMap: {
		max: 40,
		calculable: true,
		realtime: false,
		inRange: {
			colorLightness: [0.2, 0.9]
		},
		textStyle: {
			color: '#fff'
		},
		controller: {
			inRange: {
				color: '#284'
			}
		},
		outOfRange: {
			colorAlpha: 0
		}
	},
	series: [{
		type: 'bar3D',
		coordinateSystem: 'globe',
		data: data,
		barSize: 0.6,
		minHeight: 0.2,
		silent: true,
		itemStyle: {
			color: '#284'
		}
	}]
  
  }


  return (
    <div className="App">
      <ReactEcharts
	  	style={{height: '500px', width: '100%'}}
        option={GL_OPTION}
      />
    </div>
  );
}

export default App;
