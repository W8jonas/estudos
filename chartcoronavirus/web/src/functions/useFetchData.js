
import Papa from 'papaparse';
import {useState, useEffect} from 'react'


export default function useAsyncHook(dayToShow) {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState("false");

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
                setResult(dataFrame)
            }
    
            getDataFromCsv()
        }

        getAllData()
        console.log('Tivemos mudanças result:', result)

    }, [dayToShow])
  
    function getDataFrameHeader() {
        console.log('getDataFrameHeader: ', result)
        const dataFrame = result
        const dataFrameHeader = dataFrame.shift()
        return dataFrameHeader
    }

    function getDataFrame() {
        console.log('getDataFrame: ', result)
        const dataFrame = result
        dataFrame.shift()
        return dataFrame
    }

    function getDataInDay(day) {
        console.log('getDataInDay: ', day, result)
        const dataFrame = result
        dataFrame.shift()
        return dataFrame[day]
    }


    return {
        result, 
        loading,
        getDataFrameHeader,
        getDataFrame,
        getDataInDay,
    }
  }