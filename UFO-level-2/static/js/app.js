// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Use d3 to update each cell's text with ufo report values  (date, city, state, count, shape, duration, comment)
data.forEach((ufoReport) => {
   var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(([key, value]) => {
     var cell = row.append("td");
     cell.text(value);
   });
});



// reference for the button 
var button = d3.select("#filter-btn");

//create event handlers
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

  tbody.html("")
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    // console.log(inputValue);
    // console.log(tableData);

     var filteredData = tableData.filter(newinfo => newinfo.datetime === inputValue ||
                                                    newinfo.city === inputValue ||
                                                    newinfo.state === inputValue ||
                                                    newinfo.country === inputValue ||
                                                    newinfo.shape === inputValue);
     console.log(filteredData);
//     //console.table(filteredData)

    filteredData.forEach((item) => {
      var row = tbody.append("tr");
      Object.entries(item).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
   });
}