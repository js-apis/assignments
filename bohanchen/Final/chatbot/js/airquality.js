function getAirQuality() {
    console.log("it worked");
    var cityname = 'Beijing';
    var airUrl = "https://api.openaq.org/v1/measurements?city=" + cityname;

    //margin convention
    
    //load Air quality data, anynmous function
    d3.json(airUrl, function (error, data) {
        if (error) console.log("error, data not load");
        console.log(data)

        var margin = {
        top: 5,
        right: 50,
        bottom: 50,
        left: 50
        };

        var width = 1180 - margin.right - margin.left;
        var height = 500 - margin.top - margin.bottom;

        //define SVG
        var svg = d3.select(".graph-2").append('svg')
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)

        let g = svg.append("g")
            .attr("transfrom", "translate(" + margin.left + "," + margin.top + ")");


        //creating empety array for date and pm2.5 value
        var airData = new Array();
        var dateData = new Array();

        for (var i = 0; i < 100; i++) {
            //put data in the new array
            airData.push(data["results"][i].value);
            dateData.push(data["results"][i].date.local);
        };

//         console.log(dateData);
        
        let max_air = d3.max(airData)
        let min_air = d3.min(airData)

//        console.log(max_air)
        var y = d3.scaleLinear()
            .domain([0, max_air])
            .range([height,min_air]);
//        console.log(airData);
        
//        var y_axis = d3.scaleLinear()
//            .domain([0, max_air])
//            .range([height,0]);
//                


        var x = d3.scaleLinear()
            .domain([0, dateData.length])
            .range([0, width]);
        
//        let x = d3.scaleBand()
//                        .domain(dateData.map(function (d,i) {
//                            return dateData[i]
//                        }))
//                        .range([0, width])

        var color = d3.scaleQuantize()
            .domain([0, max_air])
            .range(["#4EA67D","#E06D06","#D64E4E"]);

        var bars = svg.selectAll("rect")
            .data(airData)

        bars.enter()
            .append("rect")
            .attr("x", function (d, i) {
                return x(i)+10;
            })
            .attr("y", function (d) {
                return y(d)
            })
            .attr("height", function (d) {
                return height-y(d)
            })
            .attr("width", 2)
            .attr("fill", function (d) {
                return color(d)
            })
            .attr("transform", "translate(20, 0 )")
        svg.exit().remove();
        
        //===============axis==============
        var xAxisCall = d3.axisBottom(x)
        
        g.append('g')
            .attr("class", "x-axis")
            .attr("transform", "translate(20, " + height+ ")")
                .call(xAxisCall)
                .selectAll("text")
                .attr("y", "5")
                .attr("x", "-10")
                .attr("text-anchor", "end")
                .attr("transform", "rotate(-50)")
                .style("font-size", "10px")
        
        var yAxisCall = d3.axisLeft(y)
        g.append('g')
            .attr("class", "y-axis")
            .attr("transform", "translate(20, 0 )")
            .call(yAxisCall)
                .selectAll("text")
                .style("font-size","10px")
        
        $('.air-quality').html("Current PM2.5: "+airData[0])
        
        
        
    });
}

getAirQuality()