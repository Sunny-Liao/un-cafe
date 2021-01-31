

var Skirt_Audio = new Audio('https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0080920.mp3');
var Pantalon_Audio = new Audio('https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0094060.mp3')
var Chemise_Audio = new Audio('https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0033770.mp3')
var Robe_Audio = new Audio('https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0026600.mp3')
var Veste_Audio = new Audio('https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0045680.mp3')
var Manteau_Audio = new Audio('https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0017070.mp3')
var Pull_Audio = new Audio('https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0088170.mp3')
var Costume_Audio = new Audio('https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0020240.mp3')
var Chaussures_Audio = new Audio('https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0079150.mp3')
var Chaussettes_Audio = new Audio('https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0082310.mp3')

function myAudioFunction(letter) {
    if(letter == 'skirt') {
        Skirt_Audio.play();
    }
    else if(letter == 'pantalon') {
        Pantalon_Audio.play();
    }
    else if(letter == 'chemise') {
        Chemise_Audio.play();
    }
    else if(letter == 'robe') {
        Robe_Audio.play();
    }
    else if(letter == 'veste') {
        Veste_Audio.play();
    }
    else if(letter == 'manteau') {
        Manteau_Audio.play();
    }
    else if(letter == 'pull') {
        Pull_Audio.play();
    }
    else if(letter == 'costume') {
        Costume_Audio.play();
    }
    else if(letter == 'chaussures') {
        Chaussures_Audio.play();
    }
    else if(letter == 'chaussettes') {
        Chaussettes_Audio.play();
    }
}

$('a.popup').click(function(e){
    e.preventDefault();
});



// YouTube video ID
var videoID = "w8aEjV63EpM";

// Fetch video info (using a proxy to avoid CORS errors)
fetch('https://cors-anywhere.herokuapp.com/' + "https://www.youtube.com/get_video_info?video_id=" + videoID).then(response => {
  if (response.ok) {
    response.text().then(ytData => {
      
      // parse response to find audio info
      var ytData = parse_str(ytData);
      var getAdaptiveFormats = JSON.parse(ytData.player_response).streamingData.adaptiveFormats;
      var findAudioInfo = getAdaptiveFormats.findIndex(obj => obj.audioQuality);
      
      // get the URL for the audio file
      var audioURL = getAdaptiveFormats[findAudioInfo].url;
      
      // update the <audio> element src
      var youtubeAudio = document.getElementById('youtube');
      youtubeAudio.src = audioURL;
      
    });
  }
});

function parse_str(str) {
  return str.split('&').reduce(function(params, param) {
    var paramSplit = param.split('=').map(function(value) {
      return decodeURIComponent(value.replace('+', ' '));
    });
    params[paramSplit[0]] = paramSplit[1];
    return params;
  }, {});
}



/* Click Answers to Change Color */

var flag = true;
var check1 = 0;
var check2 = 0;
var check3 = 0;
var check4 = 0;
var check5 = 0;
var check6 = 0;
var check7 = 0;
var check8 = 0;

function changeColor1() {
  var x1 = document.getElementById('marquez-mot1');
  if(flag){
    x1.style.backgroundColor = "yellow";
    check1 = 1;
  }else {
    x1.style.backgroundColor = "";
  }
  flag = !flag;
}

function changeColor2() {
  var x2 = document.getElementById('marquez-mot2');
  if(flag){
    x2.style.backgroundColor = "red";
  }else {
    x2.style.backgroundColor = "";
  }
  flag = !flag;
}

function changeColor3() {
  var x3 = document.getElementById('marquez-mot3');
  if(flag){
    x3.style.backgroundColor = "red";
  }else {
    x3.style.backgroundColor = "";
  }
  flag = !flag;
}

function changeColor4() {
  var x4 = document.getElementById('marquez-mot4');
  if(flag){
    x4.style.backgroundColor = "yellow";
    check4 = 1;
  }else {
    x4.style.backgroundColor = "";
  }
  flag = !flag;
}

function changeColor5() {
  var x5 = document.getElementById('marquez-mot5');
  if(flag){
    x5.style.backgroundColor = "red";
  }else {
    x5.style.backgroundColor = "";
  }
  flag = !flag;
}

function changeColor6() {
  var x6 = document.getElementById('marquez-mot6');
  if(flag){
    x6.style.backgroundColor = "red";
  }else {
    x6.style.backgroundColor = "";
  }
  flag = !flag;
}

function changeColor7() {
  var x7 = document.getElementById('marquez-mot7');
  if(flag){
    x7.style.backgroundColor = "yellow";
    check7 = 1;
  }else {
    x7.style.backgroundColor = "";
  }
  flag = !flag;
}

function changeColor8() {
  var x8 = document.getElementById('marquez-mot8');
  if(flag){
    x8.style.backgroundColor = "yellow";
    check8 = 1;
  }else {
    x8.style.backgroundColor = "";
  }
  flag = !flag;
}

/* Transcription Sidebar    */


function openNav() {
  document.getElementById("mySidenav").style.width = "780px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


