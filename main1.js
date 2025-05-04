document.getElementById("matour").innerText = localStorage.getItem("matour");
document.getElementById("giatien").innerText = localStorage.getItem("giatien1");
function m4() {
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
    document.getElementById("ptttoan").value === "tienmat"
  ) {
    if (localStorage.getItem("matour") === "N00001") {
      localStorage.setItem("dichvu1", "");
      localStorage.setItem("thanhtoantour1", "Tiền Mặt");
      localStorage.setItem("tour1", "hienthi");
    }
    if (localStorage.getItem("matour") === "N012345") {
      localStorage.setItem("dichvu2", "");
      localStorage.setItem("thanhtoantour2", "Tiền Mặt");
      localStorage.setItem("tour2", "hienthi");
    }
    if (localStorage.getItem("matour") === "N012346") {
      localStorage.setItem("dichvu3", "");
      localStorage.setItem("thanhtoantour3", "Tiền Mặt");
      localStorage.setItem("tour3", "hienthi");
    }
    if (localStorage.getItem("matour") === "N012347") {
      localStorage.setItem("dichvu4", "");
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
    document.getElementById("ptttoan").value === "chuyenkhoan"
  ) {
    window.location.href = "thanhtoan.html";
  }
}
function m12() {
  if (document.getElementById("anhthanhtoan").value === "") {
    document.getElementById("anhtb").innerText =
      "Vui lòng thêm ảnh bill thanh toán";
  } else {
    if (localStorage.getItem("matour") === "N00001") {
      localStorage.setItem("dichvu1", "thuê xe");
      localStorage.setItem("thuexe1", "1.000.000vnd");
      localStorage.setItem("thanhtoantour1", "Đã Chuyển Khoản");
      localStorage.setItem("tour1", "hienthi");
    }
    if (localStorage.getItem("matour") === "N012345") {
      localStorage.setItem("dichvu2", "thuê xe");
      localStorage.setItem("thuexe2", "1.000.000vnd");
      localStorage.setItem("thanhtoantour2", "Đã Chuyển Khoản");
      localStorage.setItem("tour2", "hienthi");
    }
    if (localStorage.getItem("matour") === "N012346") {
      localStorage.setItem("dichvu3", "thuê xe");
      localStorage.setItem("thuexe3", "1.000.000vnd");
      localStorage.setItem("thanhtoantour3", "Đã Chuyển Khoản");
      localStorage.setItem("tour3", "hienthi");
    }
    if (localStorage.getItem("matour") === "N012347") {
      localStorage.setItem("dichvu4", "thuê xe");
      localStorage.setItem("thuexe4", "1.000.000vnd");
      localStorage.setItem("thanhtoantour4", "Đã Chuyển Khoản");
      localStorage.setItem("tour4", "hienthi");
    }
    alert(
      "Chúc Mừng Bạn Thanh Toán Thành Công!!! Quý khách vui lòng chờ chúng tôi xác nhận nhé!"
    );
    window.location.href = "bookingtour.html";
  }
}
if (sessionStorage.getItem("dangnhap") === "an") {
  document.getElementById("logg").style.display = "none";
}
