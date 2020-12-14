
import Papa from 'papaparse';
import {useState, useEffect} from 'react'

const DAY = 300

export default function useRepository() {

    const [dataLoaded, setDataLoaded] = useState(false)
    const [allData, setAllData] = useState([])

    useEffect(() => {
        async function getAllData() {
            async function fetchCsv() {
                const response = await fetch('newData.csv');
                const reader = response.body.getReader();
                const result = await reader.read();
                const decoder = new TextDecoder('utf-8');
                const csv = decoder.decode(result.value);
                return csv;
            }
    
            async function getDataFromCsv() {
                const dataFromCsv = Papa.parse(await fetchCsv())
                const dataFrame = dataFromCsv.data
                console.log('dataFrame: ', dataFrame)
                setAllData(dataFrame)
            }
    
            getDataFromCsv()
            setDataLoaded(true)
        }

        if(!dataLoaded) getAllData()
        console.log('Tivemos mudanças allData:', allData)

    }, [allData])

    
    // function getAllData() {

    //     function fetchCsv() {
    //         return fetch('newData.csv').then((response) => {
    //             const reader = response.body.getReader()
    //             return reader.read().then((result) => {
    //                 const decoder = new TextDecoder('utf-8')
    //                 const csv = decoder.decode(result.value)
    //                 return csv
    //             })
    //         })
    //     }

    //     // async function fetchCsv() {
    //     //     const response = await fetch('newData.csv');
    //     //     const reader = response.body.getReader();
    //     //     const result = await reader.read();
    //     //     const decoder = new TextDecoder('utf-8');
    //     //     const csv = decoder.decode(result.value);
    //     //     return csv;
    //     // }

    //     function getDataFromCsv() {
    //         fetchCsv().then((CsvReturned) => {
    //             const dataFromCsv = Papa.parse(CsvReturned)
    //             const dataFrame = dataFromCsv.data
    //             console.log('dataFrame: ', dataFrame)
    //             setAllData(dataFrame)
    //         })
    //     }

    //     // async function getDataFromCsv() {
    //     //     const dataFromCsv = Papa.parse(await fetchCsv())
    //     //     const dataFrame = dataFromCsv.data
    //     //     console.log('dataFrame: ', dataFrame)
    //     //     setAllData(dataFrame)
    //     // }

    //     getDataFromCsv()
    //     setDataLoaded(true)
    // }


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
        repositoryAllData: allData,
        getDataInDay,
        getDataFrameHeader,
        getDataFrame,
    }
}
