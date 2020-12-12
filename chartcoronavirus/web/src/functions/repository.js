
import Papa from 'papaparse';
import {useState, useEffect} from 'react'

const DAY = 300

export default function useRepository() {

    const [allData, setAllData] = useState([])

    useEffect(() => {
        console.log('Tivemos mudanças allData:', allData)
        getAllData()
    }, [])

    async function getAllData() {

        async function fetchCsv() {
            const response = await fetch('newData.csv');
            const reader = response.body.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder('utf-8');
            const csv = await decoder.decode(result.value);
            return csv;
        }

        async function getDataFromCsv() {
            const dataFromCsv = await Papa.parse(await fetchCsv())

            const dataFrame = dataFromCsv.data
            
            console.log('dataFrame: ', dataFrame)

            setAllData(dataFrame)
            
            // let valueMaxFoundedInData = 0
            // console.log('data.data: ', data.data[0][DAY])

            // const importantData = data.data.map((country)=> {

            //     const totalConfirmed = Math.sqrt(Number(country[DAY]))

            //     const long = Number(country[2])
            //     const lat = Number(country[3])
                
            //     if(totalConfirmed > valueMaxFoundedInData) {
            //         valueMaxFoundedInData = totalConfirmed
            //     }
            //     return [lat, long, totalConfirmed]
            // })

            // return [importantData, valueMaxFoundedInData]
        }

        getDataFromCsv()
    }

    function getDataFrameHeader() {
        console.log('getDataFrameHeader: ', allData)
        const dataFrame = allData
        const dataFrameHeader = dataFrame.shift()
        return dataFrameHeader
    }

    function getDataFrame() {
        console.log('getDataFrame: ', allData)
        const dataFrame = allData
        dataFrame.shift()
        return dataFrame
    }

    function getDataInDay(day) {
        console.log('getDataInDay: ', day, allData)
        const dataFrame = allData
        dataFrame.shift()
        return dataFrame[day]
    }

    // console.log('dataFrameHeader: ', dataFrameHeader)
    // console.log('dataFrame: ', dataFrame)

    return {
        getAllData,
        getDataInDay,
        getDataFrameHeader,
        getDataFrame,
    }
}