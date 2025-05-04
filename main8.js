if (localStorage.getItem("ks1") === "hien") {
  document.getElementById("ks1").style.display = "";
} else {
  document.getElementById("ks1").style.display = "none";
}
// -----------------------------
if (localStorage.getItem("ks2") === "hien") {
  document.getElementById("ks2").style.display = "";
} else {
  document.getElementById("ks2").style.display = "none";
}
// -----------------------------
if (localStorage.getItem("ks3") === "hien") {
  document.getElementById("ks3").style.display = "";
} else {
  document.getElementById("ks3").style.display = "none";
}
// -----------------------------
if (localStorage.getItem("ks4") === "hien") {
  document.getElementById("ks4").style.display = "";
} else {
  document.getElementById("ks4").style.display = "none";
}
// -----------------------------
if (localStorage.getItem("ks5") === "hien") {
  document.getElementById("ks5").style.display = "";
} else {
  document.getElementById("ks5").style.display = "none";
}
// -----------------------------
if (localStorage.getItem("ks6") === "hien") {
  document.getElementById("ks6").style.display = "";
} else {
  document.getElementById("ks6").style.display = "none";
}
// -----------------------------
if (localStorage.getItem("ks7") === "hien") {
  document.getElementById("ks7").style.display = "";
} else {
  document.getElementById("ks7").style.display = "none";
}
// -----------------------------
if (localStorage.getItem("ks8") === "hien") {
  document.getElementById("ks8").style.display = "";
} else {
  document.getElementById("ks8").style.display = "none";
}
// -----------------------------
function m22(nameks) {
  if (nameks === "ks1" && confirm("Bạn có chắc muốn hủy phòng không?")) {
    localStorage.setItem("ks1", "an");
    alert("Đã hủy!!!");
    window.location.href = "lichsukhachsan.html";
  }
  if (nameks === "ks2" && confirm("Bạn có chắc muốn hủy phòng không?")) {
    localStorage.setItem("ks2", "an");
    alert("Đã hủy!!!");
    window.location.href = "lichsukhachsan.html";
  }
  if (nameks === "ks3" && confirm("Bạn có chắc muốn hủy phòng không?")) {
    localStorage.setItem("ks3", "an");
    alert("Đã hủy!!!");
    window.location.href = "lichsukhachsan.html";
  }
  if (nameks === "ks4" && confirm("Bạn có chắc muốn hủy phòng không?")) {
    localStorage.setItem("ks4", "an");
    alert("Đã hủy!!!");
    window.location.href = "lichsukhachsan.html";
  }
  if (nameks === "ks5" && confirm("Bạn có chắc muốn hủy phòng không?")) {
    localStorage.setItem("ks5", "an");
    alert("Đã hủy!!!");
    window.location.href = "lichsukhachsan.html";
  }
  if (nameks === "ks6" && confirm("Bạn có chắc muốn hủy phòng không?")) {
    localStorage.setItem("ks6", "an");
    alert("Đã hủy!!!");
    window.location.href = "lichsukhachsan.html";
  }
  if (nameks === "ks7" && confirm("Bạn có chắc muốn hủy phòng không?")) {
    localStorage.setItem("ks7", "an");
    alert("Đã hủy!!!");
    window.location.href = "lichsukhachsan.html";
  }
  if (nameks === "ks8" && confirm("Bạn có chắc muốn hủy phòng không?")) {
    localStorage.setItem("ks8", "an");
    alert("Đã hủy!!!");
    window.location.href = "lichsukhachsan.html";
  }
}
if (
  localStorage.getItem("ks1") !== "an" ||
  localStorage.getItem("ks2") !== "an" ||
  localStorage.getItem("ks3") !== "an" ||
  localStorage.getItem("ks4") !== "an" ||
  localStorage.getItem("ks5") !== "an" ||
  localStorage.getItem("ks6") !== "an" ||
  localStorage.getItem("ks7") !== "an" ||
  localStorage.getItem("ks8") !== "an"
) {
  document.getElementById("h2tb").style.display = "none";
}
