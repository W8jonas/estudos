import 'react-native-get-random-values';

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { ECharts } from "react-native-echarts-wrapper";


const App = () => {

  // const option = {
  //   xAxis: {
  //     type: "category",
  //     data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  //   },
  //   yAxis: {
  //     type: "value"
  //   },
  //   series: [
  //     {
  //       data: [820, 932, 901, 934, 1290, 1330, 1320],
  //       type: "line"
  //     }
  //   ]
  // }

  const option = {
    grid3D: {},
    xAxis3D: {},
    yAxis3D: {},
    zAxis3D: {},
    series: [{
        type: 'scatter3D',
        symbolSize: 50,
        data: [[-1, -1, -1], [0, 0, 0], [1, 1, 1]],
        itemStyle: {
            opacity: 1
        }
    }]
  }
  
  return (
      <View style={styles.sectionContainer}>
        
        <Text> Alguem consegue me ver ?</Text>
        <ECharts
          option={option}
          backgroundColor="rgba(93, 169, 81, 0.3)"
        />

      </View>
  )
};


const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});
export default App;


// /**
//  * Created by womkim on 2017/11/6.
//  */

// import React from 'react'
// import { View, Platform } from 'react-native'

// import { WebView } from 'react-native-webview';

// const renderChart = ({ height=300, option, geoJson }) => `
//   var main = document.getElementById('main');
//   main.style.height = "${300}px";
//   var myChart = echarts.init(document.getElementById('main'));
//   if (${JSON.stringify(geoJson)} != {}){
//     echarts.registerMap('geoJson', ${JSON.stringify(geoJson)});
//   }
//   myChart.setOption(${JSON.stringify(option)});
//   `

// export default class EchartsGL extends React.Component {
//   componentWillReceiveProps (nextProps) {
//     if (JSON.stringify(this.props.option) !== JSON.stringify(nextProps.option) || this.props.height !== nextProps.height || JSON.stringify(this.props.geoJson) !== JSON.stringify(nextProps.geoJson)) {
//       this.echartsgl.injectJavaScript(renderChart({ height: 300, option: nextProps.option, geoJson: {}}))
//     }
//   }

//   render () {
//     const { height, width, style, source, option, onLoadStart, onLoad, onError, onLoadEnd, onMessage, renderLoading, renderError,geoJson } = this.props
//     let chart = renderChart({ height: 300, option, geoJson })
//     // console.log(JSON.stringify(chart))
//     return <View style={{width:300, height:300}}>
//       <WebView
//         ref={node => { this.echartsgl = node }}
//         style={[style, {height:300, width:300, geoJson: {}, backgroundColor: 'transparent'}]}
//         injectedJavaScript={chart}
//         source={source ? source : Platform.OS === 'android' && __DEV__ ? { uri:'file:///android_asset/echarts-gl.html' } : require('./echarts-gl.html')}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//         scalesPageToFit={true}
//         startInLoadingState={false}
//         decelerationRate="normal"
//         onLoadStart={onLoadStart}
//         onLoad={onLoad}
//         onError={onError}
//         onLoadEnd={onLoadEnd}
//         onMessage={onMessage}
//         renderLoading={renderLoading}
//         renderError={renderError}
//         scrollEnabled={false}
//       />
//     </View>
//   }
// }

// import React from 'react'
// import { View, Text, Button } from 'react-native'
// import Echarts from 'react-native-web-echarts'

// export default class EcahrtsDemo extends React.Component {
//   state = {
//     data1: [1, 2, 3, 4],
//     data2: [2, 4, 6, 8],
//     data3: [1, 2, 3, 4]
//   }
//   render () {
//     const { data1, data2, data3 } = this.state
//     const option = {
//       title: {
//         text: 'ECharts demo'
//       },
//       tooltip: {},
//       angleAxis: {
//       },
//       radiusAxis: {
//         type: 'category',
//         data: ['周一', '周二', '周三', '周四'],
//         z: 10
//       },
//       polar: {
//       },
//       series: [{
//         type: 'bar',
//         data: data1,
//         coordinateSystem: 'polar',
//         name: 'A',
//         stack: 'a'
//       }, {
//         type: 'bar',
//         data: data2,
//         coordinateSystem: 'polar',
//         name: 'B',
//         stack: 'a'
//       }, {
//         type: 'bar',
//         data: data3,
//         coordinateSystem: 'polar',
//         name: 'C',
//         stack: 'a'
//       }],
//       legend: {
//         show: true,
//         data: ['A', 'B', 'C'],
//         right: 0
//       }
//     }
//     return <View style={{flex: 1}}>
//       <View style={{flex: 1, alignItems: 'center'}}>
//         <Text>{'\necharts demo\n'}</Text>
//         <Echarts
//           option={option}
//           height={300}
//         />
//         <Button
//           title="reload"
//           onPress={() => { this.setState({
//             data1: Array(4).fill(0).map(_ => Math.ceil(Math.random() * (10))),
//             data2: Array(4).fill(0).map(_ => Math.ceil(Math.random() * (10))),
//             data3: Array(4).fill(0).map(_ => Math.ceil(Math.random() * (10)))
//           })} }
//         />
//       </View>
//     </View>
//   }
// }