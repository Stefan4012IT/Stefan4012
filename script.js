const box1 = document.querySelector('.box1');
const text = document.querySelector('.text');


addText();


function addText(){
    
    var text1 = 'HTML CSS JAVA SCRIPT';
    var text2 = 'FAST FORWARD';
    var text3 = 'NOVA REŠENJA';
    var text4 = 'JAVA JSP JSTL SPRING';
    
    const textArr = [text1, text2, text3, text4];
    for(let i = 0; i < textArr.length; i++){
        setTimeout(() => {
                text.innerText = textArr[i]; 
            }, i*4000);
    }
}



setInterval(addText, 16000);

