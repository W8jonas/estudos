
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
        .attr("x", 50)
        .attr("y", 50)
        .attr('width', width).attr('height', height).attr('xmlns', 'http://www.w3.org/2000/svg')

        chart.append('g')
        .attr("x", 50)
        .attr("y", 50)
        .attr('transform', `translate(${margin}, ${margin})`);
        
        const xScale = d3.scaleBand().range([0, width]).domain(sample.map((s) => s.language)).padding(0.2)
        chart.append('g')
        .attr("x", 50)
        .attr("y", 50)
        .attr('transform', `translate(0, ${height})`).call(d3.axisBottom(xScale))

        const yScale = d3.scaleLinear().range([height, 0]).domain([0, 100]);
        chart.append('g')
        .attr("x", 50)
        .attr("y", 50).call(d3.axisLeft(yScale));
       
        chart.selectAll()
            .data(sample)
            .enter()
            .append('rect')
            .attr('x', (s) => xScale(s.language))
            .attr('y', (s) => yScale(s.value))
            .attr('height', (s) => height - yScale(s.value))
            .attr('width', xScale.bandwidth())
        
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
            .attr('x', -(height / 2) - margin)
            .attr('y', margin / 2.4)
            .attr('transform', 'rotate(-90)')
            .attr('text-anchor', 'middle')
            .text('Love meter (%)')

        
        chart.append('text')
            .attr('x', width / 2 + margin)
            .attr('y', 10)
            .attr('text-anchor', 'middle')
            .text('Most loved programming languages in 2018')
            
        
        const svgFinal = body.html()

        fs.writeFileSync('working-bar.svg', svgFinal);
        return res.status(200).json({result: "Gráfico de padrao", SVG: svgFinal})
    },
}
