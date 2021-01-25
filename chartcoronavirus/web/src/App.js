
import React, { useState, useEffect } from "react"

// assets
import './App.css'
import environment from './assets/data-gl/asset/starfield.jpg'
import baseTexture from './assets/data-gl/asset/world_topo_bathy_200401.jpg'

// echarts
import 'echarts-gl'
import ReactEcharts from "echarts-for-react";

// functions / extras
// import getAllData from './utils/getAllData'
// import getAllImportantData from './utils/getAllImportantData'

// import useRepository from './functions/repository'
import useFetchData from './functions/useFetchData'
import getCsvData from './functions/getCsvData'

const OFFSET = 4

function App() {

	const [allData, setAllData] = useState([67.709953, 33.93911, 198.1262])
	const [dataFromCsv, setDataFromCsv] = useState([])

	const [valueMaxFounded, setValueMaxFounded] = useState(0)
	const [dayToShow, setDayToShow] = useState(0)
	const [counterActive, setCounterActive] = useState(true)
	const [actualDayDataString, setActualDayDataString] = useState('01/01/2020')

	const { globalData, dayData, valueMaxFoundedInActualDay, totalDataBaseDays,
		getDataFrameHeader, getDataFrame, getDataInDay } = useFetchData(dataFromCsv, dayToShow)

	useEffect(() => {
		getCsvData().then(setDataFromCsv)
	}, [])

	useEffect(() => {
		const header = getDataFrameHeader()

		// console.log('globalData: ', globalData)
		// console.log('getDataFrameHeader: ', header ? header[dayToShow] : undefined)
		// console.log('dayData: ', dayData)
		// console.log('valueMaxFoundedInActualDay: ', valueMaxFoundedInActualDay)

		setActualDayDataString(header ? header[dayToShow + OFFSET] : undefined)
		setAllData(dayData)
		setValueMaxFounded(valueMaxFoundedInActualDay)

	}, [dayData, dayToShow, getDataFrameHeader, valueMaxFoundedInActualDay])

	useEffect(() => {
		if (dayToShow > totalDataBaseDays) {
			setCounterActive(false)
		} else {
			setCounterActive(true)
		}
	}, [dayToShow, totalDataBaseDays])

	useEffect(() => {
		if (counterActive) {
			const timer = setInterval(() => { // o num é 325
				setDayToShow(dayToShow + 1)
			}, 400 - dayToShow)

			return () => {
				clearInterval(timer)
			}
		}
	}, [counterActive, dayToShow])

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
				style={{ height: '100vh', width: '100%' }}
				option={GL_OPTION}
			/>
			<div className="total-connections">
				data: {actualDayDataString} {' '} -- dia: {dayToShow}
			</div>
		</div>
	)
}

export default App
