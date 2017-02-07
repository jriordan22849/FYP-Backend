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
                '<div class="form-check">'+
                    '<label><input class="form-check-input" type="radio" value = "MultipleChoice" name="optradio'+questions+'" onclick="addTextField('+questions+')" >Multiple Choice</label>'+
                '</div>'+
                '<div class="form-check">'+
                    '<label><input class="form-check-input" type="radio" value = "LinearScale" name="optradio'+questions+'" onclick="addScale('+questions+')">Scale</label>'+
                '</div>'+
                '<div class="form-check">'+
                    '<label><input class="form-check-input" type="radio" value = "Images" name="optradio'+questions+'" onclick="addImage('+questions+')"">Images</label>'+
                 '</div>'+
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
        '<select id = "question'+divID+'Answer'+numberOfAnswers+'">'+
        '</select>'+
        '<br />'+
        '<br />'+
        '<label>Maximum Value</label>'+
        '<br />'+
        '<select id = "question'+divID+'Answer'+(numberOfAnswers++)+'">'+
        '</select>'+
    '<br />';


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

    var qType = document.createElement("label"); 
    qType.innerHTML = "Multiple";
    qType.value = "Multiple";
    //questionNumber.style.display = 'none'; 
    qType.setAttribute("name", "multiple"+divID);
    qType.setAttribute("id", "multiple"+divID);

 

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
    //objTo.appendChild(qType);
    //objTo.appendChild(questionNumber);
}

function addImage(divID) {
    var bool = 0;
    var objTo = document.getElementById('questionArea')
    
    var divtest = document.createElement("div"+divID);

    // Get user search quesry for image
    divtest.innerHTML +=
    '<input type="text" class="form-control" name="question'+divID+'Answer'+numberOfAnswers+'" value="" onchange="displayImages(this.value, '+divID+')" placeholder ="Search Images" id = Answer'+numberOfAnswers+'/>';
    
    objTo.appendChild(divtest);
}

function displayImages(query, divID) {
    var API_KEY = '4472925-8399919af01d8365dad97fdbf';
    var objTo = document.getElementById('questionArea');
    var divtest = document.createElement("div"+divID);
    var counter = 0;
    var imageURL = [];
    var previewURL = '';


    var urlselected = document.createElement("input"); 
    urlselected.innerHTML = "Image URL";
    urlselected.setAttribute("name", "urlselected");
    urlselected.setAttribute("id", "urlselected");
    divtest.innerHTML += "<br />";

    // URL for user search image
    var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(query);
    $.getJSON(URL, function(data){
        if (parseInt(data.totalHits) > 0)
            $.each(data.hits, function(i, hit){
             // console.log(hit.pageURL); 
             counter += 1;
             if(counter < 4) {
                imageURL.push(hit.previewURL);
      
             }
         });
        else
            console.log('No hits');
    });

    // var usernames = imageURL.map(function(user) {
    //     return user.previewURL;   
    // });
    // console.log(usernames);
    console.log(imageURL);
    console.log(url1);
    divtest.innerHTML +=
        '<div class="container">'+
            '<div class="row">'+
                '<div class="col-md-12">'+
                    '<div class="thumbnail">'+
                        '<img src="'+imageURL[0]+'"  value = "'+imageURL[0]+'" class="img-rounded" alt="'+query+'">'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>';


    objTo.appendChild(divtest);

    objTo.appendChild(urlselected);
}





