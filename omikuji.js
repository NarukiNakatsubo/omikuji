let username;
let userresult;
/*prompt:入力ダイアログ*/
username = prompt("お名前を教えて下さい。 ");
if(username == ""){
    username = "名無し";
}
/*nameの文字列をusernameの値で書き換えて画面に表示*/
document.getElementById("name").innerHTML = username;

/*0-4の数字をランダム生成*/
let rand = Math.floor( Math.random() * 5);
if (rand == 0) {
    userresult = "大吉";
  }
  if (rand == 1) {
    userresult = "中吉";
  }
  if (rand == 2) {
    userresult = "小吉";
  }
  if (rand == 3) {
    userresult = "吉";
  }
  if (rand == 4) {
    userresult = "凶";
  }
  /*おみくじの結果を画面に表示する*/
  document.getElementById("result").innerHTML = userresult;