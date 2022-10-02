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
