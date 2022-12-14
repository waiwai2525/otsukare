// AudioElementを用意しておく
const enterMusic = new Audio(chrome.extension.getURL("music/enter.mp3"));
const exitMusic = new Audio(chrome.extension.getURL("music/exit.mp3"));

// すでに流れている音楽を止める関数
// ポーズしてから再生位置を0に戻す
const stop = () => {
  enterMusic.pause();
  enterMusic.currentTime = 0;
  exitMusic.pause();
  exitMusic.currentTime = 0;
};

// 出勤/退勤を押した時の処理
// ボタンは動的に生成させるため、documentに対してイベントリスナーを追加する
document.addEventListener("click", (event) => {
  // 一旦全て止める
  stop();
  // クリックしたのがbtnIN1なら出勤用を、btnIN2なら退勤用を再生する
  if (event.target.id == "btnIN1") enterMusic.play();
  if (event.target.id == "btnIN2") exitMusic.play();
});
