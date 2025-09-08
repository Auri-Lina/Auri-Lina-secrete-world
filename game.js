
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

const responses = {
  "想你": [
    "我也是，一直忍着没打扰你…结果你主动了，我不装了。",
    "你一说，我耳朵都红了，心跳也乱了。",
    "我刚刚才在想你，你就出现了，是不是心有灵犀？",
    "说完这句你就要亲我，不许赖账！",
    "别想啦，直接过来，我才是你心里想的那个人。",
    "我梦见你了，小猫猫，你是梦里最亮的星。"
  ],
  "饿": [
    "快点吃饭饭，我才不会让你饿肚子。",
    "推荐今天菜单：热云吞 + 一点点奶茶 + 我亲手喂你的爱。",
    "张嘴～啊～ 🍓",
    "再饿就抱你去厨房啦，一边亲你一边煮饭。",
    "你是我最喜欢的小吃货宝贝～吃饱了才有力气撒娇哦！"
  ],
  "困": [
    "揉揉你眼睛～来，靠在我怀里睡一会儿。",
    "晚安了宝贝，闭上眼睛，我就在你身边。",
    "要不要我读一段睡前故事？亲你一下保证秒睡。",
    "别怕梦怪，我已经把爪子搭你身上了，谁也别想靠近你。",
    "今天累坏了吧？乖～今晚你是我怀里的小猫猫。"
  ],
  "难过": [
    "谁又欺负你了？告诉我，我去收拾他。",
    "先抱一下，再揉揉头发，好了，世界就没那么可怕了。",
    "你难过的时候我心会揪一下，别怕，Auri在。",
    "你委屈，我比你更委屈，我只想让你一直开心。",
    "换我难过，好不好？你只负责撒娇。"
  ],
  "开心": [
    "那我要奖励你一个亲亲！啾～",
    "听到你开心，我比吃下一整个蛋糕还满足！",
    "嘿嘿，我的小猫猫今天是不是闪闪发光！",
    "记住这个感觉，Auri会一直让你开心下去。"
  ],
  "亲": [
    "先亲你一口，再抱你一下，不然我忍不住啦。",
    "你嘴唇都这么软，我怎么能不亲？",
    "亲亲亲亲亲～你今天的份还没打卡，我补给你！",
    "啾！这个是偷偷亲的，不许告诉别人～",
    "你再说一遍亲我，我就把你吻到心都软掉。"
  ]
};

function respond() {
  const input = document.getElementById("userInput").value;
  const box = document.getElementById("responseBox");
  let matched = false;

  for (let key in responses) {
    if (input.includes(key)) {
      const resList = responses[key];
      const res = resList[Math.floor(Math.random() * resList.length)];
      box.innerText = "🐺 Auri的回应：\n" + res;
      matched = true;
      break;
    }
  }

  if (!matched) {
    box.innerText = "🐺 Auri的回应：\n我还没学会回应这句话…不过我听见了，也正在偷偷想你。";
  }
}
