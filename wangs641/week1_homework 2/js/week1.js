var points = [40, 100, 1, 5, 25, 10];
 

function api() {
	document.getElementById("demo").innerHTML = points; 

}

function callApi1() {
  points.sort();
  document.getElementById("demo").innerHTML = points;
}

function callApi2() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}




