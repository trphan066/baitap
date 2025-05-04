function m1() {
  let a = document.getElementById("username").value;
  let b = document.getElementById("password").value;
  if (a === "") {
    document.getElementById("usernameError").innerText =
      "Bạn Cần nhập Tài Khoản";
  } else if (b === "") {
    document.getElementById("passwordError").innerText =
      "Bạn Cần nhập mật khẩu ";
  } else {
    sessionStorage.setItem("tk", a);
    sessionStorage.setItem("mk", b);
    alert("Đăng Ký Thành Công ");
    window.location.href = "dangnhap.html";
  }
}
function m2() {
  let a = document.getElementById("username").value;
  let b = document.getElementById("password").value;
  if (a === sessionStorage.getItem("tk") && b === sessionStorage.getItem("mk")) {
    sessionStorage.setItem("dangki", "an");
    sessionStorage.setItem("dangnhap", "an");
    alert("Chúc Mừng Bạn Đã Đăng Nhập Thành Công");

    window.location.href = "index.html";
  } else {
    document.getElementById("passwordError").innerText =
      "Tài khoản hoặc mật khẩu không đúng";
  }
}
function m3(button) {
  button.classList.add("active");
}

function m5() {
  if (document.getElementById("thanhtoan") === "Chuyển khoản") {
    window.localStorage.href = "thanhtoan.html";
  }
}
function m6() {
  if (document.getElementById("anhthanhtoan").value === "") {
    document.getElementById("anhtb").innerText =
      "Vui lòng thêm ảnh bill thanh toán";
  } else {
    if (localStorage.getItem("matour") === "N00001") {
      localStorage.setItem("dichvu1", "");
      localStorage.setItem("thanhtoantour1", "Đã Chuyển Khoản");
      localStorage.setItem("tour1", "hienthi");
    }
    if (localStorage.getItem("matour") === "N012345") {
      localStorage.setItem("dichvu2", "");
      localStorage.setItem("thanhtoantour2", "Đã Chuyển Khoản");
      localStorage.setItem("tour2", "hienthi");
    }
    if (localStorage.getItem("matour") === "N012346") {
      localStorage.setItem("dichvu3", "");
      localStorage.setItem("thanhtoantour3", "Đã Chuyển Khoản");
      localStorage.setItem("tour3", "hienthi");
    }
    if (localStorage.getItem("matour") === "N012347") {
      localStorage.setItem("dichvu3", "");
      localStorage.setItem("thanhtoantour4", "Đã Chuyển Khoản");
      localStorage.setItem("tour4", "hienthi");
    }
    alert(
      "Chúc Mừng Bạn Thanh Toán Thành Công!!! Quý khách vui lòng chờ chúng tôi xác nhận nhé!"
    );
    window.location.href = "bookingtour.html";
  }
}
function m7(tb, gia) {
  localStorage.setItem("matour", tb);
  localStorage.setItem("giatien1", gia);
}
function m8(tb1, gia1) {
  localStorage.setItem("matour", tb1);
  localStorage.setItem("giatien1", gia1);
}
document.getElementById("matour").value = localStorage.getItem("matour");
document.getElementById("giatien").value = localStorage.getItem("giatien1");
function m11() {
  if (document.getElementById("name").value === "") {
    document.getElementById("nametb").innerText = "vui lòng nhập họ tên ";
  } else {
    document.getElementById("nametb").innerText = "";
  }
  if (document.getElementById("sdt").value === "") {
    document.getElementById("sdttb").innerText =
      "vui lòng nhập số điện thoại  ";
  } else {
    document.getElementById("sdttb").innerText = "";
  }
  if (document.getElementById("email").value === "") {
    document.getElementById("emailtb").innerText = "vui lòng nhập email ";
  } else {
    document.getElementById("emailtb").innerText = "";
  }
  if (document.getElementById("age").value === "") {
    document.getElementById("agetb").innerText = "vui lòng nhập tuổi của bạn";
  } else if (parseInt(document.getElementById("age").value) < 18) {
    document.getElementById("agetb").innerText =
      "Dưới 18 tuổi vui lòng không thuê xe ";
  } else {
    document.getElementById("xacthuc").style.display = "block";
  }
  if (document.getElementById("ngaydi").value === "") {
    document.getElementById("ngayditb").innerText = "vui lòng chọn ngày đi";
  } else {
    document.getElementById("ngayditb").innerText = "";
  }
  if (
    document.getElementById("name").value !== "" &&
    document.getElementById("ngaydi").value !== "" &&
    document.getElementById("sdt").value !== "" &&
    document.getElementById("email").value !== "" &&
    document.getElementById("ptttoan").value === "tienmat" &&
    parseInt(document.getElementById("age").value) >= 18 &&
    document.getElementById("anhxacthuc").value !== ""
  ) {
    if (localStorage.getItem("matour") === "N00001") {
      localStorage.setItem("dichvu1", "thuê xe");
      localStorage.setItem("thanhtoantour1", "Tiền Mặt");
      localStorage.setItem("tour1", "hienthi");
    }
    if (localStorage.getItem("matour") === "N012345") {
      localStorage.setItem("thanhtoantour2", "Tiền Mặt");
      localStorage.setItem("tour2", "hienthi");
    }
    if (localStorage.getItem("matour") === "N012346") {
      localStorage.setItem("dichvu3", "thuê xe");
      localStorage.setItem("thanhtoantour3", "Tiền Mặt");
      localStorage.setItem("tour3", "hienthi");
    }
    if (localStorage.getItem("matour") === "N012347") {
      localStorage.setItem("dichvu4", "thuê xe");
      localStorage.setItem("thanhtoantour4", "Tiền Mặt");
      localStorage.setItem("tour4", "hienthi");
    }
    alert(
      "Chúc mừng bạn đặt tour thành công! Vui lòng chờ chúng tôi xác nhận nhé"
    );
    window.location.href = "bookingtour.html";
  }
  if (
    document.getElementById("name").value !== "" &&
    document.getElementById("ngaydi").value !== "" &&
    document.getElementById("sdt").value !== "" &&
    document.getElementById("email").value !== "" &&
    document.getElementById("ptttoan").value === "chuyenkhoan" &&
    parseInt(document.getElementById("age").value) >= 18 &&
    document.getElementById("anhxacthuc").value !== ""
  ) {
    window.location.href = "thanhtoanthuexe.html";
  }
}
if (sessionStorage.getItem("dangnhap") === "an") {
  document.getElementById("logg").style.display = "none";
}
