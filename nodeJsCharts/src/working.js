
var jsdom = require('jsdom')
const { JSDOM } = jsdom

const d3 = require('d3')
const fs = require('fs')

const { default: svgr } = require('@svgr/core')

const { pieData } = require('./data/pie')
const { barData } = require('./data/bar')
const { stackedBarData } = require('./data/stackedBar')
const { lineData } = require('./data/line')

const { parse } = require('svg-parser')

const removeReactCompString = require('./utils/util')

module.exports = {
    async simpleTest(req, res) {
        const dom = new JSDOM(`<!DOCTYPE html><body></body>`)

        let body = d3.select(dom.window.document.querySelector("body"))
        let svg = body.append('svg').attr('width', 100).attr('height', 100).attr('xmlns', 'http://www.w3.org/2000/svg')
        svg.append("rect")
            .attr("x", 50)
            .attr("y", 10)
            .attr("width", 80)
            .attr("height", 80)
            .style("fill", "orange")

        const svgFinal = body.html()

        const jsCode = svgr.sync(svgFinal, {
            icon: false,
            plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
            native: true,
        }, { componentName: 'MyComponent' })

        let jsCodeWithoutReactComponents = jsCode.replace(`export default MyComponent;`, '')

        jsCodeWithoutReactComponents = jsCodeWithoutReactComponents.replace('{...props}', '')

        jsCodeWithoutReactComponents = jsCodeWithoutReactComponents.replace(`import Svg, { Path } from "react-native-svg";`, '')

        jsCodeWithoutReactComponents = jsCodeWithoutReactComponents.replace(`import * as React from "react";`, '')
        jsCodeWithoutReactComponents = jsCodeWithoutReactComponents.replace(`\n\n\nfunction MyComponent(props) {`, '')
        jsCodeWithoutReactComponents = jsCodeWithoutReactComponents.replace(`\n  return `, '')
        jsCodeWithoutReactComponents = jsCodeWithoutReactComponents.replace(`;\n}\n\n`, '')

        fs.writeFileSync('working.svg', svgFinal)
        return res.status(200).json({ result: "Gráfico de padrao", SVG: jsCodeWithoutReactComponents })
    },

    async bar(req, res) {
        const dom = new JSDOM(`<!DOCTYPE html><body></body>`)

        const margin = 60 / 2
        const width = 1000 / 2 - 2 * margin
        const height = 600 / 2 - 2 * margin
        const sample = barData

        let body = d3.select(dom.window.document.querySelector("body"))

        // let svg = body.append('svg')
        //     .attr("viewBox", [0, 0, width, height])
        //     .attr('width', 1000).attr('height', 500)
        //     .attr('xmlns', 'http://www.w3.org/2000/svg')

        const chart = body.append('svg')
            .attr("viewBox", [0, 0, width, height])
            .attr('width', width).attr('height', height)
            .attr('xmlns', 'http://www.w3.org/2000/svg')

        // const chart = body.append('svg')
        //     .attr("viewBox", [-50, -80, width + 50, height + 100])
        //     .attr('width', width + 50).attr('height', height + 100).attr('xmlns', 'http://www.w3.org/2000/svg')

        chart.append('g').attr('transform', `translate(${margin}, ${margin})`)

        const xScale = d3.scaleBand()
            .domain(sample.map((s) => s.language))
            .range([0, width])
            .padding(0.2)

        const yScale = d3.scaleLinear()
            .domain([0, 100])
            .range([height, 0])

        chart.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(xScale))
        chart.append('g').call(d3.axisLeft(yScale))

        chart.append('g')
            .attr('class', 'grid')
            .call(d3.axisLeft()
                .scale(yScale)
                .tickSize(-width, 0, 0)
                .tickFormat('')
            )

        // const defsGradient = <defs>
        //     <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        //         <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
        //         <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
        //     </linearGradient>
        // </defs>

        const colors = ['#58f', '#128', '#538']
        const grad = chart.append('defs')
            .append('linearGradient')
            .attr('id', 'grad')
            .attr('x1', '0%')
            .attr('x2', '0%')
            .attr('y1', '0%')
            .attr('y2', '100%');

        grad.selectAll('stop')
            .data(colors)
            .enter()
            .append('stop')
            .style('stop-color', (d) => d)
            .style('stop-opacity', '100%')
            .attr('offset', (d, i) => 100 * (i / (colors.length - 1)) + '%')

        chart.selectAll()
            .data(sample)
            .enter()
            .append('rect')
            .attr('x', (s) => xScale(s.language))
            .attr('y', (s) => yScale(s.value))
            .attr('height', (s) => height - yScale(s.value))
            .attr('width', xScale.bandwidth())
            .style("fill", (s) => s.color)
            .attr("ry", "20")
            .style('fill', 'url(#grad)')

        // chart.append('text')
        //     .attr('x', -height / 2)
        //     .attr('y', -30)
        //     .attr('transform', 'rotate(-90)')
        //     .attr('text-anchor', 'middle')
        //     .text('Love meter (%)')

        // chart.append('text')
        //     .attr('x', width / 2 + margin)
        //     .attr('y', -20)
        //     .attr('text-anchor', 'middle')
        //     .text('Most loved programming languages in 2018')

        const svgFinal = body.html()

        const jsCode = svgr.sync(svgFinal, {
            icon: false,
            plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
            native: true,
        }, { componentName: 'MyComponent' })

        const jsCodeWithoutReactComponentString = removeReactCompString(jsCode)
        const chartParsed = parse(jsCodeWithoutReactComponentString)

        fs.writeFileSync('working-bar.svg', svgFinal)
        return res.status(200).json({ result: "Gráfico de barras", SVG: chartParsed })
    },

    async stackedBar(req, res) {
        const dom = new JSDOM(`<!DOCTYPE html><body></body>`)

        const margin = 60
        const width = 1000 - 2 * margin
        const height = 600 - 2 * margin
        const sample = stackedBarData

        let body = d3.select(dom.window.document.querySelector("body"))

        const chart = body.append('svg')
            .attr("viewBox", [-50, -80, width + 50, height + 100])
            .attr('width', width + 50).attr('height', height + 100).attr('xmlns', 'http://www.w3.org/2000/svg')

        chart.append('g').attr('transform', `translate(${margin}, ${margin})`)

        const xScale = d3.scaleBand()
            .domain(sample.map((s) => s.language))
            .range([0, width])
            .padding(0.2)

        const yScale = d3.scaleLinear()
            .domain([0, 100])
            .range([height, 0])

        chart.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(xScale))
        chart.append('g').call(d3.axisLeft(yScale))

        chart.append('g')
            .attr('class', 'grid')
            .call(d3.axisLeft()
                .scale(yScale)
                .tickSize(-width, 0, 0)
                .tickFormat('')
            )

        chart.selectAll()
            .data(sample)
            .enter()
            .append('rect')
            .attr('x', (s) => xScale(s.language))
            .attr('y', (s) => yScale(s.finalValue))
            .attr('height', (s) => height - yScale(s.finalValue - s.initialValue))
            .attr('width', xScale.bandwidth())
            .style("fill", (s) => s.color)
            .attr("ry", "20")
            .style('fill', '#203090')


        const svgFinal = body.html()

        // const jsCode = svgr.sync(svgFinal, {
        //     icon: false,
        //     plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
        //     native: true,
        // }, { componentName: 'MyComponent' })

        // svgr(svgFinal, {
        //     plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
        //   }).then(jsCode => {
        //     console.log(jsCode)
        //   })

        fs.writeFileSync('working-stackedBar.svg', svgFinal)
        return res.status(200).json({ result: "Gráfico de barras empilhadas", SVG: svgFinal })
    },

    async line(req, res) {
        const dom = new JSDOM(`<!DOCTYPE html><body></body>`)
        const width = 1000
        const height = 500
        const margin = ({ top: 20, right: 30, bottom: 30, left: 40 })

        let body = d3.select(dom.window.document.querySelector("body"))
        let svg = body.append('svg').attr('width', 1000).attr('height', 500).attr('xmlns', 'http://www.w3.org/2000/svg')
            .attr("viewBox", [0, 0, width, height])

        let data = lineData

        // data = data.sort((a, b) => { return b.date - a.date })

        const y = d3.scaleLinear()
            .domain([0, 100]).nice()
            .range([height - margin.bottom, margin.top])

        const x = d3.scaleTime()
            // .domain(d3.extent(data, d => d.date))
            .domain(d3.extent(data, d => d.date))
            .range([margin.left, width - margin.right])

        // const xScale = d3.scaleBand()
        //     .range([0, width])
        //     .domain(data.map((s) => s.date))

        const yAxis = g => g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y))
            // .call(g => g.select(".domain").remove()) // remove a linha do eixo
            .call(g => g.select(".tick:last-of-type text").clone()
                .attr("x", 3)
                .attr("text-anchor", "start")
                .attr("font-weight", "bold")
                .text(data.y))

        const xAxis = g => g
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(d3.timeDay.every(1)).tickFormat(d3.timeFormat('%d/%m')))

        const line = d3.line()
            .defined(d => !isNaN(d.value))
            .x(d => x(d.date))
            .y(d => y(d.value))
            .curve(d3.curveCardinal.tension(0.5))

        svg.append("g").call(xAxis)
        svg.append("g").call(yAxis)

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", line)

        const svgFinal = body.html()
        fs.writeFileSync('line.svg', svgFinal)
        return res.status(200).json({ result: "Gráfico de Linha", SVG: svgFinal })
    },

    async pie(req, res) {
        const dom = new JSDOM(`<!DOCTYPE html><body></body>`)
        const width = 500
        const height = 500

        let body = d3.select(dom.window.document.querySelector("body"))
        let svg = body.append('svg').attr('width', 500).attr('height', 500).attr('xmlns', 'http://www.w3.org/2000/svg')
            .attr("viewBox", [-width / 2, -height / 2, width, height])

        const pie = d3.pie()
            .sort(null)
            .value(d => d.value)

        const minValue = Math.min(width, height)

        const radius = minValue / 2 * 0.8
        const arcLabel = d3.arc().innerRadius(radius).outerRadius(radius)

        const arc = d3.arc()
            .innerRadius(minValue / 2 - 100)
            .outerRadius(minValue / 2)

        const data = pieData

        const arcs = pie(data)

        svg.append("g")
            .attr("stroke", "white")
            .selectAll("path")
            .data(arcs)
            .join("path")
            .attr("fill", d => d.data.color)
            .attr("d", arc)
            .append("title")
            .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`)

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
                .text(d => d.data.value.toLocaleString()))

        const svgFinal = body.html()

        // const jsCode = svgr.sync(svgFinal, {
        //     icon: false,
        //     plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
        //     native: true,
        // }, { componentName: 'MyComponent' })

        fs.writeFileSync('pie.svg', svgFinal)
        return res.status(200).json({ result: "Gráfico de Pizza", SVG: svgFinal })
    },
}
