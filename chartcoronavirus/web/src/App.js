
import * as React from "react"

// assets
import './App.css'
import environment from './assets/data-gl/asset/starfield.jpg'
import baseTexture from './assets/data-gl/asset/world_topo_bathy_200401.jpg'

// echarts
import 'echarts-gl'
import ReactEcharts from "echarts-for-react";

// functions / extras
import getAllData from './utils/getAllData'
import Papa from 'papaparse';
import { useEffect } from "react"



function App() {
  
  const  [allData, valueMaxFounded] = getAllData()


  const GL_OPTION = {
	backgroundColor: '#000',
	globe: {
		baseTexture: baseTexture,
		heightTexture: baseTexture,
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

  useEffect(()=>{
	GetData()
  },[])

	async function GetData() {
		const data = Papa.parse(await fetchCsv());
		console.log(data);
	}

	async function fetchCsv() {
		const response = await fetch('newData1.csv');
		const reader = response.body.getReader();
		const result = await reader.read();
		const decoder = new TextDecoder('utf-8');
		const csv = await decoder.decode(result.value);
		return csv;
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
