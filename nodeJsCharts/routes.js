const express = require("express")

const app = express()

const jsdom = require("jsdom")
const { JSDOM } = jsdom

const d3 = require('d3')
const dom = new JSDOM(`<!DOCTYPE html><body></body>`)

app.get('/', async (request, response)=> {

    let body = d3.select(dom.window.document.querySelector("body"))
    let svg = body.append('svg')
        .attr('width', 100)
        .attr('height', 100)
        .attr('xmlns', 'http://www.w3.org/2000/svg')
    
    svg.append("rect")
        .attr("x", 10)
        .attr("y", 10)
        .attr("width", 80)
        .attr("height", 80)
        .style("fill", "orange")
    
    // fs.writeFileSync('out.svg', body.html())

    return response.status(200).json({ok: "ok 2", SVG: body.html()})
})

app.listen(3333)
