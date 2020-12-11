
import React, {useState, useEffect} from "react"

// assets
import './App.css'
import environment from './assets/data-gl/asset/starfield.jpg'
import baseTexture from './assets/data-gl/asset/world_topo_bathy_200401.jpg'

// echarts
import 'echarts-gl'
import ReactEcharts from "echarts-for-react";

// functions / extras
import getAllData from './utils/getAllData'
import getAllImportantData from './utils/getAllImportantData'


function App() {

	const [allData, setAllData] = useState([4, 5, 5])
	const [valueMaxFounded, setValueMaxFounded] = useState(0)
	
	useEffect(()=>{
		getAllImportantData().then((itens)=>{
			setAllData(itens[0])
			setValueMaxFounded(itens[1])
		})
	}, [])

	
	if (!valueMaxFounded) {
		return <div>
			<h1>Carregando</h1>
		</div>
	}

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
			max: valueMaxFounded,
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
			<span className="total-connections">
                dia atual: 01/01/2020
            </span>
		</div>
	)
}

export default App
