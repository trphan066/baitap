function checkdongtour() {
  let c = document.getElementById("dongtour").value;
  let d = document.getElementById("phuongtien").value;
  let a = document.getElementById("giatien").value;
  let b = document.getElementById("diemkhoihanh").value;
  if (a === "tren5trieu") {
    document.getElementById("tour1").style.display = "none";
    document.getElementById("tour2").style.display = "none";
    document.getElementById("tour3").style.display = "none";
    document.getElementById("tour4").style.display = "none";
  } else {
    document.getElementById("tour1").style.display = "flex";
    document.getElementById("tour2").style.display = "flex";
    document.getElementById("tour3").style.display = "flex";
    document.getElementById("tour4").style.display = "flex";
  }
  if (b === "hanoi") {
    document.getElementById("tour1").style.display = "none";
    document.getElementById("tour2").style.display = "none";
    document.getElementById("tour3").style.display = "none";
    document.getElementById("tour4").style.display = "none";
  }
  if (c === "caocap" && b !== "hanoi" && d !== "maybay" && a !== "tren5trieu") {
    document.getElementById("tour1").style.display = "flex";
    document.getElementById("tour2").style.display = "none";
    document.getElementById("tour3").style.display = "none";
    document.getElementById("tour4").style.display = "none";
  }
  if (
    c === "tieuchuan" &&
    b !== "hanoi" &&
    d !== "maybay" &&
    a !== "tren5trieu"
  ) {
    document.getElementById("tour2").style.display = "flex";
    document.getElementById("tour1").style.display = "none";
    document.getElementById("tour3").style.display = "none";
    document.getElementById("tour4").style.display = "none";
  }
  if (
    c === "tietkiem" &&
    b !== "hanoi" &&
    d !== "maybay" &&
    a !== "tren5trieu"
  ) {
    document.getElementById("tour3").style.display = "flex";
    document.getElementById("tour1").style.display = "none";
    document.getElementById("tour2").style.display = "none";
    document.getElementById("tour4").style.display = "none";
  }
  if (c === "giatot" && b !== "hanoi" && d !== "maybay" && a !== "tren5trieu") {
    document.getElementById("tour4").style.display = "flex";
    document.getElementById("tour1").style.display = "none";
    document.getElementById("tour2").style.display = "none";
    document.getElementById("tour3").style.display = "none";
  }
  if (d === "maybay" && b !== "hanoi" && d !== "maybay") {
    document.getElementById("tour1").style.display = "none";
    document.getElementById("tour2").style.display = "none";
    document.getElementById("tour3").style.display = "none";
    document.getElementById("tour4").style.display = "none";
  }
}
if (sessionStorage.getItem("dangnhap") === "an") {
  document.getElementById("logg").style.display = "none";
}
