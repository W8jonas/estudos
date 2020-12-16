
import Papa from 'papaparse';
import {useState, useEffect} from 'react'


export default function useAsyncHook(allDataFromCsv, dayToShow) {
    const [globalData, setGlobalData] = useState([]);
    const [dayData, setDayData] = useState("false");

    useEffect(() => {
        setGlobalData(allDataFromCsv)
    }, [allDataFromCsv])

    useEffect(() => {
        // retornar as informações desse dia, dayToShow
        // retornar o maior valor encontrado nesse dia
        const dataInThisDay = getDataInDay(dayToShow)
        setDayData(dataInThisDay)

    }, [dayToShow])
  
    function getDataFrameHeader() {
        const dataFrame = globalData
        const dataFrameHeader = dataFrame[0]
        return dataFrameHeader
    }

    function getDataFrame() {
        const dataFrame = [...globalData]
        dataFrame.shift()
        return dataFrame
    }

    function getDataInDay(day) {
        const dataFrame = [...globalData]
        dataFrame.shift()
        return dataFrame[day]
    }

    function getValueMaxInThisDay(day) {
        const dataFrame = globalData

        let valueMaxFoundedInData = 0

        // console.log('data.data: ', data.data[0][DAY])

		const importantData = dataFrame.map((country)=> {

            // const totalConfirmed = Number(country[DAY])
            const totalConfirmed = Math.sqrt(Number(country[1]))

            const long = Number(country[2])
            const lat = Number(country[3])
            
            if(totalConfirmed > valueMaxFoundedInData) {
                valueMaxFoundedInData = totalConfirmed
            }
            return [lat, long, totalConfirmed]
        })
        console.log('importantData: ', importantData)
        return valueMaxFoundedInData
    }


    return {
        globalData, 
        dayData,
        getDataFrameHeader,
        getDataFrame,
        getDataInDay,
    }
}
