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
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    // console.log(inputValue);
    // console.log(tableData);

     var filteredData = tableData.filter(newinfo => newinfo.datetime === inputValue);
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


// THIS SECTION CAN BE IGNORED-> Personal reference of what was incorrect //
// original code to try to get filter to work- created a list but all values are undefined (originally this was under console.log(filteredData))
  // First, create an array with just the age values
//   var ufo = filteredData.map(sighting => sighting.datetime);   var date = ufo.datetime;
//   var city = ufo.city;
//   var state = ufo.state;
//   var country = ufo.country;
//   var shape = ufo.shape;
//   var duration = ufo.durationMinutes;
//   var comments = ufo.comments;

//   // Then, select the unordered list element by class name
//   var list = d3.select(".list-group");


//   // append stats to the list
//   list.append("li", `Date: ${date}`);
//   list.append("li").text(`City: ${city}`);
//   list.append("li").text(`State: ${state}`);
//   list.append("li").text(`Country: ${country}`);
//   list.append("li").text(`Shape: ${shape}`);
//   list.append("li").text(`Duration: ${duration}`);
//   list.append("li").text(`Comments: ${comments}`);
// }