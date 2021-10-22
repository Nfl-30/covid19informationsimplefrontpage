function fabarsFunction() {
    let x = document.getElementById("navbarsection-right");
    if (x.className === "navbarsection-class-right") {
      x.className += " responsive";
    } else {
      x.className = "navbarsection-class-right";
    }
  }