
import Papa from 'papaparse';
import { useState, useEffect, useCallback } from 'react'


export default function useAsyncHook(allDataFromCsv, dayToShow) {
    const [globalData, setGlobalData] = useState([]);
    const [dayData, setDayData] = useState([]);
    const [valueMaxFoundedInActualDay, setValueMaxFoundedInActualDay] = useState(0);

    useEffect(() => {
        setGlobalData(allDataFromCsv)
    }, [allDataFromCsv])

    const getDataInDay = useCallback((day) => {
        const dataFrame = [...globalData]
        dataFrame.shift()
        return dataFrame.map((item, index) => {
            // dataFrame[index][day]

            const totalConfirmed = Number(Math.sqrt(Number(dataFrame[index][day])).toFixed(0))

            const long = Number(dataFrame[index][2])
            const lat = Number(dataFrame[index][3])

            return [lat, long, totalConfirmed]
        })
    }, [globalData])

    useEffect(() => {
        // retornar as informações desse dia, dayToShow
        // retornar o maior valor encontrado nesse dia
        const dataInThisDay = getDataInDay(dayToShow)
        const valueMaxInThisDay = getValueMaxInThisDay(dataInThisDay)

        setDayData(dataInThisDay)

        setValueMaxFoundedInActualDay(valueMaxInThisDay)

    }, [dayToShow, getDataInDay])

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

    function getValueMaxInThisDay(dataInThisDay) {
        let valueMaxFounded = 0

        dataInThisDay.map((day) => {
            const totalConfirmed = Number(day[2])

            if (totalConfirmed > valueMaxFounded) {
                valueMaxFounded = totalConfirmed
            }

            return valueMaxFounded
        })
        return valueMaxFounded
    }


    return {
        globalData,
        dayData,
        valueMaxFoundedInActualDay,
        getDataFrameHeader,
        getDataFrame,
        getDataInDay,
    }
}
