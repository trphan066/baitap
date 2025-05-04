let currentIndex = 0;
const images = document.querySelectorAll(".banner-img");
const bannerOverlay = document.querySelector(".banner-overlay");

function updateBanner() {
  const offset = -currentIndex * 300; // 300px là chiều rộng của mỗi ảnh
  bannerOverlay.style.transform = `translateX(${offset}px)`;
}

document.querySelector(".banner-btn-prev").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateBanner();
  }
});

document.querySelector(".banner-btn-next").addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateBanner();
  }
});

// Tự động chuyển slide mỗi 5 giây
setInterval(() => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateBanner();
}, 5000);
function search() {
  let div = document.getElementById("divsearch");
  let content = document.getElementById("overlay");
  if (div.style.display === "none" || div.style.display === "") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
}
document.querySelectorAll("select").forEach((select) => {
  select.addEventListener("change", function () {
    const selectedOption = this.options[this.selectedIndex];
    const href = selectedOption.getAttribute("data-href");
    if (href) {
      // Chỉ chuyển hướng nếu có data-href
      window.location.href = href; // Chuyển hướng đến trang HTML tương ứng
    }
  });
});
if (sessionStorage.getItem("dangnhap") === "an") {
  document.getElementById("logg").style.display = "none";
}
function m13() {
  if (sessionStorage.getItem("dangnhap") !== "an") {
    alert("vui lòng đăng nhập để sử dụng tính năng");
    window.location.href = "dangnhap.html";
  } else {
    window.location.href = "bookingtour.html";
  }
}
function n1(){
  alert("Hiện chưa có dịch vụ khác, vui lòng quay lại sau!!!!!!")
}