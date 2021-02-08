
var fs = require('fs');
var JSDOM = require('jsdom').JSDOM;
var jsdom = new JSDOM('<body><div id="container"></div></body>', { runScripts: 'dangerously' });
var window = jsdom.window;
var anychart = require('anychart')(window);
var anychartExport = require('anychart-nodejs')(anychart);

module.exports = {
  async index(req, res) {
    // var chart = anychart.pie([10, 20, 7, 18, 30]);
    // chart.bounds(0, 0, 800, 600);
    // chart.container('container');
    // chart.draw();

    var chart = anychart.pie();
    chart.data([
      ["Chocolate", 5],
      ["Rhubarb compote", 2],
      ["Crêpe Suzette", 2],
      ["American blueberry", 2],
      ["Buttermilk", 1]
    ]);
    chart.title("Top 5 pancake fillings");
    chart.container("container");
    chart.draw();

    anychartExport.exportTo(chart, 'svg').then(function (image) {
      fs.writeFile('anychart.svg', image, function (fsWriteError) {
        if (fsWriteError) {
          console.log(fsWriteError);
        } else {
          console.log('Complete');
        }
      });
    }, function (generationError) {
      console.log(generationError);
    });

    const svgFinal = 'chart'

    fs.writeFileSync('anyChart.svg', svgFinal);
    return res.status(200).json({ result: "Gráfico anyChart", SVG: svgFinal })
  }
}