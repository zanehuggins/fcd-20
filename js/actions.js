
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

    function toggleDisplay2() {
      var element = document.getElementById("item-1");
      element.classList.toggle("item-display");
    }

    function toggleDisplay3() {
      var x = document.getElementById("item-2");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
