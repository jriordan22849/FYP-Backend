var questions = 0;
var numberOfAnswers = 0;
var answerCounter = 0;

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

function add_fields() {
    questions++;
    var objTo = document.getElementById('questionArea')
    var divtest = document.createElement("div"+questions);

    var numquestion = document.createElement("input"); 
    numquestion.innerHTML = questions;
    numquestion.value = questions;
    numquestion.style.display = 'none'; 
    numquestion.setAttribute("name", "numquestion");
    numquestion.setAttribute("id", "numquestion");


    divtest.innerHTML = '<hr />'+
    '<div id class="content">'+
        '<label>Enter Question '+questions+'</label>'+
        '<br />'+
        '<input type="text" class="form-control" name="Question'+questions+'" value="" placeholder ="Question '+questions+'" id = Question'+questions+'/>'+
        '<br />'+
        '<label>Choose Answer Type</label>'+
        '<br />'+
        '<div class="input-group">'+
            '<div class = "radio">'+
            '<label><input type="radio" value = "MultipleChoice" name="optradio'+questions+'" onclick="addTextField('+questions+')">Multiple Choice</label>'+
            '<label><input type="radio" value = "LinearScale" name="optradio'+questions+'">Linear Scale</label>'+
            '<label><input type="radio" value = "Images" name="optradio'+questions+'">Images</label>'+
        '</div>'+
    '</div>';

    // reset varailbes
    numberOfAnswers = 0
    
    objTo.appendChild(divtest);
    objTo.appendChild(numquestion);

}



function addTextField(divID) {
    event.preventDefault();

    var objTo = document.getElementById('questionArea')
    var divtest = document.createElement("div"+divID);
    var counter = numberOfAnswers;
    counter += 1;

    var questionNumber = document.createElement("label"); 
    questionNumber.innerHTML = divID;
    questionNumber.value = divID;
    //questionNumber.style.display = 'none'; 
    questionNumber.setAttribute("name", "questionNumber");
    questionNumber.setAttribute("id", "questionNumber");

    answerCounter = divID;

    divtest.innerHTML +=
    '<div class="content">'+
        '<input type="text" class="form-control" name="Answer'+numberOfAnswers+'" value="" placeholder ="Answer '+numberOfAnswers+'" id = Answer'+numberOfAnswers+'/>'+
        '<br />'+
    '</div>';
    numberOfAnswers ++;

    
    objTo.appendChild(divtest);
    //objTo.appendChild(questionNumber);
}