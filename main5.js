function openMap(address) {
  let url = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
  window.open(url, "_blank");
}
if (localStorage.getItem("dangnhap") === "an") {
  document.getElementById("logg").style.display = "none";
}
function m18(nameks, ks) {
  localStorage.setItem("nameks", nameks);
  localStorage.setItem("ks", ks);
  window.location.href = "bookks.html";
}
function m19(xoa) {
  if (
    document.getElementById("gia").value === "tatca" &&
    document.getElementById("dongtour").value === "tatca" &&
    document.getElementById("danhgia").value === "tatca"
  ) {
    document.getElementById("ks1").style.display = "";
    document.getElementById("ks2").style.display = "";
    document.getElementById("ks3").style.display = "";
    document.getElementById("ks4").style.display = "";
    document.getElementById("ks5").style.display = "";
    document.getElementById("ks6").style.display = "";
    document.getElementById("ks7").style.display = "";
    document.getElementById("ks8").style.display = "";
  } else if (
    document.getElementById("gia").value === "tren500" &&
    (document.getElementById("dongtour").value === "caocap" ||
      document.getElementById("dongtour").value === "tatca") &&
    (document.getElementById("danhgia").value == "5" ||
      document.getElementById("danhgia").value === "tatca")
  ) {
    document.getElementById("ks1").style.display = "none";
    document.getElementById("ks2").style.display = "";
    document.getElementById("ks3").style.display = "none";
    document.getElementById("ks4").style.display = "";
    document.getElementById("ks5").style.display = "none";
    document.getElementById("ks6").style.display = "none";
    document.getElementById("ks7").style.display = "none";
    document.getElementById("ks8").style.display = "none";
  } else if (
    document.getElementById("gia").value === "duoi500" &&
    document.getElementById("dongtour").value === "tatca" &&
    document.getElementById("danhgia").value === "tatca"
  ) {
    document.getElementById("ks1").style.display = "";
    document.getElementById("ks2").style.display = "none";
    document.getElementById("ks3").style.display = "";
    document.getElementById("ks4").style.display = "none";
    document.getElementById("ks5").style.display = "";
    document.getElementById("ks6").style.display = "";
    document.getElementById("ks7").style.display = "";
    document.getElementById("ks8").style.display = "";
  } else if (
    (document.getElementById("gia").value === "tren500" ||
      document.getElementById("gia").value === "tatca") &&
    document.getElementById("dongtour").value === "caocap" &&
    (document.getElementById("danhgia").value == "5" ||
      document.getElementById("danhgia").value === "tatca")
  ) {
    document.getElementById("ks1").style.display = "none";
    document.getElementById("ks2").style.display = "";
    document.getElementById("ks3").style.display = "none";
    document.getElementById("ks4").style.display = "";
    document.getElementById("ks5").style.display = "none";
    document.getElementById("ks6").style.display = "none";
    document.getElementById("ks7").style.display = "none";
    document.getElementById("ks8").style.display = "none";
  } else if (
    (document.getElementById("gia").value === "duoi500" ||
      document.getElementById("gia").value === "tatca") &&
    document.getElementById("dongtour").value === "tieuchuan" &&
    (document.getElementById("danhgia").value == "4" ||
      document.getElementById("danhgia").value === "tatca")
  ) {
    document.getElementById("ks1").style.display = "";
    document.getElementById("ks2").style.display = "none";
    document.getElementById("ks3").style.display = "none";
    document.getElementById("ks4").style.display = "none";
    document.getElementById("ks5").style.display = "";
    document.getElementById("ks6").style.display = "";
    document.getElementById("ks7").style.display = "";
    document.getElementById("ks8").style.display = "none";
  } else if (
    (document.getElementById("gia").value === "duoi500" ||
      document.getElementById("gia").value === "tatca") &&
    document.getElementById("dongtour").value === "tietkiem" &&
    (document.getElementById("danhgia").value == "3" ||
      document.getElementById("danhgia").value === "tatca")
  ) {
    document.getElementById("ks1").style.display = "none";
    document.getElementById("ks2").style.display = "none";
    document.getElementById("ks3").style.display = "";
    document.getElementById("ks4").style.display = "none";
    document.getElementById("ks5").style.display = "none";
    document.getElementById("ks6").style.display = "none";
    document.getElementById("ks7").style.display = "none";
    document.getElementById("ks8").style.display = "";
  } else if (
    (document.getElementById("gia").value === "tren500" ||
      document.getElementById("gia").value === "tatca") &&
    (document.getElementById("dongtour").value === "caocap" ||
      document.getElementById("dongtour").value === "tatca") &&
    document.getElementById("danhgia").value == "5"
  ) {
    document.getElementById("ks1").style.display = "none";
    document.getElementById("ks2").style.display = "";
    document.getElementById("ks3").style.display = "none";
    document.getElementById("ks4").style.display = "";
    document.getElementById("ks5").style.display = "none";
    document.getElementById("ks6").style.display = "none";
    document.getElementById("ks7").style.display = "none";
    document.getElementById("ks8").style.display = "none";
  } else if (
    (document.getElementById("gia").value === "duoi500" ||
      document.getElementById("gia").value === "tatca") &&
    (document.getElementById("dongtour").value === "tieuchuan" ||
      document.getElementById("dongtour").value === "tatca") &&
    document.getElementById("danhgia").value == "4"
  ) {
    document.getElementById("ks1").style.display = "";
    document.getElementById("ks2").style.display = "none";
    document.getElementById("ks3").style.display = "none";
    document.getElementById("ks4").style.display = "none";
    document.getElementById("ks5").style.display = "";
    document.getElementById("ks6").style.display = "";
    document.getElementById("ks7").style.display = "";
    document.getElementById("ks8").style.display = "none";
  } else if (
    (document.getElementById("gia").value === "duoi500" ||
      document.getElementById("gia").value === "tatca") &&
    (document.getElementById("dongtour").value === "tietkiem" ||
      document.getElementById("dongtour").value === "tatca") &&
    document.getElementById("danhgia").value == "3"
  ) {
    document.getElementById("ks1").style.display = "none";
    document.getElementById("ks2").style.display = "none";
    document.getElementById("ks3").style.display = "";
    document.getElementById("ks4").style.display = "none";
    document.getElementById("ks5").style.display = "none";
    document.getElementById("ks6").style.display = "none";
    document.getElementById("ks7").style.display = "none";
    document.getElementById("ks8").style.display = "";
  }
  // ------------------------
  else {
    document.getElementById("ks1").style.display = "none";
    document.getElementById("ks2").style.display = "none";
    document.getElementById("ks3").style.display = "none";
    document.getElementById("ks4").style.display = "none";
    document.getElementById("ks5").style.display = "none";
    document.getElementById("ks6").style.display = "none";
    document.getElementById("ks7").style.display = "none";
    document.getElementById("ks8").style.display = "none";
  }
}
function m20() {
  document.getElementById("ks1").style.display = "";
  document.getElementById("ks2").style.display = "";
  document.getElementById("ks3").style.display = "";
  document.getElementById("ks4").style.display = "";
  document.getElementById("ks5").style.display = "";
  document.getElementById("ks6").style.display = "";
  document.getElementById("ks7").style.display = "";
  document.getElementById("ks8").style.display = "";
}
