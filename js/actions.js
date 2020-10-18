
  function toggleDisplay() {
    var x = document.getElementById("navigation");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



  function animate() {
    var element = document.getElementById("navigation");
    element.classList.toggle("animate");
  }

// Portfolio actions

// Item 1 Functions
function toggleDisplay2() {
  var x = document.getElementById("item-1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


    function toggleOpacity1() {
      var element = document.getElementById("item-2-icon");
      element.classList.toggle("opacity");

      var element = document.getElementById("item-3-icon");
      element.classList.toggle("opacity");


          var element = document.getElementById("item-4-icon");
          element.classList.toggle("opacity");


        var element = document.getElementById("item-5-icon");
        element.classList.toggle("opacity");


      var element = document.getElementById("item-6-icon");
      element.classList.toggle("opacity");


      var element = document.getElementById("item-7-icon");
      element.classList.toggle("opacity");


      var element = document.getElementById("item-8-icon");
      element.classList.toggle("opacity");
      }





// Item 2 Functions
    function toggleDisplay3() {
      var x = document.getElementById("item-2");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }



function move() {
  var element = document.getElementById("item-1-icon");
  element.classList.toggle("move");
}

    function closeIcon() {
      var x = document.getElementById("close");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
