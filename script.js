const changeTextBtn = document.querySelector('.changeText');
const readTextBtn = document.querySelector('.readText');
const code = document.querySelector('#code');
const input = document.querySelector('.userInput input');
const submitbtn = document.querySelector('.btn');



changeTextBtn.addEventListener('click', () => {
    code.textContent = createCaptcha();
});
window.addEventListener('load', () => {
    code.textContent = createCaptcha();
});


//For captcha
function createCaptcha()
{
    let letters = ['A','B','C','D','E','F','G','H','I','J','K','L',,'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9']

    let a = letters[Math.floor(Math.random() * letters.length)];
    let b = letters[Math.floor(Math.random() * letters.length)];
    let c = letters[Math.floor(Math.random() * letters.length)];
    let d = letters[Math.floor(Math.random() * letters.length)];
    let e = letters[Math.floor(Math.random() * letters.length)];
    let f = letters[Math.floor(Math.random() * letters.length)];
    let code = a + b + c + d + e + f;
    return code; 
}

function speakCaptcha()
{ 
  let text ='';
  for(let i=0 ;i <=code.textContent.length; i++ )
  {    
    text+= code.textContent.charAt(i) +' ';
  }
  return text;
}




//To prevent accessing the source code
document.addEventListener('keydown', function() {
    if (event.keyCode == 123) {
      //alert("This function has been disabled to prevent you from stealing my code!");
      responsiveVoice.speak("This function has been disabled");
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      //alert("This function has been disabled to prevent you from stealing my code!");
      responsiveVoice.speak("This function has been disabled");
      return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
      //alert("This function has been disabled to prevent you from stealing my code!");
      responsiveVoice.speak("This function has been disabled");
      return false;
    }
  }, false);
  
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
     // alert("This function has been disabled to prevent you from stealing my code!");
      responsiveVoice.speak("This function has been disabled");
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
    //  alert("This function has been disabled to prevent you from stealing my code!");
      responsiveVoice.speak("This function has been disabled");
      window.event.returnValue = false;
    });
  }
  