function render_twits(twits) {
    var diameter = document.getElementById("twits").offsetWidth,
        format = d3.format(",d"),
        color = d3.scaleOrdinal(d3.schemeCategory20c);

    var bubble = d3.pack()
        .size([diameter, diameter])
        .padding(1.5);

    var svg = d3.select("#twits").append("svg")
        .attr("width", diameter)
        .attr("height", diameter)

    var root = d3.hierarchy({children: twits})
        .sum(function (d) { return d.size; })
        .sort(function (a, b) { return b.size - a.size; });

    bubble(root);
    var node = svg.selectAll(".node")
        .data(root.children)
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });

    node.append("title")
        .attr("title", function (d) { return d.data.size; });

    node.append("circle")
        .attr("r", function (d) { return d.r; })
        
        .style("stroke", "18b5eb")
        .style("stroke-width", 1)
        .style("fill", "18b5eb")
        .attr("opacity", .2);

    node.append("text")
        .attr("dy", ".3em")
        .style("text-anchor", "middle")
        .text(function (d) { return d.data.name.substring(0, d.r / 4); });

    d3.select(self.frameElement).style("height", diameter + "px");
};

function render_headlines(headlines) {
    console.log("=== reneder headlines ===")
    d3.select('#headlines')
        .selectAll('p')
        .data(headlines)
        .enter()
        .append('p')
        .text(function (d) { return d; })
};

function main() {

    fetch('/Twitter/trends')
        .then((resp) => resp.json()) 
        .then(function (data) {
            render_twits(data)
        })

    fetch('/NYT/articles')
        .then((resp) => resp.json()) 
        .then(function (data) {
            render_headlines(data)
        })

};