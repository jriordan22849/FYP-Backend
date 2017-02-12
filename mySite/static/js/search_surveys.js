function displayResult() {
	var tableDiv = document.getElementById("tableResults");
	var searchText = document.getElementById("search_surveys").value;
	var searchTable = document.getElementById("survey_table");
	console.log(searchTable);
	searchTable.innerHTML =
	'<table style = "background-color: #FFFFFF" class ="table" border="2">'+ 
		'<tr>'+
        	'<th>Survey Name</th>'+
            '<th>Date Created </th>'+
            '<th>Number of Questions</th>'+
            '<th>Times Completed</th>'+
            '<th>Result</th>'+
        '</tr>'+
    '</table>';

    tableDiv.appendChild(searchTable);

}

function clearSearch() {
	
}