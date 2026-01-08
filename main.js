// URL から ?slide=◯ を取得
const params = new URLSearchParams(window.location.search);
const startIndex = Number(params.get("slide"));

// 有効な番号なら currentIndex にセット
if (!isNaN(startIndex) && startIndex >= 0 && startIndex < images.length) {
  currentIndex = startIndex;
}

const images = [
  { src: "image/slide1.png", text: "作品①：初級編。Wix使用", url: "https://nkzwcreate.wixsite.com/my-site-3" },
  { src: "image/slide2.png", text: "作品②：中級編。Wix使用", url: "https://nkzwcreate.wixsite.com/my-site-1" },
  { src: "image/slide3.png", text: "作品③：上級編。Wix使用", url: "https://nkzwcreate.wixsite.com/my-site-5" },
  { src: "image/slide4.png", text: "作品④：自主制作。Wix使用", url: "https://nkzwcreate.wixsite.com/my-site-2" },
  { src: "image/slide5.png", text: "作品⑤：Zoom背景作成。Canva使用", url: "#" },
  { src: "image/slide6.png", text: "作品⑥：SNS投稿作成。Canva使用", url: "https://www.canva.com/design/DAGXW9YNQTk/view" },
  { src: "image/slide7.png", text: "作品⑦：自主制作。Canva使用", url: "#" }
];

// 要素を取得
const sliderImage = document.getElementById("slide-image");
const sliderText = document.getElementById("slide-text");
const slideLink = document.getElementById("slide-link");
let currentIndex = 0;

function updateSlide() {
  const slide = images[currentIndex];
  sliderImage.src = slide.src;
  sliderText.textContent = slide.text;

  if(slide.url && slide.url !== "#") {
    slideLink.href = slide.url;
    slideLink.style.display = "inline-block"; // リンク表示
  } else {
    slideLink.href = "#";
    slideLink.style.display = "none"; // リンク非表示
  }
}

// 左右ボタン
document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide();
});
document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide();
});

// 初期表示
updateSlide();

// ▼ サムネイルをクリックしたらスライド移動
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {
    currentIndex = Number(thumb.dataset.index); // サムネのindexを取得
    updateSlide(); // スライド更新
    window.scrollTo({ top: 0, behavior: "smooth" }); // ← スライダーの位置へ移動（任意）
  });
});