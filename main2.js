if (localStorage.getItem("tour1") === "hienthi") {
  document.getElementById("tour1").style.display = "flex";
}
if (localStorage.getItem("tour2") === "hienthi") {
  document.getElementById("tour2").style.display = "flex";
}
if (localStorage.getItem("tour3") === "hienthi") {
  document.getElementById("tour3").style.display = "flex";
}
if (localStorage.getItem("tour4") === "hienthi") {
  document.getElementById("tour4").style.display = "flex";
}
if (
  localStorage.getItem("tour1") === "hienthi" ||
  localStorage.getItem("tour2") === "hienthi" ||
  localStorage.getItem("tour3") === "hienthi" ||
  localStorage.getItem("tour4") === "hienthi"
) {
  document.getElementById("thongbao").innerText = "";
}
console.log(localStorage.getItem("tour1"));
function m9(tourname) {
  let a = confirm("Bạn có chắc chắn muốn hủy Tour không? ");
  if (a) {
    huytour(tourname);
  }
  if (
    localStorage.getItem("tour1") === "hienthi" ||
    localStorage.getItem("tour2") === "hienthi" ||
    localStorage.getItem("tour3") === "hienthi" ||
    localStorage.getItem("tour4") === "hienthi"
  ) {
    document.getElementById("thongbao").innerText = "";
  }
}
function huytour(tourname) {
  localStorage.setItem(tourname, "an");
  document.getElementById(tourname).style.display = "none";
  alert("Đã Hủy!!! ");
  window.location.href = "lichsu.html";
}
function m10(tour) {
  if (localStorage.getItem(tour) === "hienthi") {
    alert("Bạn đã đặt tour này trước đó, vui lòng kiểm tra lịch sử đặt tour!");
  } else {
    window.location.href = "dattour.html";
  }
}
if (sessionStorage.getItem("dangnhap") === "an") {
  document.getElementById("logg").style.display = "none";
}
