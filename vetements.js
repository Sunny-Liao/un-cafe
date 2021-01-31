/*$(document).ready(function() {
    $(document).on('change', '#answer1', function() { 
        $('li[attr=nameoffieldvariable] input.singleline').val(this.value);
    });
});

*/

function Vetement_Test() {
    var answer1 = document.forms["VetementForm"]["answer1"].value;
    var answer2 = document.forms["VetementForm"]["answer2"].value;
    var answer3 = document.forms["VetementForm"]["answer3"].value;
    var answer4 = document.forms["VetementForm"]["answer4"].value;
    var answer5 = document.forms["VetementForm"]["answer5"].value;
    var answer6 = document.forms["VetementForm"]["answer6"].value;
    var answer7 = document.forms["VetementForm"]["answer7"].value;
    var answer8 = document.forms["VetementForm"]["answer8"].value;
    var answer9 = document.forms["VetementForm"]["answer9"].value;
    var answer10 = document.forms["VetementForm"]["answer10"].value;

    if(answer1 == "une") {
        localStorage.setItem("textboxvalue", answer1);
        document.forms["VetementForm"]["answer1"].value = answer1;
        document.forms["VetementForm"]["answer3"].style.color="black";
    }else {
        localStorage.setItem("textboxvalue", answer1);
        document.forms["VetementForm"]["answer1"].value = "une";
        document.forms["VetementForm"]["answer1"].style.color="red";
    };

    if(answer2 == "un") {
        localStorage.setItem("textboxvalue", answer2);
        document.forms["VetementForm"]["answer2"].value = answer2;
        document.forms["VetementForm"]["answer3"].style.color="black";
    }else {
        localStorage.setItem("textboxvalue", answer2);
        document.forms["VetementForm"]["answer2"].value = "un";
        document.forms["VetementForm"]["answer2"].style.color="red";
    };

    if(answer3 == "des") {
        localStorage.setItem("textboxvalue", answer3);
        document.forms["VetementForm"]["answer3"].value = answer3;
        document.forms["VetementForm"]["answer3"].style.color="black";
    }else {
        localStorage.setItem("textboxvalue", answer3);
        document.forms["VetementForm"]["answer3"].value = "des";
        document.forms["VetementForm"]["answer3"].style.color="red";
    };

    if(answer4 == "un") {
        localStorage.setItem("textboxvalue", answer4);
        document.forms["VetementForm"]["answer4"].value = answer4;
        document.forms["VetementForm"]["answer4"].style.color="black";
    }else {
        localStorage.setItem("textboxvalue", answer4);
        document.forms["VetementForm"]["answer4"].value = "un";
        document.forms["VetementForm"]["answer4"].style.color="red";
    };

    if(answer5 == "un") {
        localStorage.setItem("textboxvalue", answer5);
        document.forms["VetementForm"]["answer5"].value = answer5;
        document.forms["VetementForm"]["answer5"].style.color="black";
    }else {
        localStorage.setItem("textboxvalue", answer5);
        document.forms["VetementForm"]["answer5"].value = "un";
        document.forms["VetementForm"]["answer5"].style.color="red";
    };

    if(answer6 == "une") {
        localStorage.setItem("textboxvalue", answer6);
        document.forms["VetementForm"]["answer6"].value = answer6;
        document.forms["VetementForm"]["answer6"].style.color="black";
    }else {
        localStorage.setItem("textboxvalue", answer6);
        document.forms["VetementForm"]["answer6"].value = "une";
        document.forms["VetementForm"]["answer6"].style.color="red";
    };

    if(answer7 == "une") {
        localStorage.setItem("textboxvalue", answer7);
        document.forms["VetementForm"]["answer7"].value = answer7;
        document.forms["VetementForm"]["answer7"].style.color="black";
    }else {
        localStorage.setItem("textboxvalue", answer7);
        document.forms["VetementForm"]["answer7"].value = "une";
        document.forms["VetementForm"]["answer7"].style.color="red";
    };

    if(answer8 == "un") {
        localStorage.setItem("textboxvalue", answer8);
        document.forms["VetementForm"]["answer8"].value = answer8;
        document.forms["VetementForm"]["answer8"].style.color="black";
    }else {
        localStorage.setItem("textboxvalue", answer8);
        document.forms["VetementForm"]["answer8"].value = "un";
        document.forms["VetementForm"]["answer8"].style.color="red";
    };

    if(answer9 == "des") {
        localStorage.setItem("textboxvalue", answer9);
        document.forms["VetementForm"]["answer9"].value = answer9;
        document.forms["VetementForm"]["answer9"].style.color="black";
    }else {
        localStorage.setItem("textboxvalue", answer9);
        document.forms["VetementForm"]["answer9"].value = "des";
        document.forms["VetementForm"]["answer9"].style.color="red";
    };

    if(answer10 == "des") {
        localStorage.setItem("textboxvalue", answer10);
        document.forms["VetementForm"]["answer10"].value = answer10;
        document.forms["VetementForm"]["answer10"].style.color="black";
    }else {
        localStorage.setItem("textboxvalue", answer10);
        document.forms["VetementForm"]["answer10"].value = "des";
        document.forms["VetementForm"]["answer10"].style.color="red";
    };
}

function ChangeColor() {
    document.getElementById('answer1').innerHTML
}


