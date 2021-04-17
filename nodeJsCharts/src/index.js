
const jsdom = require("jsdom")
const { JSDOM } = jsdom

const d3 = require('d3')
const fs = require('fs')

// const penguins_ = require('./penguins.csv')

async function Controller(request, response) {
    // "<svg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\">
    //   <rect x=\"10\" y=\"10\" width=\"80\" height=\"80\" style=\"fill: orange;\">
    //   </rect>
    // </svg>"
    // const dom = new JSDOM(`<!DOCTYPE html><body></body>`)

    // const body = d3.select(dom.window.document.querySelector("body"))
    // let svg = body.append('svg')
    //     .attr('width', 500)
    //     .attr('height', 500)
    //     .attr('xmlns', 'http://www.w3.org/2000/svg')

    // svg.append("rect")
    //     .attr("x", 10)
    //     .attr("y", 10)
    //     .attr("width", 100)
    //     .attr("height", 100)
    //     .style("fill", "orange")

    // svg.append("rect")
    //     .attr("x", 190)
    //     .attr("y", 90)
    //     .attr("width", 100)
    //     .attr("height", 100)
    //     .style("fill", "green")

    const padding = 20
    const size = 233.5
    const width = 954
    const columns = ["culmen_length_mm", "culmen_depth_mm", "flipper_length_mm", "body_mass_g"]
    // const data = [
    //         { 
    //             species: "Adelie",
    //             island: "Torgersen",
    //             culmen_length_mm: 39.1,
    //             culmen_depth_mm: 18.7,
    //             flipper_length_mm: 181,
    //             body_mass_g: 3750,
    //             sex: "MALE"
    //         },
    //         { 
    //             species: "Adelie",
    //             island: "Torgersen",
    //             culmen_length_mm: 39.5,
    //             culmen_depth_mm: 18.7,
    //             flipper_length_mm: 181,
    //             body_mass_g: 3800,
    //             sex: "FEMALE"
    //         },
    //     ]

    const data = d3.csvParse('./penguins.csv', d3.autoType)
    // const data = d3.csvParse(await FileAttachment("./penguins.csv").text(), d3.autoType)
    // const data = d3.csv('penguins.csv')

    const z = d3.scaleOrdinal().domain(data.map(d => d.species)).range(d3.schemeCategory10)

    const x = columns.map(c => d3.scaleLinear().domain(d3.extent(data, d => d[c])).rangeRound([padding / 2, size - padding / 2]))
    const y = x.map(x => x.copy().range([size - padding / 2, padding / 2]))

    const axis = d3.axisLeft().ticks(6).tickSize(-size * columns.length)

    const yAxis = g => g.selectAll("g").data(y).join("g")
                .attr("transform", (d, i) => `translate(0,${i * size})`)
                .each(function(d) { return d3.select(this).call(axis.scale(d)); })
                .call(g => g.select(".domain").remove())
                .call(g => g.selectAll(".tick line").attr("stroke", "#ddd"))

    const xAxis = g => g.selectAll("g").data(x).join("g")
                .attr("transform", (d, i) => `translate(${i * size},0)`)
                .each(function(d) { return d3.select(this).call(axis.scale(d)); })
                .call(g => g.select(".domain").remove())
                .call(g => g.selectAll(".tick line").attr("stroke", "#ddd"))

    

    const dom = new JSDOM(`<!DOCTYPE html><body></body>`)
    const body = d3.select(dom.window.document.querySelector("body"))
    // let svg = body.append('svg').attr('width', 100).attr('height', 100).attr('xmlns', 'http://www.w3.org/2000/svg');

    const svg = body.append('svg')
        .attr('width', 1000)
        .attr('height', 1000)
        .attr('xmlns', 'http://www.w3.org/2000/svg')
        .attr("viewBox", `${-padding} 0 ${width} ${width}`)
        .style("max-width", "100%")
        .style("height", "auto");
        
    // const dom = new JSDOM(`<!DOCTYPE html><body></body>`)
    // const svg = d3.select(dom.svg(width, width))
        // .attr("viewBox", `${-padding} 0 ${width} ${width}`)
        // .style("max-width", "100%")
        // .style("height", "auto");
    
    svg.append("g")
        .call(xAxis);
    
    svg.append("g")
        .call(yAxis);
    
    const cell = svg.append("g")
        .selectAll("g")
        .data(d3.cross(d3.range(columns.length), d3.range(columns.length)))
        .join("g")
        .attr("transform", ([i, j]) => `translate(${i * size},${j * size})`);
    
    cell.append("rect")
        .attr("fill", "none")
        .attr("stroke", "#aaa")
        .attr("x", padding / 2 + 0.5)
        .attr("y", padding / 2 + 0.5)
        .attr("width", size - padding)
        .attr("height", size - padding);
    
    cell.each(function([i, j]) {
        d3.select(this).selectAll("circle")
        .data(data.filter(d => !isNaN(d[columns[i]]) && !isNaN(d[columns[j]])))
        .join("circle")
            .attr("cx", d => x[i](d[columns[i]]))
            .attr("cy", d => y[j](d[columns[j]]));
    });
    
    const circle = cell.selectAll("circle")
        .attr("r", 3.5)
        .attr("fill-opacity", 0.7)
        .attr("fill", d => z(d.species));
    
    svg.append("g")
        .style("font", "bold 10px sans-serif")
        .selectAll("text")
        .data(columns)
        .join("text")
        .attr("transform", (d, i) => `translate(${i * size},${i * size})`)
        .attr("x", padding)
        .attr("y", padding)
        .attr("dy", ".71em")
        .text(d => d);
          
        
    const svgFinal = body.html()

    fs.writeFileSync('out.svg', svgFinal)

    return response.status(200).json({result: "Gráfico FODA", SVG: svgFinal})
}

module.exports = {
    Controller
}

