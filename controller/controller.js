staffInput = () => {
  var id = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var joinDate = document.getElementById("datepicker").value;
  var salary = document.getElementById("luongCB").value * 1;
  var title = document.getElementById("chucvu").value;
  var time = document.getElementById("gioLam").value * 1;

  for (i = 0; i < staffList.length; i++) {
    if (staffList[i].id === id) return alert("Mã nhân viên đã tồn tại!");
  }

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

  return newStaff;
};

findByID = (staffId) => {
  for (i = 0; i < staffList.length; i++) {
    if (staffList[i].id === staffId) {
      return i;
    }
  }
  return -1;
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
