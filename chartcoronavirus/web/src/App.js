import * as React from "react"
import './App.css'
      
import 'echarts-gl'
import ReactEcharts from "echarts-for-react";

import realData1 from './assets/data-gl/separatedData/parte_1.json'
import realData2 from './assets/data-gl/separatedData/parte_2.json'


const database = require("./assets/data-gl/populationPreProcessed.json")

const baseTexture = require('./assets/data-gl/asset/world_topo_bathy_200401.jpg')
const heightTexture = baseTexture
const environment = require('./assets/data-gl/asset/starfield.jpg')


function App() {
  
  let valueMaxFounded = 0

  const data1 = realData1
	.map((dataItem) => {
		
		const totalConfirmed = Number(dataItem["totalConfirmed"])
		if(totalConfirmed > valueMaxFounded) {
			valueMaxFounded = totalConfirmed
		}

		return [
			dataItem["long"],
			dataItem["lat"],
			Math.sqrt(totalConfirmed)
		]
	})

  const data2 = realData2
	.map((dataItem) => {
		
		const totalConfirmed = Number(dataItem["totalConfirmed"])
		if(totalConfirmed > valueMaxFounded) {
			valueMaxFounded = totalConfirmed
		}

		return [
			dataItem["long"],
			dataItem["lat"],
			Math.sqrt(totalConfirmed)
		]
	})

	
  const allData = [...data1, ...data2]


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
		max: Math.sqrt(valueMaxFounded),
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
		data: allData,
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
	  	style={{height: '100vh', width: '100%'}}
        option={GL_OPTION}
      />
    </div>
  );
}

export default App;
