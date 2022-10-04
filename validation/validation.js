function regexRequired(value, selectorError, name) {
  console.log(selectorError);
  if (value === "") {
    document.querySelector(selectorError).innerHTML =
      name + " không được bỏ trống!";
    document.querySelector(selectorError).style.display = "block";
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
  document.querySelector(selectorError).style.display = "block";
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
  document.querySelector(selectorError).style.display = "block";
  return false;
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
  document.querySelector(selectorError).style.display = "block";
  return false;
}

function regexIdNumber(value, selectorError, name) {
  var regexNumber = /^[0-9]+$/;
  if (regexNumber.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML = name + " phải là số!";
  document.querySelector(selectorError).style.display = "block";
  return false;
}

function regexLength(value, selectorError, name, minLength, maxLength) {
  if (value.length < minLength || value.length > maxLength) {
    document.querySelector(selectorError).innerHTML =
      name + " phải từ " + minLength + " đến " + maxLength + " ký tự!";
    document.querySelector(selectorError).style.display = "block";
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}

function regexNumberValue(value, selectorError, name, minValue, maxValue) {
  if (Number(value) < minValue || Number(value) > maxValue) {
    document.querySelector(selectorError).innerHTML =
      name + " phải có giá trị " + minValue + " đến " + maxValue;
    document.querySelector(selectorError).style.display = "block";
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}

function regexTitle(value, selectorError, name) {
  if (value === "Sếp" || value === "Trưởng phòng" || value === "Nhân viên") {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  } else {
    document.querySelector(selectorError).innerHTML = "Hãy chọn " + name;
    document.querySelector(selectorError).style.display = "block";
    return false;
  }
}
