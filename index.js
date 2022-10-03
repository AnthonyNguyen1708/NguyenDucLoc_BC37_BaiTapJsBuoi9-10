var staffList = [];

addStaff = () => {
  if (!validateForm()) return;

  var newStaff = staffInput();

  staffList.push(newStaff);

  renderStaff();

  setLocal();

  document.getElementById("myForm").reset();
};

renderStaff = (data) => {
  if (!data) data = staffList;

  var tableHTML = "";

  for (i = 0; i < data.length; i++) {
    var stf = data[i];
    tableHTML += `<tr>
        <td>${stf.id}</td>
        <td>${stf.name}</td>
        <td>${stf.email}</td>
        <td>${stf.joinDate}</td>
        <td>${stf.title}</td>
        <td>${stf.totalSalary()}</td>
        <td>${stf.rank()}</td>
        <td>
          <button 
          data-toggle="modal"
          data-target="#myModal" 
          onclick="getStaffInfo('${
            stf.id
          }')" class="btn btn-primary">Sửa</button>
          <button onclick="deleteStaff('${
            stf.id
          }')" class="btn btn-danger">Xóa</button>
        </td>
      </tr>`;
  }
  document.getElementById("tableDanhSach").innerHTML = tableHTML;
};

deleteStaff = (staffId) => {
  var index = findByID(staffId);

  if (index === -1) {
    alert("Mã nhân viên không tồn tại!");
    return;
  }

  staffList.splice(index, 1);

  setLocal();

  renderStaff();
};

searchStaff = () => {
  var keyWord = document
    .getElementById("searchName")
    .value.toLowerCase()
    .trim();

  var result = [];

  for (i = 0; i < staffList.length; i++) {
    var staffRank = staffList[i].rank();
    if (staffRank.includes(keyWord)) {
      result.push(staffList[i]);
    }
  }

  renderStaff(result);
};

getStaffInfo = (staffId) => {
  var index = findByID(staffId);

  if (index === -1) return alert("Mã nhân viên không tồn tại!");

  var staff = staffList[index];

  document.getElementById("tknv").value = staff.id;
  document.getElementById("name").value = staff.name;
  document.getElementById("email").value = staff.email;
  document.getElementById("password").value = staff.password;
  document.getElementById("datepicker").value = staff.joinDate;
  document.getElementById("luongCB").value = staff.salary;
  document.getElementById("chucvu").value = staff.title;
  document.getElementById("gioLam").value = staff.time;

  document.getElementById("btnCapNhat").style.display = "inline-block";
  document.getElementById("btnThemNV").style.display = "none";

  document.getElementById("tknv").disabled = true;
};

updateStaff = () => {
  var id = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var joinDate = document.getElementById("datepicker").value;
  var salary = document.getElementById("luongCB").value * 1;
  var title = document.getElementById("chucvu").value;
  var time = document.getElementById("gioLam").value * 1;

  var index = findByID(id);

  var staff = staffList[index];

  staff.name = name;
  staff.email = email;
  staff.password = password;
  staff.joinDate = joinDate;
  staff.salary = salary;
  staff.title = title;
  staff.time = time;

  renderStaff();

  setLocal();

  document.getElementById("tknv").disabled = false;

  document.getElementById("myForm").reset();

  document.getElementById("btnThemNV").style.display = "inline-block";
  document.getElementById("btnCapNhat").style.display = "none";
};

window.onload = function () {
  getLocal();
};

validateForm = () => {
  var id = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var joinDate = document.getElementById("datepicker").value;
  var salary = document.getElementById("luongCB").value;
  var title = document.getElementById("chucvu").value;
  var time = document.getElementById("gioLam").value;

  var valid = true;

  valid &=
    regexRequired(id, "#tbTKNV", "Tài khoản nhân viên") &&
    regexIdNumber(id, "#tbTKNV", "Tài khoản nhân viên") &&
    regexLength(id, "#tbTKNV", "Tài khoản nhân viên", 4, 6);

  valid &=
    regexRequired(name, "#tbTen", "Tên nhân viên") &&
    regexLetter(name, "#tbTen", "Tên nhân viên");

  valid &=
    regexRequired(email, "#tbEmail", "Email") &&
    regexEmail(email, "#tbEmail", "Email");

  valid &=
    regexRequired(password, "#tbMatKhau", "Password") &&
    regexPassWord(password, "#tbMatKhau", "Password");

  valid &= regexRequired(joinDate, "#tbNgay", "Ngày vào làm");

  valid &=
    regexRequired(salary, "#tbLuongCB", "Lương") &&
    regexIdNumber(salary, "#tbLuongCB", "Lương") &&
    regexNumberValue(salary, "#tbLuongCB", "Lương", 1000000, 20000000);

  valid &=
    regexRequired(time, "#tbGiolam", "Giờ làm") &&
    regexIdNumber(time, "#tbGiolam", "Giờ làm") &&
    regexNumberValue(time, "#tbGiolam", "Giờ làm", 80, 200);

  return valid;
};
