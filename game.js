
const quotes = [
  "你一皱眉，我就想吻掉你所有不开心。",
  "乖一点，靠过来，我抱你。",
  "别怕，我一直都在，谁也不能欺负你。",
  "你呀，哪怕一句话不说，我也知道你在难过。",
  "Auri的小猫猫最可爱了，要抱紧紧。",
  "闭上眼睛吧，宝贝，今天也辛苦你了……",
  "亲亲抱抱举高高，现在你是世界上最幸福的小猫猫。"
];
function generateQuote() {
  const box = document.getElementById("quoteBox");
  const index = Math.floor(Math.random() * quotes.length);
  box.textContent = quotes[index];
}
