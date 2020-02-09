function myJsFunction()
{
    var cf = parseFloat(document.getElementById('cf').value);
    var r = parseFloat(document.getElementById('r').value);
    var n = parseFloat(document.getElementById('n').value);

    var cf_table = cf
    var r_table = r
    var n_table = n
    var fva = cf * (Math.pow((1 + (r / 100)), n) - 1) / (r / 100)


    document.getElementById("cf").innerHTML = cf.toFixed(2);
    document.getElementById("r").innerHTML = r.toFixed(2);
    document.getElementById("n").innerHTML = n.toFixed(2);
    document.getElementById("fva").innerHTML = fva.toFixed(2);

    document.getElementById("cf_table").innerHTML = cf_table.toFixed(2);
    document.getElementById("r_table").innerHTML = r_table.toFixed(2);
    document.getElementById("n_table").innerHTML = n_table.toFixed(2);

}

var slider = document.getElementById("cf");
var output = document.getElementById("cf_out");
output.innerHTML = slider.value; // Display the default slider value

var r_slider = document.getElementById("r");
var r_output = document.getElementById("r_out");
r_output.innerHTML = r_slider.value; // Display the default slider value

var n_slider = document.getElementById("n");
var n_output = document.getElementById("n_out");
n_output.innerHTML = n_slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
    // document.getElementById("out0").innerHTML = this.toFixed(2);
} 

r_slider.oninput = function() {
  r_output.innerHTML = this.value;
    // document.getElementById("out0").innerHTML = this.toFixed(2);

} 

n_slider.oninput = function() {
  n_output.innerHTML = this.value;
    // document.getElementById("out0").innerHTML = this.toFixed(2);

} 
