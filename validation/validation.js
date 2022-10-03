function regexRequired(value, selectorError, name) {
  if (value.length === 0) {
    document.querySelector(selectorError).innerHTML =
      name + " không được bỏ trống!";
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}

function regexLetter(value, selectorError, name) {
  var regexLetter = /^[A-Z a-z]+$/;
  if (regexLetter.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML = name + " phải là chữ cái!";
  return false;
}

function regexEmail(value, selectorError, name) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (regexEmail.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + " không đúng định dạng";
}

function regexPassWord(value, selectorError, name) {
  var regexPassWord =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;

  if (regexPassWord.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name +
    " phải từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)!";
}

function regexIdNumber(value, selectorError, name) {
  var regexNumber = /^[0-9]+$/;
  if (regexNumber.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML = name + " phải là số!";
  return false;
}

function regexLength(value, selectorError, name, minLength, maxLength) {
  if (value.length < minLength || value.length > maxLength) {
    document.querySelector(selectorError).innerHTML =
      name + " phải từ " + minLength + " đến " + maxLength + " ký tự!";
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}

function regexNumberValue(value, selectorError, name, minValue, maxValue) {
  if (Number(value) < minValue || Number(value) > maxValue) {
    document.querySelector(selectorError).innerHTML =
      name + " phải có giá trị " + minValue + " đến " + maxValue;
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}
