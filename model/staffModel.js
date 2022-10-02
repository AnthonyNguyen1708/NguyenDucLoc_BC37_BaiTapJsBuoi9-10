function Staff(id, name, email, password, joinDate, salary, title, time) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.password = password;
  this.joinDate = joinDate;
  this.salary = salary;
  this.title = title;
  this.time = time;
  this.totalSalary = function () {
    if (this.title === "Giám đốc") {
      return this.salary * 3;
    } else if (this.title === "Trưởng phòng") {
      return this.salary * 2;
    } else {
      return this.salary;
    }
  };
  this.rank = function () {
    if (time >= 192) {
      return "Nhân viên xuất sắc";
    } else if (time >= 176) {
      return "Nhân viên giỏi";
    } else if (time >= 160) {
      return "Nhân viên khá";
    } else {
      return "Nhân viên trung bình";
    }
  };
}
