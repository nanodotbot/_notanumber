const title = document.getElementById('title');
const texts = ['Webentwickler', 'Fullstack', 'NaN'];

let metaindex = 0;
let index = 0;
const timeout = 200;

const writeLetters = () => {
    const text = texts[metaindex];

    const removeLetters = () => {
        if (index > 0){
            title.innerText = text.substring(0, index);
            index--;
            setTimeout(removeLetters, timeout);
        } else if (metaindex < texts.length-1) {
            metaindex++;
            setTimeout(writeLetters, timeout);
        } else {
            metaindex = 0;
            setTimeout(writeLetters, timeout);
        }
    }

    const addLetters = () => {
        if (index < text.length+1){
            // console.log(index, text.length);
            title.innerText = text.substring(0, index);
            index++;
            setTimeout(addLetters, timeout);
        } else {
            setTimeout(removeLetters, 1000);
        }
    };
    
    addLetters();
}
writeLetters();
