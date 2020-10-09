import 'react-native-get-random-values'

import React, { useState, useEffect, useRef } from "react"

import { ECharts } from "react-native-echarts-wrapper"

import { StyleSheet, View, Dimensions } from "react-native"

const window = Dimensions.get('window')


var data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];

var _dateList = data.map(function (item) {
    return item[0];
});
var _valueList = data.map(function (item) {
    return item[1];
});


const chartOption = {
    title: {
      text: "Ativação cerebral"
    },
    visualMap: {
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 4000
    },
    xAxis: {
        data: _dateList
    },
    yAxis: {
        splitLine: {show: false}
    },
    series: {
        type: 'line',
        showSymbol: false,
        data: _valueList
    }
}

export default function Chart(props) {
    
    const [dateList, setDateList] = useState([])
    
    const [valueList, setValueList] = useState([])

    const chartRef = useRef(null)

    useEffect(()=>{
        const now = new Date(new Date().getTime() - new Date().getTimezoneOffset()/60 * 3600 * 1000).toISOString().substr(11, 8)
        
        const x = now
        const y = props.newData
        
        console.log("props.newData", x, y)

        setDateList([...dateList, x])
        setValueList([...valueList, y])
        
        console.log('atualizando dateList: ', dateList)
        console.log('atualizando valueList: ', valueList)

        updateChart()
    }, [props.newData])

    useEffect(()=>{
        updateChart()
    }, [dateList, valueList])

    function updateChart() {
        console.log('updateChart dateList: ', dateList)
        console.log('updateChart valueList: ', valueList)

        chartRef.current.setOption({
            xAxis: {
                data: dateList
            },
            series: {
                data: valueList
            }
        })
    }


  return (
    <View style={styles.chartContainer}>
        <ECharts
          option={chartOption}
          ref={chartRef}
        />
      </View>
  )
}


const styles = StyleSheet.create({
    chartContainer: {
        flex: 1,
        width: window.width - 20, 
        height: 400,
        backgroundColor: "#F5FCFF"
    }
})

