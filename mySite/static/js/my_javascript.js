var questions = 0;
var numberOfAnswers = 1;
var answerCounter = 0;
var numbers = [10];
var qPos;
var option = 1;


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
    numberOfAnswers = 1;
    option = 1;
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
                    '<label><input class="form-check-input" type="radio" value = "Scale" name="optradio'+questions+'" onclick="addScale('+questions+')">Scale</label>'+
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
    var objTo = document.getElementById('questionArea');
    var divtest = document.createElement("div"+index);

    divtest.innerHTML += 
    '<div class="content">'+
        '<h4>Enter Minimum Value</h4>'+
        '<input type="number" min="1" max="9" class="form-control" name="question'+index+'" value="" placeholder ="Number between 1 and 9" id = Answer'+index+'/>'+
        '<br />'+
        '<h4>Enter Maximum Value</h4>'+
        '<input type="number" min="2" max="10" class="form-control" name="question'+index+'" value="" placeholder ="Number between 2 and 10" id = Answer'+index+'/>'+
        '<br />'+
    '</div>';
    
    objTo.appendChild(divtest);
}

function addTextField(divID) {

    var objTo = document.getElementById('questionArea')
    var divtest = document.createElement("div"+divID);
    var counter = numberOfAnswers;
    var addButton = document.getElementById("addFieldArea");
    counter += 1;
    questionPos = divID;
    var multiple = "multiple";

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
    ans.setAttribute("name", "ans"+divID);
    ans.setAttribute("id", "ans"+divID);

    var questionType = document.createElement("input");
    questionType.innerHTML = multiple;
    questionType.value = multiple;
    questionType.style.display = 'none'; 
    questionType.setAttribute("name", "questionType"+divID);
    questionType.setAttribute("id", "questionType"+divID);
    console.log("Javascript questionType" + divID);
 

    divtest.innerHTML +=
    '<div class="content">'+
        '<input type="text" class="form-control"'+
        ' name="question'+divID+'Answer'+numberOfAnswers+'" '+
        'value="" placeholder ="question'+divID+'Answer'+numberOfAnswers+'"'+
        ' id = Answer'+numberOfAnswers+'/>'+
        '<br />'+
    '</div>';
    numberOfAnswers ++;


    addButton.innerHTML = '<hr />'+
    '<div id class="content">'+
        '<input type="button" id="more_fields" onclick="addTextField('+divID+')" value="Add Input Field" class="btn btn-primary" />'+
    '</div>';

    objTo.appendChild(divtest);
    objTo.appendChild(ans);
    objTo.appendChild(addButton);
    objTo.appendChild(questionType);
    //objTo.appendChild(qType);
    //objTo.appendChild(questionNumber);
}

function addImage(divID) {
    var bool = 0;
    var objTo = document.getElementById('questionArea')
    
    var divtest = document.createElement("div"+divID);

    // Get user search quesry for image
    divtest.innerHTML +=
    '<h5>Select an image and then retype for a different set of images.</h5>'+
    '<input type="text" class="form-control" name="question'+divID+'Answer'+numberOfAnswers+'" '+
    ' value="" onchange="displayImages(this.value, '+divID+')" '+
    ' placeholder ="Search Images" id = "Answer'+numberOfAnswers+'"/>';
    
    objTo.appendChild(divtest);
}

function addURL(imageURL, divID, option) {
    var objTo = document.getElementById('questionArea')
    var urlbox = document.getElementById("optionSelected"+divID+"Option"+option)
    urlbox.setAttribute("id","optionSelected"+divID+"Option"+option);
    urlbox.setAttribute("name","optionSelected"+divID + "Option"+option);
    urlbox.value = imageURL;

    var urlChosen = document.createElement("input");
    urlChosen.innerHTML = imageURL;
    urlChosen.value = imageURL;
    urlChosen.style.display = 'none'; 
    urlChosen.setAttribute("name", "question"+divID+"Image"+option);
    urlChosen.setAttribute("id", "question"+divID+"Image"+option);

    objTo.appendChild(urlbox);
    objTo.appendChild(urlChosen);
}

function displayImages(query, divID) {
    var API_KEY = '4472925-8399919af01d8365dad97fdbf';
    var objTo = document.getElementById('questionArea');
    var divtest = document.createElement("div"+divID);
    divtest.setAttribute("id","div"+divID);
    divtest.setAttribute("name","div"+divID);
    divtest.innerHTML += "<br />";
    var counter = 0;
    var imageURL = [];
    var previewURL = '';
    var imageCounter = 0;
    var i = 0;
    var images = "images";

    var questionType = document.createElement("input");
    questionType.innerHTML = images;
    questionType.value = images;
    questionType.style.display = 'none'; 
    questionType.setAttribute("name", "questionType"+divID);
    questionType.setAttribute("id", "questionType"+divID);

    var ans = document.createElement("input"); 
    ans.innerHTML = numberOfAnswers;
    ans.value = numberOfAnswers;
    ans.style.display = 'none'; 
    ans.setAttribute("name", "ans"+divID);
    ans.setAttribute("id", "ans"+divID);

    var urlselected = document.createElement("label");
    divtest.innerHTML +=
        '<div class="flexbox">';

    // URL for user search image
    var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(query);
    $.getJSON(URL, function(data){
        if (parseInt(data.totalHits) > 0)
            $.each(data.hits, function(i, hit){
             // console.log(hit.pageURL); 
             counter += 1;
             //numberOfAnswers ++;
             if(counter < 12) {
                imageURL.push(hit.previewURL);
                var temp = hit.previewURL;
                console.log(temp);
                divtest.innerHTML +=
                '<div class= "flexitem" >'+
                    '<input class="form-check-input"'+
                    'value ="'+hit.previewURL+'" type = "radio"'+
                    'name = "option" onclick = "addURL(this.value,'+divID+','+option+')">'+
                    '<img src="'+hit.previewURL+'"  value = "'+hit.previewURL+'" class="img-rounded" alt="'+query+'"></input>'+
                '</div>';

             }

         });
   
        divtest.innerHTML +=
        '<input class="form-control" disabled '+
        ' id = "optionSelected'+divID+'Option'+option+'"'+
        ' value = "optionSelected'+divID+'Option'+option+'" '+
        'placeholder = "Selected Image URL">'+
        '</div>';
        option += 1;
        numberOfAnswers += 1
    });

    objTo.appendChild(divtest);
    objTo.appendChild(urlselected);
    objTo.appendChild(ans);
    objTo.appendChild(questionType);
}






