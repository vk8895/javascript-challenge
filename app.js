// HW-14: JavaScript Challenge

// from data.js
var tableData = data;

// from index.html
var tbody = d3.select("tbody");


// Task 1: Build Web Table
		
		
	function UFOData(data) {
	
		// Step 0: Clear any existing table/data
		tbody.html("");
	
		// Step 1: Loop through Data and console.log each object
		data.forEach((datarow) => {
		//console.log(UFOData);
	
		// Step 2: Use d3 to append table row element for each UFOData object (rows still empty)
			var row = tbody.append("tr");
	
		// Step 3: Use object.entries to console.log each UFOData value
			Object.entries(datarow).forEach(function([key, value]) {
		//console.log(key, value);
	
		// Step 4: Use d3 to append each cell per UFOData value (date, city, state, country, shape, duration, comments)
			var cell = row.append("td");
	
		// Step 5: Use d3 to input data into each table cell per UFOData values (in parentheses above)
			cell.text(value);
			});
		});
		}

// Insert data from data.js file into web table
UFOData(tableData);



// Task 2: Filter Data Upon Input

	// Step 1: Listen for Event (Click/Enter) 
	
		// Select the button
		var button = d3.select("#filter-btn");

		// Select the form
		var form = d3.select(this);

		// Create event handlers 
		button.on("click", UFOFilter);
		form.on("submit",UFOFilter);

	// Step 2: Filter Function
	
	function UFOFilter() {
		
		// Prevent Page from Refreshing
		d3.event.preventDefault();
		
		// Select Input Element
		var inputElement = d3.select("#datetime");
		
		// Select Input Value
		var inputValue = inputElement.property("value");
			console.log(inputValue);
				
		// Filter based on Input Value
		var filteredDates = tableData.filter(observee => observee.datetime === inputValue);
			
			// Log filtered dates in console to ensure code is working
			console.log(filteredDates);
		
		// Rebuild table using function in Task 1, but with filtered dates only	
		UFOData(filteredDates);
	};
	
	
	

