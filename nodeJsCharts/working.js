
var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const d3 = require('d3');
const fs = require('fs');

module.exports = {
    async index(req, res) {
        const dom = new JSDOM(`<!DOCTYPE html><body></body>`);

        let body = d3.select(dom.window.document.querySelector("body"))
        let svg = body.append('svg').attr('width', 100).attr('height', 100).attr('xmlns', 'http://www.w3.org/2000/svg');
        svg.append("rect")
            .attr("x", 50)
            .attr("y", 10)
            .attr("width", 80)
            .attr("height", 80)
            .style("fill", "orange");

        const svgFinal = body.html()

        fs.writeFileSync('working.svg', svgFinal);
        return res.status(200).json({result: "Gráfico de padrao", SVG: svgFinal})
    },
    async bar(req, res) {
        const dom = new JSDOM(`<!DOCTYPE html><body></body>`)

        const margin = 60
        const width = 1000 - 2 * margin
        const height = 600 - 2 * margin
        const sample = [
            {
              language: 'Rust',
              value: 78.9,
              color: '#000000'
            },
            {
              language: 'Kotlin',
              value: 75.1,
              color: '#00a2ee'
            },
            {
              language: 'Python',
              value: 68.0,
              color: '#fbcb39'
            },
            {
              language: 'TypeScript',
              value: 67.0,
              color: '#007bc8'
            },
            {
              language: 'Go',
              value: 65.6,
              color: '#65cedb'
            },
            {
              language: 'Swift',
              value: 65.1,
              color: '#ff6e52'
            },
            {
              language: 'JavaScript',
              value: 61.9,
              color: '#f9de3f'
            },
            {
              language: 'C#',
              value: 60.4,
              color: '#5d2f8e'
            },
            {
              language: 'F#',
              value: 59.6,
              color: '#008fc9'
            },
            {
              language: 'Clojure',
              value: 59.6,
              color: '#507dca'
            }
        ]

        let body = d3.select(dom.window.document.querySelector("body"))

        const chart = body.append('svg')
        .attr("viewBox", [-50, -80, width+50, height+100])
        .attr('width', width+50).attr('height', height+100).attr('xmlns', 'http://www.w3.org/2000/svg')

        chart.append('g').attr('transform', `translate(${margin}, ${margin})`);
        
        const xScale = d3.scaleBand().range([0, width]).domain(sample.map((s) => s.language)).padding(0.2)
        chart.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(xScale))

        const yScale = d3.scaleLinear().range([height, 0]).domain([0, 100]);
        chart.append('g').call(d3.axisLeft(yScale));
       

        chart.selectAll()
            .data(sample)
            .enter()
            .append('rect')
            .attr('x', (s) => xScale(s.language))
            .attr('y', (s) => yScale(s.value))
            .attr('height', (s) => height - yScale(s.value))
            .attr('width', xScale.bandwidth())
            .style("fill", (s) => s.color)

        
        // chart.append('g')
        // .attr('class', 'grid')
        // .attr('transform', `translate(0, ${height})`)
        // .call(d3.axisBottom()
        //     .scale(xScale)
        //     .tickSize(-height, 0, 0)
        //     .tickFormat(''))

        chart.append('g')
            .attr('class', 'grid')
            .call(d3.axisLeft()
            .scale(yScale)
            .tickSize(-width, 0, 0)
            .tickFormat(''))

        chart.append('text')
            .attr('x', -height/2)
            .attr('y', -30)
            .attr('transform', 'rotate(-90)')
            .attr('text-anchor', 'middle')
            .text('Love meter (%)')

        
        chart.append('text')
            .attr('x', width / 2 + margin)
            .attr('y', -20)
            .attr('text-anchor', 'middle')
            .text('Most loved programming languages in 2018')
            
        
        const svgFinal = body.html()

        fs.writeFileSync('working-bar.svg', svgFinal);
        return res.status(200).json({result: "Gráfico de barras", SVG: svgFinal})
    },

    async line(req, res) {
        const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
        const width = 1000
        const height = 500
        const margin = ({top: 20, right: 30, bottom: 30, left: 40})

        let body = d3.select(dom.window.document.querySelector("body"))
        let svg = body.append('svg').attr('width', 1000).attr('height', 500).attr('xmlns', 'http://www.w3.org/2000/svg')
        .attr("viewBox", [0, 0, width, height])
        
        let data = [
            {date: 2007-04-23, value: 93.24},
            {date: 2007-04-24, value: 95.35},
            {date: 2007-04-25, value: 98.84},
            {date: 2007-04-26, value: 99.92},
            {date: 2007-04-29, value: 99.8},
            {date: 2007-05-01, value: 99.47},
            {date: 2007-05-02, value: 100.39},
            {date: 2007-05-03, value: 100.4},
            {date: 2007-05-04, value: 100.81},
            {date: 2007-05-07, value: 103.92},
            {date: 2007-05-08, value: 105.06},
            {date: 2007-05-09, value: 106.88},
            {date: 2007-05-09, value: 107.34},
            {date: 2007-05-10, value: 108.74},
            {date: 2007-05-13, value: 109.36},
            {date: 2007-05-14, value: 107.52},
            {date: 2007-05-15, value: 107.34},
            {date: 2007-05-16, value: 109.44},
            {date: 2007-05-17, value: 110.02},
            {date: 2007-05-20, value: 111.98},
            {date: 2007-05-21, value: 113.54},
            {date: 2007-05-22, value: 112.89},
            {date: 2007-05-23, value: 110.69},
            {date: 2007-05-24, value: 113.62},
            {date: 2007-05-28, value: 114.35},
            {date: 2007-05-29, value: 118.77},
            {date: 2007-05-30, value: 121.19},
            {date: 2007-06-01, value: 118.4},
            {date: 2007-06-04, value: 121.33},
            {date: 2007-06-05, value: 122.67},
            {date: 2007-06-06, value: 123.64},
            {date: 2007-06-07, value: 124.07},
            {date: 2007-06-08, value: 124.49},
            {date: 2007-06-10, value: 120.19},
            {date: 2007-06-11, value: 120.38},
            {date: 2007-06-12, value: 117.5},
            {date: 2007-06-13, value: 118.75},
            {date: 2007-06-14, value: 120.5},
            {date: 2007-06-17, value: 125.09},
            {date: 2007-06-18, value: 123.66},
            {date: 2007-06-19, value: 121.55},
            {date: 2007-06-20, value: 123.9},
            {date: 2007-06-21, value: 123},
            {date: 2007-06-24, value: 122.34},
            {date: 2007-06-25, value: 119.65},
            {date: 2007-06-26, value: 121.89},
            {date: 2007-06-27, value: 120.56},
            {date: 2007-06-28, value: 122.04},
            {date: 2007-07-02, value: 121.26},
            {date: 2007-07-03, value: 127.17},
            {date: 2007-07-05, value: 132.75},
            {date: 2007-07-06, value: 132.3},
            {date: 2007-07-09, value: 130.33},
            {date: 2007-07-09, value: 132.35},
            {date: 2007-07-10, value: 132.39},
            {date: 2007-07-11, value: 134.07},
            {date: 2007-07-12, value: 137.73},
            {date: 2007-07-15, value: 138.1},
            {date: 2007-07-16, value: 138.91},
            {date: 2007-07-17, value: 138.12},
            {date: 2007-07-18, value: 140},
            {date: 2007-07-19, value: 143.75},
            {date: 2007-07-22, value: 143.7},
            {date: 2007-07-23, value: 134.89},
            {date: 2007-07-24, value: 137.26},
            {date: 2007-07-25, value: 146},
            {date: 2007-07-26, value: 143.85},
            {date: 2007-07-29, value: 141.43},
            {date: 2007-07-30, value: 131.76},
            {date: 2007-08-01, value: 135},
            {date: 2007-08-02, value: 136.49},
            {date: 2007-08-03, value: 131.85},
            {date: 2007-08-06, value: 135.25},
            {date: 2007-08-07, value: 135.03},
            {date: 2007-08-08, value: 134.01},
            {date: 2007-08-09, value: 126.39},
            {date: 2007-08-09, value: 125},
            {date: 2007-08-12, value: 127.79},
            {date: 2007-08-13, value: 124.03},
            {date: 2007-08-14, value: 119.9},
            {date: 2007-08-15, value: 117.05},
            {date: 2007-08-16, value: 122.06},
            {date: 2007-08-19, value: 122.22},
            {date: 2007-08-20, value: 127.57},
            {date: 2007-08-21, value: 132.51},
            {date: 2007-08-22, value: 131.07},
            {date: 2007-08-23, value: 135.3},
            {date: 2007-08-26, value: 132.25},
            {date: 2007-08-27, value: 126.82},
            {date: 2007-08-28, value: 134.08},
            {date: 2007-08-29, value: 136.25},
            {date: 2007-08-30, value: 138.48},
            {date: 2007-09-04, value: 144.16},
            {date: 2007-09-05, value: 136.76},
            {date: 2007-09-06, value: 135.01},
            {date: 2007-09-07, value: 131.77},
            {date: 2007-09-09, value: 136.71},
            {date: 2007-09-10, value: 135.49},
            {date: 2007-09-11, value: 136.85},
            {date: 2007-09-12, value: 137.2},
            {date: 2007-09-13, value: 138.81},
            {date: 2007-09-16, value: 138.41},
            {date: 2007-09-17, value: 140.92},
            {date: 2007-09-18, value: 140.77},
            {date: 2007-09-19, value: 140.31},
            {date: 2007-09-20, value: 144.15},
            {date: 2007-09-23, value: 148.28},
            {date: 2007-09-24, value: 153.18},
            {date: 2007-09-25, value: 152.77},
            {date: 2007-09-26, value: 154.5},
            {date: 2007-09-27, value: 153.47},
            {date: 2007-10-01, value: 156.34},
            {date: 2007-10-02, value: 158.45},
            {date: 2007-10-03, value: 157.92},
            {date: 2007-10-04, value: 156.24},
            {date: 2007-10-05, value: 161.45},
            {date: 2007-10-08, value: 167.91},
            {date: 2007-10-09, value: 167.86},
            {date: 2007-10-09, value: 166.79},
            {date: 2007-10-10, value: 162.23},
            {date: 2007-10-11, value: 167.25},
            {date: 2007-10-14, value: 166.98},
            {date: 2007-10-15, value: 169.58},
            {date: 2007-10-16, value: 172.75},
            {date: 2007-10-17, value: 173.5},
            {date: 2007-10-18, value: 170.42},
            {date: 2007-10-21, value: 174.36},
            {date: 2007-10-22, value: 186.16},
            {date: 2007-10-23, value: 185.93},
            {date: 2007-10-24, value: 182.78},
            {date: 2007-10-25, value: 184.7},
            {date: 2007-10-28, value: 185.09},
            {date: 2007-10-29, value: 187},
            {date: 2007-10-30, value: 189.95},
            {date: 2007-11-01, value: 187.44},
            {date: 2007-11-02, value: 187.87},
            {date: 2007-11-05, value: 186.18},
            {date: 2007-11-06, value: 191.79},
            {date: 2007-11-07, value: 186.3},
            {date: 2007-11-08, value: 175.47},
            {date: 2007-11-09, value: 165.37},
            {date: 2007-11-11, value: 153.76},
            {date: 2007-11-12, value: 169.96},
            {date: 2007-11-13, value: 166.11},
            {date: 2007-11-14, value: 164.3},
            {date: 2007-11-15, value: 166.39},
            {date: 2007-11-18, value: 163.95},
            {date: 2007-11-19, value: 168.85},
            {date: 2007-11-20, value: 168.46},
            {date: 2007-11-22, value: 171.54},
            {date: 2007-11-25, value: 172.54},
            {date: 2007-11-26, value: 174.81},
            {date: 2007-11-27, value: 180.22},
            {date: 2007-11-28, value: 184.29},
            {date: 2007-11-29, value: 182.22},
            {date: 2007-12-03, value: 178.86},
            {date: 2007-12-04, value: 179.81},
            {date: 2007-12-05, value: 185.5},
            {date: 2007-12-06, value: 189.95},
            {date: 2007-12-07, value: 194.3},
            {date: 2007-12-09, value: 194.21},
            {date: 2007-12-10, value: 188.54},
            {date: 2007-12-11, value: 190.86},
            {date: 2007-12-12, value: 191.83},
            {date: 2007-12-13, value: 190.39},
            {date: 2007-12-16, value: 184.4},
            {date: 2007-12-17, value: 182.98},
            {date: 2007-12-18, value: 183.12},
            {date: 2007-12-19, value: 187.21},
            {date: 2007-12-20, value: 193.91},
            {date: 2007-12-23, value: 198.8},
            {date: 2007-12-25, value: 198.95},
            {date: 2007-12-26, value: 198.57},
            {date: 2007-12-27, value: 199.83},
            {date: 2007-12-30, value: 198.08},
            {date: 2008-01-02, value: 194.84},
            {date: 2008-01-03, value: 194.93},
            {date: 2008-01-04, value: 180.05},
            {date: 2008-01-07, value: 177.64},
            {date: 2008-01-08, value: 171.25},
            {date: 2008-01-09, value: 179.4},
            {date: 2008-01-09, value: 178.02},
            {date: 2008-01-10, value: 172.69},
            {date: 2008-01-13, value: 178.78},
            {date: 2008-01-14, value: 169.04},
            {date: 2008-01-15, value: 159.64},
            {date: 2008-01-16, value: 160.89},
            {date: 2008-01-17, value: 161.36},
            {date: 2008-01-21, value: 155.64},
            {date: 2008-01-22, value: 139.07},
            {date: 2008-01-23, value: 135.6},
            {date: 2008-01-24, value: 130.01},
            {date: 2008-01-27, value: 130.01},
            {date: 2008-01-28, value: 131.54},
            {date: 2008-01-29, value: 132.18},
            {date: 2008-01-30, value: 135.36},
            {date: 2008-02-01, value: 133.75},
            {date: 2008-02-04, value: 131.65},
            {date: 2008-02-05, value: 129.36},
            {date: 2008-02-06, value: 122},
            {date: 2008-02-07, value: 121.24},
            {date: 2008-02-08, value: 125.48},
            {date: 2008-02-10, value: 129.45},
            {date: 2008-02-11, value: 124.86},
            {date: 2008-02-12, value: 129.4},
            {date: 2008-02-13, value: 127.46},
            {date: 2008-02-14, value: 124.63},
            {date: 2008-02-18, value: 122.18},
            {date: 2008-02-19, value: 123.82},
            {date: 2008-02-20, value: 121.54},
            {date: 2008-02-21, value: 119.46},
            {date: 2008-02-24, value: 119.74},
            {date: 2008-02-25, value: 119.15},
            {date: 2008-02-26, value: 122.96},
            {date: 2008-02-27, value: 129.91},
            {date: 2008-02-28, value: 125.02},
            {date: 2008-03-03, value: 121.73},
            {date: 2008-03-04, value: 124.62},
            {date: 2008-03-05, value: 124.49},
            {date: 2008-03-06, value: 120.93},
            {date: 2008-03-07, value: 122.25},
            {date: 2008-03-09, value: 119.69},
            {date: 2008-03-10, value: 127.35},
            {date: 2008-03-11, value: 126.03},
            {date: 2008-03-12, value: 127.94},
            {date: 2008-03-13, value: 126.61},
            {date: 2008-03-16, value: 126.73},
            {date: 2008-03-17, value: 132.82},
            {date: 2008-03-18, value: 129.67},
            {date: 2008-03-19, value: 133.27},
            {date: 2008-03-23, value: 139.53},
            {date: 2008-03-24, value: 140.98},
            {date: 2008-03-25, value: 145.06},
            {date: 2008-03-26, value: 140.25},
            {date: 2008-03-27, value: 143.01},
            {date: 2008-03-30, value: 143.5},
            {date: 2008-04-01, value: 149.53},
            {date: 2008-04-02, value: 147.49},
            {date: 2008-04-03, value: 151.61},
            {date: 2008-04-04, value: 153.08},
            {date: 2008-04-07, value: 155.89},
            {date: 2008-04-08, value: 152.84},
            {date: 2008-04-09, value: 151.44},
            {date: 2008-04-09, value: 154.55},
            {date: 2008-04-10, value: 147.14},
            {date: 2008-04-13, value: 147.78},
            {date: 2008-04-14, value: 148.38},
            {date: 2008-04-15, value: 153.7},
            {date: 2008-04-16, value: 154.49},
            {date: 2008-04-17, value: 161.04},
            {date: 2008-04-20, value: 168.16},
            {date: 2008-04-21, value: 160.2},
            {date: 2008-04-22, value: 162.89},
            {date: 2008-04-23, value: 168.94},
            {date: 2008-04-24, value: 169.73},
            {date: 2008-04-27, value: 172.24},
            {date: 2008-04-28, value: 175.05},
            {date: 2008-04-29, value: 173.95},
            {date: 2008-05-01, value: 180},
            {date: 2008-05-02, value: 180.94},
            {date: 2008-05-05, value: 184.73},
            {date: 2008-05-06, value: 186.66},
            {date: 2008-05-07, value: 182.59},
            {date: 2008-05-08, value: 185.06},
            {date: 2008-05-09, value: 183.45},
            {date: 2008-05-11, value: 188.16},
            {date: 2008-05-12, value: 189.96},
            {date: 2008-05-13, value: 186.26},
            {date: 2008-05-14, value: 189.73},
            {date: 2008-05-15, value: 187.62},
            {date: 2008-05-18, value: 183.6},
            {date: 2008-05-19, value: 185.9},
            {date: 2008-05-20, value: 178.19},
            {date: 2008-05-21, value: 177.05},
            {date: 2008-05-22, value: 181.17},
            {date: 2008-05-26, value: 186.43},
            {date: 2008-05-27, value: 187.01},
            {date: 2008-05-28, value: 186.69},
            {date: 2008-05-29, value: 188.75},
            {date: 2008-06-02, value: 186.1},
            {date: 2008-06-03, value: 185.37},
            {date: 2008-06-04, value: 185.19},
            {date: 2008-06-05, value: 189.43},
            {date: 2008-06-06, value: 185.64},
            {date: 2008-06-09, value: 181.61},
            {date: 2008-06-09, value: 185.64},
            {date: 2008-06-10, value: 180.81},
            {date: 2008-06-11, value: 173.26},
            {date: 2008-06-12, value: 172.37},
            {date: 2008-06-15, value: 176.84},
            {date: 2008-06-16, value: 181.43},
            {date: 2008-06-17, value: 178.75},
            {date: 2008-06-18, value: 180.9},
            {date: 2008-06-19, value: 175.27},
            {date: 2008-06-22, value: 173.16},
            {date: 2008-06-23, value: 173.25},
            {date: 2008-06-24, value: 177.39},
            {date: 2008-06-25, value: 168.26},
            {date: 2008-06-26, value: 170.09},
            {date: 2008-06-29, value: 167.44},
            {date: 2008-07-01, value: 174.68},
            {date: 2008-07-02, value: 168.18},
            {date: 2008-07-03, value: 170.12},
            {date: 2008-07-07, value: 175.16},
            {date: 2008-07-08, value: 179.55},
            {date: 2008-07-09, value: 174.25},
            {date: 2008-07-09, value: 176.63},
            {date: 2008-07-10, value: 172.58},
            {date: 2008-07-13, value: 173.88},
            {date: 2008-07-14, value: 169.64},
            {date: 2008-07-15, value: 172.81},
            {date: 2008-07-16, value: 171.81},
            {date: 2008-07-17, value: 165.15},
            {date: 2008-07-20, value: 166.29},
            {date: 2008-07-21, value: 162.02},
            {date: 2008-07-22, value: 166.26},
            {date: 2008-07-23, value: 159.03},
            {date: 2008-07-24, value: 162.12},
            {date: 2008-07-27, value: 154.4},
            {date: 2008-07-28, value: 157.08},
            {date: 2008-07-29, value: 159.88},
            {date: 2008-07-30, value: 158.95},
            {date: 2008-08-01, value: 156.66},
            {date: 2008-08-04, value: 153.23},
            {date: 2008-08-05, value: 160.64},
            {date: 2008-08-06, value: 164.19},
            {date: 2008-08-07, value: 163.57},
            {date: 2008-08-08, value: 169.55},
            {date: 2008-08-10, value: 173.56},
            {date: 2008-08-11, value: 176.73},
            {date: 2008-08-12, value: 179.3},
            {date: 2008-08-13, value: 179.32},
            {date: 2008-08-14, value: 175.74},
            {date: 2008-08-17, value: 175.39},
            {date: 2008-08-18, value: 173.53},
            {date: 2008-08-19, value: 175.84},
            {date: 2008-08-20, value: 174.29},
            {date: 2008-08-21, value: 176.79},
            {date: 2008-08-24, value: 172.55},
            {date: 2008-08-25, value: 173.64},
            {date: 2008-08-26, value: 174.67},
            {date: 2008-08-27, value: 173.74},
            {date: 2008-08-28, value: 169.53},
            {date: 2008-09-02, value: 166.19},
            {date: 2008-09-03, value: 166.96},
            {date: 2008-09-04, value: 161.22},
            {date: 2008-09-05, value: 160.18},
            {date: 2008-09-08, value: 157.92},
            {date: 2008-09-09, value: 151.68},
            {date: 2008-09-09, value: 151.61},
            {date: 2008-09-10, value: 152.65},
            {date: 2008-09-11, value: 148.94},
            {date: 2008-09-14, value: 140.36},
            {date: 2008-09-15, value: 139.88},
            {date: 2008-09-16, value: 127.83},
            {date: 2008-09-17, value: 134.09},
            {date: 2008-09-18, value: 140.91},
            {date: 2008-09-21, value: 131.05},
            {date: 2008-09-22, value: 126.84},
            {date: 2008-09-23, value: 128.71},
            {date: 2008-09-24, value: 131.93},
            {date: 2008-09-25, value: 128.24},
            {date: 2008-09-28, value: 105.26},
            {date: 2008-09-29, value: 113.66},
            {date: 2008-10-01, value: 109.12},
            {date: 2008-10-02, value: 100.1},
            {date: 2008-10-03, value: 97.07},
            {date: 2008-10-06, value: 98.14},
            {date: 2008-10-07, value: 89.16},
            {date: 2008-10-08, value: 89.79},
            {date: 2008-10-09, value: 88.74},
            {date: 2008-10-09, value: 96.8},
            {date: 2008-10-12, value: 110.26},
            {date: 2008-10-13, value: 104.08},
            {date: 2008-10-14, value: 97.95},
            {date: 2008-10-15, value: 101.89},
            {date: 2008-10-16, value: 97.4},
            {date: 2008-10-19, value: 98.44},
            {date: 2008-10-20, value: 91.49},
            {date: 2008-10-21, value: 96.87},
            {date: 2008-10-22, value: 98.23},
            {date: 2008-10-23, value: 96.38},
            {date: 2008-10-26, value: 92.09},
            {date: 2008-10-27, value: 99.91},
            {date: 2008-10-28, value: 104.55},
            {date: 2008-10-29, value: 111.04},
            {date: 2008-10-30, value: 107.59},
            {date: 2008-11-03, value: 106.96},
            {date: 2008-11-04, value: 110.99},
            {date: 2008-11-05, value: 103.3},
            {date: 2008-11-06, value: 99.1},
            {date: 2008-11-07, value: 98.24},
            {date: 2008-11-09, value: 95.88},
            {date: 2008-11-10, value: 94.77},
            {date: 2008-11-11, value: 90.12},
            {date: 2008-11-12, value: 96.44},
            {date: 2008-11-13, value: 90.24},
            {date: 2008-11-16, value: 88.14},
            {date: 2008-11-17, value: 89.91},
            {date: 2008-11-18, value: 86.29},
            {date: 2008-11-19, value: 80.49},
            {date: 2008-11-20, value: 82.58},
            {date: 2008-11-23, value: 92.95},
            {date: 2008-11-24, value: 90.8},
            {date: 2008-11-25, value: 95},
            {date: 2008-11-26, value: 95},
            {date: 2008-11-27, value: 92.67},
            {date: 2008-12-01, value: 88.93},
            {date: 2008-12-02, value: 92.47},
            {date: 2008-12-03, value: 95.9},
            {date: 2008-12-04, value: 91.41},
            {date: 2008-12-05, value: 94},
            {date: 2008-12-08, value: 99.72},
            {date: 2008-12-09, value: 100.06},
            {date: 2008-12-09, value: 98.21},
            {date: 2008-12-10, value: 95},
            {date: 2008-12-11, value: 98.27},
            {date: 2008-12-14, value: 94.75},
            {date: 2008-12-15, value: 95.43},
            {date: 2008-12-16, value: 89.16},
            {date: 2008-12-17, value: 89.43},
            {date: 2008-12-18, value: 90},
            {date: 2008-12-21, value: 85.74},
            {date: 2008-12-22, value: 86.38},
            {date: 2008-12-23, value: 85.04},
            {date: 2008-12-24, value: 85.04},
            {date: 2008-12-25, value: 85.81},
            {date: 2008-12-28, value: 86.61},
            {date: 2008-12-29, value: 86.29},
            {date: 2008-12-30, value: 85.35},
            {date: 2009-01-01, value: 85.35},
            {date: 2009-01-02, value: 90.75},
            {date: 2009-01-05, value: 94.58},
            {date: 2009-01-06, value: 93.02},
            {date: 2009-01-07, value: 91.01},
            {date: 2009-01-08, value: 92.7},
            {date: 2009-01-09, value: 90.58},
            {date: 2009-01-11, value: 88.66},
            {date: 2009-01-12, value: 87.71},
            {date: 2009-01-13, value: 85.33},
            {date: 2009-01-14, value: 83.38},
            {date: 2009-01-15, value: 82.33},
            {date: 2009-01-19, value: 78.2},
            {date: 2009-01-20, value: 82.83},
            {date: 2009-01-21, value: 88.36},
            {date: 2009-01-22, value: 88.36},
            {date: 2009-01-25, value: 89.64},
            {date: 2009-01-26, value: 90.73},
            {date: 2009-01-27, value: 94.2},
            {date: 2009-01-28, value: 93},
            {date: 2009-01-29, value: 90.13},
            {date: 2009-02-02, value: 91.51},
            {date: 2009-02-03, value: 92.98},
            {date: 2009-02-04, value: 93.55},
            {date: 2009-02-05, value: 96.46},
            {date: 2009-02-06, value: 99.72},
            {date: 2009-02-09, value: 102.51},
            {date: 2009-02-09, value: 97.83},
            {date: 2009-02-10, value: 96.82},
            {date: 2009-02-11, value: 99.27},
            {date: 2009-02-12, value: 99.16},
            {date: 2009-02-16, value: 94.53},
            {date: 2009-02-17, value: 94.37},
            {date: 2009-02-18, value: 90.64},
            {date: 2009-02-19, value: 91.2},
            {date: 2009-02-22, value: 86.95},
            {date: 2009-02-23, value: 90.25},
            {date: 2009-02-24, value: 91.16},
            {date: 2009-02-25, value: 89.19},
            {date: 2009-02-26, value: 89.31},
            {date: 2009-03-02, value: 87.94},
            {date: 2009-03-03, value: 88.37},
            {date: 2009-03-04, value: 91.17},
            {date: 2009-03-05, value: 88.84},
            {date: 2009-03-06, value: 85.3},
            {date: 2009-03-09, value: 83.11},
            {date: 2009-03-09, value: 88.63},
            {date: 2009-03-10, value: 92.68},
            {date: 2009-03-11, value: 96.35},
            {date: 2009-03-12, value: 95.93},
            {date: 2009-03-15, value: 95.42},
            {date: 2009-03-16, value: 99.66},
            {date: 2009-03-17, value: 101.52},
            {date: 2009-03-18, value: 101.62},
            {date: 2009-03-19, value: 101.59},
            {date: 2009-03-22, value: 107.66},
            {date: 2009-03-23, value: 106.5},
            {date: 2009-03-24, value: 106.49},
            {date: 2009-03-25, value: 109.87},
            {date: 2009-03-26, value: 106.85},
            {date: 2009-03-29, value: 104.49},
            {date: 2009-03-30, value: 105.12},
            {date: 2009-04-01, value: 108.69},
            {date: 2009-04-02, value: 112.71},
            {date: 2009-04-03, value: 115.99},
            {date: 2009-04-06, value: 118.45},
            {date: 2009-04-07, value: 115},
            {date: 2009-04-08, value: 116.32},
            {date: 2009-04-09, value: 119.57},
            {date: 2009-04-09, value: 119.57},
            {date: 2009-04-12, value: 120.22},
            {date: 2009-04-13, value: 118.31},
            {date: 2009-04-14, value: 117.64},
            {date: 2009-04-15, value: 121.45},
            {date: 2009-04-16, value: 123.42},
            {date: 2009-04-19, value: 120.5},
            {date: 2009-04-20, value: 121.76},
            {date: 2009-04-21, value: 121.51},
            {date: 2009-04-22, value: 125.4},
            {date: 2009-04-23, value: 123.9},
            {date: 2009-04-26, value: 124.73},
            {date: 2009-04-27, value: 123.9},
            {date: 2009-04-28, value: 125.14},
            {date: 2009-04-29, value: 125.83},
            {date: 2009-05-01, value: 127.24},
            {date: 2009-05-04, value: 132.07},
            {date: 2009-05-05, value: 132.71},
            {date: 2009-05-06, value: 132.5},
            {date: 2009-05-07, value: 129.06},
            {date: 2009-05-08, value: 129.19},
        ]
        data = data.sort((a, b)=>{return b-a})

        const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top])

        const x = d3.scaleUtc()
        .domain(d3.extent(data, d => d.date))
        .range([margin.left, width - margin.right])

        const yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select(".domain").remove())
        .call(g => g.select(".tick:last-of-type text").clone()
            .attr("x", 3)
            .attr("text-anchor", "start")
            .attr("font-weight", "bold")
            .text(data.y))

        const xAxis = g => g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))

        const line = d3.line()
        .defined(d => !isNaN(d.value))
        .x(d => x(d.date))
        .y(d => y(d.value))

        svg.append("g")
            .call(xAxis);
    
        svg.append("g")
            .call(yAxis);
    
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
        .attr("d", line);

        const svgFinal = body.html()
        fs.writeFileSync('line.svg', svgFinal);
        return res.status(200).json({result: "Gráfico de Linha", SVG: svgFinal})
    },
    async pie(req, res) {
        const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
        const width = 500
        const height = 500
            
        let body = d3.select(dom.window.document.querySelector("body"))
        let svg = body.append('svg').attr('width', 500).attr('height', 500).attr('xmlns', 'http://www.w3.org/2000/svg')
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        
        const pie = d3.pie()
            .sort(null)
            .value(d => d.value)

 
        const radius = Math.min(width, height) / 2 * 0.8;
        const arcLabel = d3.arc().innerRadius(radius).outerRadius(radius);
        
        const arc = d3.arc().innerRadius(0).outerRadius(Math.min(width, height) / 2 - 1)
        
        const data = [
            {name: "<5", value: 19912018},
            {name: "5-9", value: 20501982},
            {name: "10-14", value: 20679786},
            {name: "15-19", value: 21354481},
            {name: "20-24", value: 22604232},
            {name: "25-29", value: 21698010},
            {name: "30-34", value: 21183639},
            {name: "35-39", value: 19855782},
            {name: "40-44", value: 20796128},
            {name: "45-49", value: 21370368},
            {name: "50-54", value: 22525490},
            {name: "55-59", value: 21001947},
            {name: "60-64", value: 18415681},
            {name: "65-69", value: 14547446},
            {name: "70-74", value: 10587721},
            {name: "75-79", value: 7730129},
            {name: "80-84", value: 5811429},
            {name: "≥85", value: 5938752},
        ]

        const color = d3.scaleOrdinal()
            .domain(data.map(d => d.name))
            .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())

        const arcs = pie(data);

        // svg = d3.create("svg")
        //     .attr("viewBox", [-width / 2, -height / 2, width, height]);
        
        svg.append("g")
            .attr("stroke", "white")
            .selectAll("path")
            .data(arcs)
            .join("path")
            .attr("fill", d => color(d.data.name))
            .attr("d", arc)
            .append("title")
            .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);
        
        svg.append("g")
            .attr("font-family", "sans-serif")
            .attr("font-size", 12)
            .attr("text-anchor", "middle")
            .selectAll("text")
            .data(arcs)
            .join("text")
            .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
            .call(text => text.append("tspan")
                .attr("y", "-0.4em")
                .attr("font-weight", "bold")
                .text(d => d.data.name))
            .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
                .attr("x", 0)
                .attr("y", "0.7em")
                .attr("fill-opacity", 0.7)
                .text(d => d.data.value.toLocaleString()));

        const svgFinal = body.html()
        fs.writeFileSync('pie.svg', svgFinal);
        return res.status(200).json({result: "Gráfico de Pizza", SVG: svgFinal})
    },
}
