//news section
let newsUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=3956997889b94373964e8e2d0396bff3"

let newsOutput;
const Http = new XMLHttpRequest();
const url=newsUrl;
Http.open("GET", url);
Http.responseType = 'json';
Http.send();
Http.onreadystatechange=(e)=>{
    newsOutput = Http.response;
    let arr = newsOutput.articles;
    console.log(arr);
    
//    var element = document.getElementById("#news")
//    for (let i = 0; i>arr.length; i++){
//        createElement("BUTTON")
//    }
};


//for stock graph using d3
function getStock(){
    
    let apiKey = "XWXP8R16N8GLZ4QB"
    let typeCsv = "&datatype=csv"

    let url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey="+apiKey+typeCsv
  
    //Call Alphan Vantage API using d3.json(url, [callback])
    d3.csv(url, function (error, data) { 
        if (error){
            console.log("error, data not load");
        }
        
        var margin = {
            top: 5,
            right: 50,
            bottom: 50,
            left: 35
        };
        console.log(data)
        
        let width = 1180 - margin.left - margin.right;
        let height = 500 - margin.top - margin.bottom;

        let svg = d3.select('.graph').append('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)

        let g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        
        
        // ========= Open Value ============
        let min_open = d3.min(data, function (d) {
            return d.open;
        })
        console.log(min_open)
        let max_open = d3.max(data, function (d) {
            return d.open;
        })
        console.log(max_open)
        
        let y_open = d3.scaleLinear()
                    .domain([min_open, max_open])
                    .range([height, min_open]);
        
        let x = d3.scaleBand()
                        .domain(data.map(function (d) {
                            return d.timestamp
                        }))
                        .range([0, width])
        
        let line_open = d3.line()
                    .x(function(d) { return x(d.timestamp)+40;})
                    .y(function(d) { return y_open(d.open);})
        
        svg.append("path")
            .data([data])
            .attr("class", "open")
            .attr("d", line_open)
            .attr("stroke", "#C16969")
            .attr("fill", "none")
            .attr("stroke-width", "1px")
        
        // ============ High ===============
        
        let min_high = d3.min(data, function (d) {
            return d.high;
        })
        console.log(min_high)
        let max_high = d3.max(data, function (d) {
            return d.high;
        })
        console.log(max_high)
        
        let y_high = d3.scaleLinear()
                    .domain([min_high, max_high])
                    .range([height, min_high]);
        
        
        let line_high = d3.line()
                    .x(function(d) { return x(d.timestamp)+40;})
                    .y(function(d) { return y_high(d.high);})
        
        svg.append("path")
            .data([data])
            .attr("class", "high")
            .attr("d", line_high)
            .attr("stroke", "#EFDC05")
            .attr("fill", "none")
            .attr("stroke-width", "1px")
        
        
        // ============ Low ===============
        
        let min_low = d3.min(data, function (d) {
            return d.low;
        })
        console.log(min_low)
        let max_low = d3.max(data, function (d) {
            return d.low;
        })
        console.log(max_low)
        
        let y_low = d3.scaleLinear()
                    .domain([min_low, max_low])
                    .range([height, min_low]);
        
        let line_low = d3.line()
                    .x(function(d) { return x(d.timestamp)+40;})
                    .y(function(d) { return y_low(d.low);})
        
        svg.append("path")
            .data([data])
            .attr("class", "low")
            .attr("d", line_low)
            .attr("stroke", "#58C9B9")
            .attr("fill", "none")
            .attr("stroke-width", "1px")
        
        // ============ Close ===============
        
        let min_close = d3.min(data, function (d) {
            return d.close;
        })
        console.log(min_close)
        let max_close = d3.max(data, function (d) {
            return d.close;
        })
        console.log(max_close)
        
        let y_close = d3.scaleLinear()
                    .domain([min_close, max_close])
                    .range([height, min_close]);
        
        
        let line_close = d3.line()
                    .x(function(d) { return x(d.timestamp)+40;})
                    .y(function(d) { return y_close(d.close);})
        
        svg.append("path")
            .data([data])
            .attr("class", "close")
            .attr("d", line_close)
            .attr("stroke", "#F17F42")
            .attr("fill", "none")
            .attr("stroke-width", "1px")
        
        // =============axis==============
        var xAxisCall = d3.axisBottom(x);
        g.append('g')
            .attr("class", "x-axis")
            .attr("transform", "translate(0, " + height + ")")
            .transition().duration(1500)
            .call(xAxisCall)
                .selectAll("text")
                .attr("y", "5")
                .attr("x", "-10")
                .attr("text-anchor", "end")
                .attr("transform", "rotate(-50)")
                .style("font-size", "5px")
        xAxisCall.tickArguments([10])
        
        var yAxisCall = d3.axisLeft(y_high);
            g.append('g')
                .attr("class", "y-axis")
                .transition().duration(1500)
                .call(yAxisCall)



    }).header("Content-Type", "application/csv")  
       
}

getStock();


//button control with jquery
$(document).ready(function(){
    $( ".open" ).click(function() {
        $( ".high" ).toggle( "slow" );
        $( ".low" ).toggle( "slow" );
        $( ".close" ).toggle( "slow" );
    })
    
    $( ".close" ).click(function() {
        $( ".high" ).toggle( "slow" );
        $( ".low" ).toggle( "slow" );
        $( ".open" ).toggle( "slow" );
    })
    
    $( ".low" ).click(function() {
        $( ".high" ).toggle( "slow" );
        $( ".open" ).toggle( "slow" );
        $( ".close" ).toggle( "slow" );
    })
    
    $( ".high" ).click(function() {
        $( ".open" ).toggle( "slow" );
        $( ".low" ).toggle( "slow" );
        $( ".close" ).toggle( "slow" );
    })
    
    
    
})











