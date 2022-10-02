var staffList = [];

addStaff = () => {
  //get staff input
  var id = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var joinDate = document.getElementById("datepicker").value;
  var salary = document.getElementById("luongCB").value * 1;
  var title = document.getElementById("chucvu").value;
  var time = document.getElementById("gioLam").value * 1;

  //check staff id
  for (i = 0; i < staffList.length; i++) {
    if (staffList[i].id === id) {
      alert("Mã nhân viên đã tồn tại!!");
      return;
    }
  }

  //create new staff object
  var newStaff = new Staff(
    id,
    name,
    email,
    password,
    joinDate,
    salary,
    title,
    time
  );

  //push staff to staffList
  staffList.push(newStaff);

  //render staff
  renderStaff();

  setLocal();

  //reset form
  document.getElementById("myForm").reset();
};

renderStaff = () => {
  var tableHTML = "";

  for (i = 0; i < staffList.length; i++) {
    var stf = staffList[i];
    tableHTML += `<tr>
        <td>${stf.name}</td>
        <td>${stf.email}</td>
        <td>${stf.password}</td>
        <td>${stf.joinDate}</td>
        <td>${stf.title}</td>
        <td>${stf.totalSalary()}</td>
        <td>${stf.rank()}</td>
        <td>
          <button class="btn btn-primary">Sửa</button>
          <button class="btn btn-danger">Xóa</button>
        </td>
      </tr>`;
  }
  document.getElementById("tableDanhSach").innerHTML = tableHTML;
};

setLocal = () => {
  var staffListJSON = JSON.stringify(staffList);

  localStorage.setItem("SLJSON", staffListJSON);
};

getLocal = () => {
  var staffListJSON = localStorage.getItem("SLJSON");

  if (!staffListJSON) return;

  staffList = mapData(JSON.parse(staffListJSON));

  renderStaff();
};

mapData = (staffListJSON) => {
  var staffListClone = [];

  for (i = 0; i < staffListJSON.length; i++) {
    var oldStaff = staffListJSON[i];
    var newStaff = new Staff(
      oldStaff.id,
      oldStaff.name,
      oldStaff.email,
      oldStaff.password,
      oldStaff.joinDate,
      oldStaff.salary,
      oldStaff.title,
      oldStaff.time
    );
    staffListClone.push(newStaff);
  }
  return staffListClone;
};

window.onload = function () {
  getLocal();
};
