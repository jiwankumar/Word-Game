
const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let play = false;
let newWords = "";
let rnWords = "";
let swords = [
    "Python", "JavaScript", "Java", "C#", "Ruby", "C++", "Swift", "Go", "Kotlin", "PHP", "TypeScript", "Rust", "R", "HTML", "CSS",
    "React", "Angular", "Node.js", "Django", "Flask", "Spring", "ASP.NET", "jQuery", "Bootstrap", "REST", "Dell", "HP", "Lenovo",
    "Asus", "Acer", "Apple", "Microsoft", "Samsung", "Sony", "LG", "Xiaomi", "Google", "OnePlus", "Xiaomi", "Oppo", "Vivo", "Sony",
    "Nokia", "Motorola", "Asus", "Realme", "HTC", "BlackBerry", "Honor", "Assam", "Bihar", "Goa", "Gujarat", "Haryana", "Himachal",
    "Jharkhand", "Karnataka", "Kerala", "Manipur", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tripura", "Red",
    "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White", "Banana", "Orange", "Grapes", "Mango",
    "Pineapple", "Strawberry", "Watermelon", "Peach", "Kiwi"
];

const CreateNewWords = () => {
    const ranNum = Math.floor(Math.random() * swords.length);
    let newTword = swords[ranNum];
    return newTword;
}

const shuffleWord = (word) => {
    let shuffledWord = word.split('').sort(() => Math.random() - 0.5).join('');
    return shuffledWord;
}

btn.addEventListener('click', function() {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = CreateNewWords();
        rnWords = shuffleWord(newWords);
        msg.innerHTML = `Guess The Word : ${rnWords}`;
    } else {
        let tempword = guess.value;
        if (tempword.toUpperCase() === newWords.toUpperCase()) {
            play = false;
            msg.innerHTML = `Awesome! It's Correct. It is: ${newWords}`;
            btn.innerHTML = 'Start Again';
            guess.classList.toggle('hidden');
            guess.value = "";
        } else {
            msg.innerHTML = `Sorry, It's Incorrect. Try Again for word: ${rnWords}`;
        }
    }
});



/*

const msg=document.querySelector('.msg');
const guess=document.querySelector('input');
const btn=document.querySelector('.btn');
let play=false;
let newWords="";
let rnWords="";
let swords=[
    "Python", "JavaScript", "Java", "C#", "Ruby", "C++", "Swift", "Go", "Kotlin", "PHP","TypeScript", "Rust", "R","HTML", "CSS", "React", "Angular", "Node.js", "Django", "Flask", "Spring", "ASP.NET",
    "jQuery", "Bootstrap", "REST","Dell", "HP", "Lenovo", "Asus", "Acer", "Apple", "Microsoft","Samsung",
    "Sony", "LG", "Xiaomi","Google", "OnePlus", "Xiaomi", "Oppo", "Vivo", "Sony","Nokia", "Motorola", "Asus", "Realme", "HTC", "BlackBerry", "Honor", "Assam", "Bihar", "Goa", "Gujarat","Haryana", "Himachal", "Jharkhand", "Karnataka", "Kerala",
    "Manipur","Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tripura","Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White",
    "Banana", "Orange", "Grapes", "Mango", "Pineapple", "Strawberry", "Watermelon", "Peach", "Kiwi"];
const CreateNewWords=()=>
    {
        const ranNum=Math.floor(Math.random()*swords.length);
        // console.log(ranNum);
        let newTword=swords[ranNum];
        // console.log(newTword);
        return  newTword;
    }
    const scrambleWords = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            let temp = arr[i];
            let j = Math.floor(Math.random() * (i + 1));
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
    

btn.addEventListener('click',function()
{
    if(!play)
        {
            play=true;
            btn.innerHTML="Guess"; 
            guess.classList.toggle('hidden');
            newWords=CreateNewWords();
            rnWords=scrambleWords(newWords.split(" ")).join(" ");
            msg.innerHTML=`Guess The Word : ${rnWords}`;
        }
    else
    {
        let tempword=guess.value;
        if(tempword==newWords) 
            {
                play=false;
                msg.innerHTML=`Awesome It's Correct .It is ${newWords}`;
                btn.innerHTML='Start Again';
                guess.classList.toggle('hidden');
                guess.value="";
            }
        else
        {
            msg.innerHTML=`Sorry It's Incorrect .Try Again for word -: ${rnWords}`;
            // btn.innerHTML='Start Again';
            // play=false;
        }
    }
});
*/
