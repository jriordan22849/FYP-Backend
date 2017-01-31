
function addRow(input) {
    var table = document.getElementById("myTable");
    var i = parseInt(input.id.substring(3, input.id.length));
    document.getElementById('icon' + i).className = "glyphicon glyphicon-plus";
    var row = table.insertRow(table.rows.length);
   
    row.id = "row" + table.rows.length;
    var cell = row.insertCell(0);
    cell.innerHTML = '<div class="input-group">'+
    					'<label>Question '+table.rows.length+'</label>' +
                        '<input type="text" class="form-control" placeholder = "Enter Question" id = "'+table.rows.length+'">'+
                        '<span class="input-group-btn">'+
                        '</span>'+
                        '<hr />'+
                        '<hr />'+
                     '</div>';
                    
    $('#btn'+i).attr('onclick', 'addRow(this)');
}


function addTextField(input) {
    var table = document.getElementById("myTable");
    var i = parseInt(input.id.substring(3, input.id.length));
    var row = table.insertRow(table.rows.length);
    row.id = "textAnswer" + table.rows.length;
    var cell = row.insertCell(0);
    var j = 2;
    cell.innerHTML = '<input id = "'+(table.rows.length + 1)+'" type="text" class="form-control" placeholder = "'+(table.rows.length + 1)+'"/>';
                        
                     
    $('#addField'+i).attr('onclick', 'addTextField(this)');          

}

var questions = 1;
function add_fields() {
    questions++;
    var objTo = document.getElementById('room_fileds')
    var divtest = document.createElement("div");
    var numquestion = document.createElement("input"); 
    numquestion.innerHTML = questions;
    numquestion.value = questions;
    numquestion.style.display = 'none'; 
    numquestion.setAttribute("name", "numquestion");
    numquestion.setAttribute("id", "numquestion");


    divtest.innerHTML = '<div class="label">'+
    'Room ' + questions +':</div>'+
    '<div class="content">'+
    '<label>Enter Question '+questions+'</label>'+
    '<br />'+
    '<input type="text" class="form-control" name="Question'+questions+'" value="" placeholder ="Question'+questions+'" id = Question'+questions+'/>'+
    '<br />'+
    '<label>Enter Enter Answers</label>'+
    '<br />'+
    '<input type="text" class="form-control"  namae="length[]" value="" />';
    
    objTo.appendChild(divtest);
    objTo.appendChild(numquestion);

}


var numberOfAnswers = 0;
function addTextField() {
    event.preventDefault();
    numberOfAnswers ++;
    var objTo = document.getElementById('room_fileds')
    var divtest = document.createElement("div");
    var addButton = document.createElement("button");
    var counter = numberOfAnswers;
    counter += 1;

    divtest.innerHTML = 
    '<div class="content">'+
    '<input type="text" class="form-control" name="Answer'+numberOfAnswers+'" value="" placeholder ="Answer'+numberOfAnswers+'" id = Answer'+numberOfAnswers+'/>'+
    '<input type="text" class="form-control" name="Answer'+(counter)+'" value="" placeholder ="Answer'+(counter)+'" id = Answer'+(counter)+'/>'+


    '<br />';

    
    objTo.appendChild(divtest);
}

// function selectChange(optionPicked) {

//     var answerFormat = document.getElementById("myTable");
// 	var inputformat = [];
// 	var answerid = 0;
// 	var row = answerFormat.insertRow(answerFormat.rows.length);
// 	row.answerid = "row" + (answerid + 1);
// 	var cell = row.insertCell(0);
// 	var scaleHeader = document.createElement("h3");
// 	scaleHeader.innerHTML = "Select Scale Values";
// 	scaleHeader.setAttribute("id", "scaleheader");
// 	answerFormat.appendChild(scaleHeader);

// 	if(optionPicked === "Images") {
// 		document.getElementById("scaleheader").style.visibility = "hidden";

// 	}
	
// 	if(optionPicked === "MultipleChoice") {
		
// 	}

// }