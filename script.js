addEventListener("keydown", (e) => {
  if (e.key.match(/[a-z]/g)) {
    console.log(`Key pressed: ${e.key}`);
    var button = document.getElementById(e.key);
    button.classList.add("pressed");
  } else if (e.key === " ") {
    console.log(`Key pressed: space bar`);
    var button = document.getElementById("space");
    button.classList.add("pressed");
  }
});

addEventListener("keyup", (e) => {
  if (e.key.match(/[a-z]/g)) {
    console.log(`Key released: ${e.key}`);
    var button = document.getElementById(e.key);
    button.classList.remove("pressed");
  } else if (e.key === " ") {
    console.log(`Key released: space bar`);
    var button = document.getElementById("space");
    button.classList.remove("pressed");
  }
});
