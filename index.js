// Import stylesheets
import "./style.css";

// Write Javascript code!
//I am hacker
var array = null;
var array2 = null;
var max = 100;



document.getElementById("size").oninput = function() {
  var input = document.getElementById("size").value;
  if (input && input <= 100) {
    array = [];
    array2 = [];
    for (var i = 0; i < input; i++) {
      array[i] = Math.floor(Math.random() * max);
      array2[i] = Math.floor(Math.random() * max);
    }
  } else {
    array = null;
    array2 = null;
  }

  printit(array, array2);
};

function printit(arr, arr2) {
  document.getElementById("generatedarray1").innerHTML = "";
  document.getElementById("generatedarray2").innerHTML = "";

  if (arr && arr2) {
    var common = find(arr, arr2);

    console.log(common);

    for (var i = 0; i < arr.length; i++) {
      if (isCommon(arr[i], common)) {
        document.getElementById("generatedarray1").innerHTML +=
          "<div class='element common'> <span class='value'>" +
          arr[i] +
          "</span><span class='index'>" +
          i +
          "</span></div>";
        
      } else {
        document.getElementById("generatedarray1").innerHTML +=
          "<div class='element'> <span class='value'>" +
          arr[i] +
          "</span><span class='index'>" +
          i +
          "</span></div>";
        ;
      }
    }

    for (let i = 0; i < arr2.length; i++) {
      if (isCommon(arr2[i], common)) {
        document.getElementById("generatedarray2").innerHTML +=
          "<div class='element common'> <span class='value'>" +
          arr2[i] +
          "</span><span class='index'>" +
          i +
          "</span></div>";
          
        ;
      } else {
        document.getElementById("generatedarray2").innerHTML +=
          "<div class='element'> <span class='value'>" +
          arr2[i] +
          "</span><span class='index'>" +
          i +
          "</span></div>";
        ;
      }
    }
  }
}

function find(arr, arr2) {
  var common = [];
  for (var i = 0; i < arr.length; i++) {
    for (var g = 0; g < arr2.length; g++) {
      if (arr[i] == arr2[g]) {
        common.push(arr[i]);
        ;
      }
    }
  }

  return common;
}

function isCommon(ele, common) {
  var isPresent = false;

  for (var i = 0; i < common.length; i++) {
    if (ele == common[i]) {
      isPresent = true;
      
    }
  }

  return isPresent;
}
function clearArray(){
  document.getElementById("size").value = "";
  document.getElementById("generatedarray1").innerHTML = "";
   document.getElementById("generatedarray2").innerHTML = "";
}

document.getElementById("clear").onclick = clearArray;