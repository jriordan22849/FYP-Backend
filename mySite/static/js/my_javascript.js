var questions = 0;
var numberOfAnswers = 0;
var answerCounter = 0;
var numbers = [10];
var qPos;

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
    divtest.innerHTML = '';
    var numquestion = document.createElement("input"); 
    numquestion.innerHTML = questions;
    numquestion.value = questions;
    numquestion.style.display = 'none'; 
    numquestion.setAttribute("name", "numquestion");
    numquestion.setAttribute("id", "numquestion");


    divtest.innerHTML = '<hr />'+
    '<div id class="content">'+
        '<h3>Enter Question '+questions+'</h3>'+
        '<br />'+
        '<input type="text" class="form-control" name="Question'+questions+'" value="" placeholder ="Question '+questions+'" id = Question'+questions+'/>'+
        '<br />'+
        '<h4>Choose Answer Type</h4>'+
        '<br />'+
        '<div class="input-group">'+
            '<div class = "radio">'+
                '<label><input type="radio" value = "MultipleChoice" name="optradio'+questions+'" onclick="addTextField('+questions+')" >Multiple Choice</label>'+
                '<label><input type="radio" value = "LinearScale" name="optradio'+questions+'" onclick="addScale('+questions+')">Scale</label>'+
                '<label><input type="radio" value = "Images" name="optradio'+questions+'">Images</label>'+
            '</div>'+
        '</div>'+
    '</div';

    qPos = questions;
    // reset varailbes
    //numberOfAnswers = 0
    
    objTo.appendChild(divtest);
    objTo.appendChild(numquestion);

}




function addScale(index) {
    var index;
    var objTo = document.getElementById('questionArea');
    
    var div = document.createElement("div"+index);
    var scaleHeader = document.createElement("h3"); 
    scaleHeader.innerHTML = "Select Scale Values";
    scaleHeader.setAttribute("id", "scaleheader");
    div.appendChild(scaleHeader);
        
    div.innerHTML += 
    '<div class="btn-group">'+
        '<label>Minimum Value</label>'+
        '<br />'+
        '<select id = "dropDownListMin'+index+'">'+
        '</select>'+
        '<br />'+
        '<br />'+
        '<label>Maximum Value</label>'+
        '<br />'+
        '<select id = "dropDownListMax'+index+'">'+
        '</select>'+
    '<br />';


    objTo.appendChild(div);

    var select = document.getElementById("dropDownListMin"+index);
    var selectMax = document.getElementById("dropDownListMax"+index);

    for(var i = 0; i <= 10; i ++) {
        var option = document.createElement("option");
        option.innerHTML = i;
        option.value = i;       
        select.appendChild(option);
        
    }

    for(var i = 0; i <= 10; i ++) {
        var option = document.createElement("option");
        option.innerHTML = i;
        option.value = i;       
        selectMax.appendChild(option);
        
    }
}

function addTextField(divID) {

    var objTo = document.getElementById('questionArea')
    var divtest = document.createElement("div"+divID);
    var counter = numberOfAnswers;
    var addButton = document.getElementById("addFieldArea");
    counter += 1;
    questionPos = divID
    var questionNumber = document.createElement("label"); 
    questionNumber.innerHTML = divID;
    questionNumber.value = divID;
    //questionNumber.style.display = 'none'; 
    questionNumber.setAttribute("name", "questionNumber");
    questionNumber.setAttribute("id", "questionNumber");

    var ans = document.createElement("input"); 
    ans.innerHTML = numberOfAnswers;
    ans.value = numberOfAnswers;
    ans.style.display = 'none'; 
    ans.setAttribute("name", "ans");
    ans.setAttribute("id", "ans");

    divtest.innerHTML +=
    '<div class="content">'+
        '<input type="text" class="form-control" name="question'+divID+'Answer'+numberOfAnswers+'" value="" placeholder ="Enter Answer" id = Answer'+numberOfAnswers+'/>'+
        '<br />'+
    '</div>';
    numberOfAnswers ++;


    addButton.innerHTML = '<hr />'+
    '<div id class="content">'+
    '<input type="button" id="more_fields" onclick="addTextField('+divID+')" value="Add Text Field" class="btn btn-primary" />'+
    '</div>';



    


    
    objTo.appendChild(divtest);
    objTo.appendChild(ans);
    objTo.appendChild(addButton);
    //objTo.appendChild(questionNumber);
}