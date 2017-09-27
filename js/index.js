var text = document.querySelector(".speech");
var startBtn = document.querySelector(".start");

var recognition = new webkitSpeechRecognition();
// set params
recognition.continuous = false;
recognition.lang = 'zh-TW';
//recognition.interimResults = true;

// start immediately
// recognition.start();

recognition.onresult = function(event) {
  var result = event.results[event.results.length - 1];
  text.innerHTML = result[result.length - 1 ].transcript;
}

// speech error handling
recognition.onerror = function(event){
  console.log('error', event);
}

recognition.onend = function() {
  console.log("end");
  // auto restart
  recognition.start();
}

startBtn.addEventListener("click", function() {
  recognition.start();
  this.style.display = "none";
  document.querySelector(".content").style.display = "block";
})

function processFormData() {
  var name_element = document.getElementById('name');
  var name = name_element.value;
  alert('你的代號是'+name);
}
