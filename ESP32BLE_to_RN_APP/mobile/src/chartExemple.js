import 'react-native-get-random-values'

import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";

export default class App extends Component {
  onRef = ref => {
    if (ref) {
      this.chart = ref;
    }
  };

  onData = param => {};


  initChart = () => {
    function randomData() {
      now = new Date(+now + oneDay);
      value = value + Math.random() * 21 - 10;
      return {
        name: now.toString(),
        value: [
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
          Math.round(value)
        ]
      };
    }

    var data = [];
    var now = +new Date(1997, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var value = Math.random() * 1000;
    for (var i = 0; i < 1000; i++) {
      data.push(randomData());
    }

    option = {
      title: {
        text: "Ativação cerebral"
      },
      tooltip: {
        trigger: "axis",
        formatter: function(params) {
          params = params[0];
          var date = new Date(params.name);
          return (
            date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear() +
            " : " +
            params.value[1]
          );
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: "time",
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: "value",
        boundaryGap: [0, "100%"],
        splitLine: {
          show: false
        }
      },
      series: [
        {
          type: "line",
          showSymbol: false,
          hoverAnimation: false,
          data: data
        }
      ]
    };

    this.chart.setOption(option);


    //with query parameter
    this.chart.getOption(
      option => {
        console.log(option);
      },
      ["dataZoom", "series"]
    );

    const instance = this.chart;

    setInterval(function() {
      data.shift();
      data.push(randomData());
      console.log("data: ", data)
      instance.setOption({
        series: [
          {
            data: data
          }
        ]
      });
    }, 100);

    addValue = () => {
        data.push(500);
    }

  }

  render() {
    return (
      <SafeAreaView style={styles.chartContainer}>
        <Button title="Start" onPress={this.initChart} />

        <ECharts
          option={{}}
          ref={this.onRef}
          additionalCode={this.additionalCode}
          onData={this.onData}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  chartContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});