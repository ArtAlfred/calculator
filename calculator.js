function delete_drinks() {
  let inputEle = document.querySelector("#calc_field");
  if (inputEle.length > 0) {
    inputEle[inputEle.length - 1].remove();
  }
}

function back_space() {
  var arrayexit = document.getElementById("calc_field").value;

  for (var i = 0; i < arrayexit.length; i++) {
    var output = arrayexit.slice(0, -1);
    document.getElementById("calc_field").value = output;
  }
}
