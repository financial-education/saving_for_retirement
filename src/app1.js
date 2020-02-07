function myJsFunction()
{
    var sales = parseFloat(document.getElementById('sales').value);
    var costs = parseFloat(document.getElementById('costs').value);
    var depreciation = parseFloat(document.getElementById('depreciation').value);
    var tax_rate = parseFloat(document.getElementById('tax_rate').value);

    var sales_table = sales
    var costs_table = costs
    var depreciation_table = depreciation
    var ebit = sales - costs - depreciation
    var taxes;
    if (ebit > 0){
	taxes = ebit * (tax_rate / 100);
    } else {
	taxes = 0;
    }
    var ocf = ebit + depreciation - taxes


    document.getElementById("sales").innerHTML = sales.toFixed(2);
    document.getElementById("costs").innerHTML = costs.toFixed(2);
    document.getElementById("depreciation").innerHTML = depreciation.toFixed(2);
    document.getElementById("ebit").innerHTML = ebit.toFixed(2);
    document.getElementById("taxes").innerHTML = taxes.toFixed(2);
    document.getElementById("ocf").innerHTML = ocf.toFixed(2);

    document.getElementById("sales_table").innerHTML = sales_table.toFixed(2);
    document.getElementById("costs_table").innerHTML = costs_table.toFixed(2);
    document.getElementById("depreciation_table").innerHTML = depreciation_table.toFixed(2);

}

var slider = document.getElementById("sales");
var output = document.getElementById("sales_out");
output.innerHTML = slider.value; // Display the default slider value

var costs_slider = document.getElementById("costs");
var costs_output = document.getElementById("costs_out");
costs_output.innerHTML = costs_slider.value; // Display the default slider value

var depreciation_slider = document.getElementById("depreciation");
var depreciation_output = document.getElementById("depreciation_out");
depreciation_output.innerHTML = depreciation_slider.value; // Display the default slider value

var tax_rate_slider = document.getElementById("tax_rate");
var tax_rate_output = document.getElementById("tax_rate_out");
tax_rate_output.innerHTML = tax_rate_slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
    // document.getElementById("out0").innerHTML = this.toFixed(2);
} 

costs_slider.oninput = function() {
  costs_output.innerHTML = this.value;
    // document.getElementById("out0").innerHTML = this.toFixed(2);

} 

depreciation_slider.oninput = function() {
  depreciation_output.innerHTML = this.value;
    // document.getElementById("out0").innerHTML = this.toFixed(2);

} 
tax_rate_slider.oninput = function() {
  tax_rate_output.innerHTML = this.value;
    // document.getElementById("out0").innerHTML = this.toFixed(2);

} 



