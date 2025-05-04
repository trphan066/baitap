document.getElementById("nameks").value = localStorage.getItem("nameks");
function m21() {
  if (document.getElementById("name").value === "") {
    document.getElementById("nametb").innerText === "vui lòng nhập họ và tên";
  }
  if (document.getElementById("sdt").value === "") {
    document.getElementById("sdttb").innerText ===
      "vui lòng nhập số điẹn thoại";
  }
  if (document.getElementById("ngaydi").value === "") {
    document.getElementById("ngayditb").innerText === "vui lòng chọn ngày ở";
  }
  if (document.getElementById("sophong").value === "") {
    document.getElementById("sophongtb").innerText === "vui lòng nhập số phòng";
  }
  if (
    document.getElementById("sophong").value !== "" &&
    document.getElementById("ngaydi").value !== "" &&
    document.getElementById("sdt").value !== "" &&
    document.getElementById("name").value !== ""
  ) {
    if (localStorage.getItem("ks") === "ks1") {
      localStorage.setItem("ks1", "hien");
    }
    if (localStorage.getItem("ks") === "ks2") {
      localStorage.setItem("ks2", "hien");
    }
    if (localStorage.getItem("ks") === "ks3") {
      localStorage.setItem("ks3", "hien");
    }
    if (localStorage.getItem("ks") === "ks4") {
      localStorage.setItem("ks4", "hien");
    }
    if (localStorage.getItem("ks") === "ks5") {
      localStorage.setItem("ks5", "hien");
    }
    if (localStorage.getItem("ks") === "ks6") {
      localStorage.setItem("ks6", "hien");
    }
    if (localStorage.getItem("ks") === "ks7") {
      localStorage.setItem("ks7", "hien");
    }
    if (localStorage.getItem("ks") === "ks8") {
      localStorage.setItem("ks8", "hien");
    }
    alert(
      "Chúc Mừng Bạn Đặt Phòng Thành Công!!! Vui Lòng Check In Đúng Hạn Nhé !!!!!!!!!"
    );
    window.location.href = "khachsan.html";
  }
}
