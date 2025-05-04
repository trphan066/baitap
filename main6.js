function m15() {
  if (
    document.getElementById("giatien") === "tatca" &&
    document.getElementById("phuongtien") === "tatca" &&
    document.getElementById("dongtour") === "tatca"
  ) {
    document.getElementById("ks1").style.display = "";
    document.getElementById("ks3").style.display = "";
    document.getElementById("ks5").style.display = "";
    document.getElementById("ks6").style.display = "";
    document.getElementById("ks7").style.display = "";
    document.getElementById("ks8").style.display = "";
    document.getElementById("ks2").style.display = "";
    document.getElementById("ks4").style.display = "";
  } else if (
    document.getElementById("giatien").value === "tren500" &&
    document.getElementById("phuongtien").value === "tatca" &&
    document.getElementById("dongtour").value === "tatca"
  ) {
    document.getElementById("ks1").style.display = "none";
    document.getElementById("ks3").style.display = "none";
    document.getElementById("ks5").style.display = "none";
    document.getElementById("ks6").style.display = "none";
    document.getElementById("ks7").style.display = "none";
    document.getElementById("ks8").style.display = "none";
    document.getElementById("ks2").style.display = "";
    document.getElementById("ks4").style.display = "";
  } else if (
    document.getElementById("giatien").value === "duoi500" &&
    document.getElementById("phuongtien").value === "tatca" &&
    document.getElementById("dongtour").value === "tatca"
  ) {
    document.getElementById("ks1").style.display = "";
    document.getElementById("ks3").style.display = "";
    document.getElementById("ks5").style.display = "";
    document.getElementById("ks6").style.display = "";
    document.getElementById("ks7").style.display = "";
    document.getElementById("ks8").style.display = "";
    document.getElementById("ks2").style.display = "none";
    document.getElementById("ks4").style.display = "none";
  } else if (
    (document.getElementById("giatien").value === "tren500" ||
      document.getElementById("giatien").value === "tatca") &&
    (document.getElementById("phuongtien").value === "tatca" ||
      document.getElementById("phuongtien").value === "5sao") &&
    (document.getElementById("dongtour").value === "tatca" ||
      document.getElementById("dongtour").value === "caocap")
  ) {
    document.getElementById("ks1").style.display = "none";
    document.getElementById("ks3").style.display = "none";
    document.getElementById("ks5").style.display = "none";
    document.getElementById("ks6").style.display = "none";
    document.getElementById("ks7").style.display = "none";
    document.getElementById("ks8").style.display = "none";
    document.getElementById("ks2").style.display = "";
    document.getElementById("ks4").style.display = "";
  } else if (
    (document.getElementById("giatien").value === "duoi500" ||
      document.getElementById("giatien").value === "tatca") &&
    (document.getElementById("phuongtien").value === "tatca" ||
      document.getElementById("phuongtien").value === "4sao") &&
    document.getElementById("dongtour").value === "tieuchuan"
  ) {
    document.getElementById("ks1").style.display = "";
    document.getElementById("ks3").style.display = "";
    document.getElementById("ks5").style.display = "";
    document.getElementById("ks6").style.display = "";
    document.getElementById("ks7").style.display = "";
    document.getElementById("ks8").style.display = "";
    document.getElementById("ks2").style.display = "none";
    document.getElementById("ks4").style.display = "none";
  } else if (
    (document.getElementById("giatien").value === "duoi500" ||
      document.getElementById("giatien").value === "tatca") &&
    (document.getElementById("phuongtien").value === "tatca" ||
      document.getElementById("phuongtien").value === "3sao") &&
    document.getElementById("dongtour").value === "tietkiem"
  ) {
    document.getElementById("ks1").style.display = "none";
    document.getElementById("ks3").style.display = "";
    document.getElementById("ks5").style.display = "none";
    document.getElementById("ks6").style.display = "none";
    document.getElementById("ks7").style.display = "none";
    document.getElementById("ks8").style.display = "";
    document.getElementById("ks2").style.display = "none";
    document.getElementById("ks4").style.display = "none";
  }
  //   -----------------------------------------
  else if (
    (document.getElementById("giatien").value === "duoi500" ||
      document.getElementById("giatien").value === "tatca") &&
    document.getElementById("phuongtien").value === "3sao" &&
    (document.getElementById("dongtour").value === "tatca" ||
      document.getElementById("dongtour").value === "tietkiem")
  ) {
    document.getElementById("ks1").style.display = "none";
    document.getElementById("ks3").style.display = "";
    document.getElementById("ks5").style.display = "none";
    document.getElementById("ks6").style.display = "none";
    document.getElementById("ks7").style.display = "none";
    document.getElementById("ks8").style.display = "";
    document.getElementById("ks2").style.display = "none";
    document.getElementById("ks4").style.display = "none";
  } else if (
    (document.getElementById("giatien").value === "duoi500" ||
      document.getElementById("giatien").value === "tatca") &&
    document.getElementById("phuongtien").value === "4sao" &&
    (document.getElementById("dongtour").value === "tatca" ||
      document.getElementById("dongtour").value === "tieuchuan")
  ) {
    document.getElementById("ks1").style.display = "";
    document.getElementById("ks3").style.display = "none";
    document.getElementById("ks5").style.display = "";
    document.getElementById("ks6").style.display = "";
    document.getElementById("ks7").style.display = "";
    document.getElementById("ks8").style.display = "none";
    document.getElementById("ks2").style.display = "none";
    document.getElementById("ks4").style.display = "none";
  }
  //   ------------------------------------------------
  else {
    document.getElementById("ks1").style.display = "none";
    document.getElementById("ks3").style.display = "none";
    document.getElementById("ks5").style.display = "none";
    document.getElementById("ks6").style.display = "none";
    document.getElementById("ks7").style.display = "none";
    document.getElementById("ks8").style.display = "none";
    document.getElementById("ks2").style.display = "none";
    document.getElementById("ks4").style.display = "none";
  }
}
function m18(tenks) {
  localStorage.setItem("nameks", tenks);
  window.location.href = "bookks.html";
}
