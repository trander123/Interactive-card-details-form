const form = document.getElementById("form");
const fname = document.getElementById("fname");
const number = document.getElementById("number");
const mm = document.getElementById("mm");
const yy = document.getElementById("yy");
const cvc = document.getElementById("cvc");

const completeState = document.getElementById("complete");

const showError = (id, display) => {
  document.getElementById(id).style.display = display;
};

const showBorder = (element, show) => {
  element.style.borderColor = show ? 'red' : "hsl(270, 3%, 87%)"
}

document.getElementById("submit-btn").onclick = (e) => {
  e.preventDefault();

  showBorder(fname, false)
  showBorder(number, false)
  showBorder(mm, false)
  showBorder(yy, false)
  showBorder(cvc, false)
  showError("error-name", "none");
  showError("error-number", "none");
  showError("error-date", "none");
  showError("error-cvc", "none");

  if(fname.value === "") {
    showError("error-name", "inline");
    showBorder(fname, true)
    return;
  }
  else if(number.value === "") {
    showError("error-number", "inline");
    showBorder(number, true)
    return;
  }
  else if(mm.value === "") {
    showError("error-date", "inline");
    showBorder(mm, true)
    return;
  }
  else if(yy.value === "") {
    showError("error-date", "inline");
    showBorder(yy, true)
    return;
  }
  else if(cvc.value === "") {
    showError("error-cvc", "inline");
    showBorder(cvc, true)
    return;
  }
  

  form.style.display = "none";
  completeState.style.display = "block";
};
