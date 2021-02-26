let id = null;
function doIt(speed) {
  function writeCode(pre, code, fn) {
    let codeWrapper = document.querySelector("#code");
    let style = document.querySelector("#styleTag");
    let n = 0;
    id = setInterval(() => {
      n += 1;
      codeWrapper.innerHTML = code.substring(0, n);
      style.innerHTML = code.substring(0, n);
      codeWrapper.scrollTop = codeWrapper.scrollHeight;
      if (n >= code.length) {
        window.clearInterval(id);
        fn && fn();
      }
    }, speed);
  }
  let code = `
  /*
     *首先准备皮卡丘的皮
     */
    .wrapper {
      width: 100%;
      height: 220px;
      position: relative;
    }
    /*
    *下一步，准备皮卡丘的鼻子
    */
    .nose {
      width: 0;
      height: 0;
      border: 11px solid red;
      border-radius: 12px;
      border-color: black transparent transparent transparent;
      position: absolute;
      left: 50%;
      top: 28px;
      transform: translate(-12px);
    }
    /*
     *下一步，准备皮卡丘的眼睛
     */
    .eye {
      width: 49px;
      height: 49px;
      background-color: #2e2e2e;
      border-radius: 50%;
      position: absolute;
      border: 2px solid #000;
    }
    .eye::before {
      content: "";
      display: block;
      width: 24px;
      height: 24px;
      background-color: white;
      position: absolute;
      border-radius: 50%;
      left: 6px;
      top: -1px;
      border: 2px solid #000;
    }
    .eye.left {
      right: 50%;
      margin-right: 90px;
    }
    .eye.right {
      left: 50%;
      margin-left: 90px;
    }
    /*
     *下一步，准备皮卡丘的脸颊
     */
    .face {
      width: 65px;
      height: 68px;
      background-color: #f92726;
      border: 2px solid black;
      border-radius: 50%;
      position: absolute;
      top: 85px;
    }
    .face.left {
      right: 50%;
      margin-right: 116px;
    }
    .face.right {
      left: 50%;
      margin-left: 116px;
    }
    /*
     *下一步，准备皮卡丘的上唇
     */
    .upperLip {
      height: 20px;
      width: 80px;
      border: 3px solid black;
      position: absolute;
      top: 52px;
      background-color: yellow;
      z-index: 1;
    }
    .upperLip.left {
      border-bottom-left-radius: 40px 20px;
      border-top: none;
      border-right: none;
      transform: rotate(-20deg);
      right: 50%;
    }
    .upperLip.right {
      left: 50%;
      border-bottom-right-radius: 40px 20px;
      border-top: none;
      border-left: none;
      transform: rotate(20deg);
    }
    /*
     *下一步，准备皮卡丘的下唇
     */
    .lowerLip-wrapper {
      width: 120px;
      height: 130px;
      position: absolute;
      left: 50%;
      margin-left: -60px;
      margin-top: 56px;
      overflow: hidden;
    }
    .lowerLip {
      height: 1000px;
      width: 120px;
      border-radius: 200px/800px;
      border: 2px solid black;
      background-color: #971818;
      position: absolute;
      bottom: 0;
      overflow: hidden;
    }
    /*
     *下一步，准备皮卡丘的舌头
     */
    .tongue {
      width: 100px;
      height: 100px;
      border-radius: 50px;
      left: 8px;
      background-color: #f95364;
      position: absolute;
      bottom: 0;
      z-index: 2;
    }
    `;
  writeCode("", code);
}
doIt(15);
let up = document.querySelector("#speedUp");
let down = document.querySelector("#speedDown");
let reset = document.querySelector("#reset");
up.addEventListener("click", () => {
  window.clearInterval(id);
  doIt(2);
});
down.addEventListener("click", () => {
  window.clearInterval(id);
  doIt(30);
});
reset.addEventListener("click", () => {
  window.clearInterval(id);
  doIt(15);
});