var globalTextValue = "";

function getVal() {
    var text = document.getElementById('text');
    globalTextValue = text.value;
    console.log(globalTextValue);
    // return;
}

// var valueFunc = getVal();
// console.log(valueFunc);
console.log(globalTextValue);

var check = 0;
var textarea = document.getElementById("text");
function boldText() {
    if (check === 0) {
        textarea.style.fontWeight = '700';
        check = 1;
    } else {
        textarea.style.fontWeight = '100';
        check = 0;
    }
}

var flag = 0;
function italicText() {
    if (flag === 0) {
        textarea.style.fontStyle = 'italic';
        flag = 1;
    } else {
        textarea.style.fontStyle = 'normal';
        flag = 0;
    }
}

var checker = 0;
function underlineText() {
    if (checker === 0) {
        textarea.style.textDecoration = 'underline';
        checker = 1;
    } else {
        textarea.style.textDecoration = 'none';
        checker = 0;
    }
}
function textLeft() {
        textarea.style.textAlign = 'left';
}
function textCenter() {
        textarea.style.textAlign = 'center';
}
function textRight() {
        textarea.style.textAlign = 'right';
}
function textJustify() {
        textarea.style.textAlign = 'justify';
}
function font_size(){
    var size = document.getElementById('size').value;
    textarea.style.fontSize = `${size}px`;
};

var num = textarea.style.fontSize;;
function inc(){
    var incBtn = document.getElementById('increament');
    textarea.style.fontSize = `${num++}px`;
}
function dec(){
    var incBtn = document.getElementById('increament');
    textarea.style.fontSize = `${num--}px`;
}
var i = 0;
function transformText(){
    if(i === 0){
        textarea.style.textTransform ='uppercase';
        i = 1;
    }
    else{
        textarea.style.textTransform ='lowercase';
        i = 0;
    }
}


var findDiv = document.getElementById("find-div");

function openFind(){
    findDiv.style.left = '0%';
}
function closeFind(){
    findDiv.style.left = '-100%';
}



// FInd code
var findInp = document.getElementById('find-inp');

function findWord() {
    var textarea = document.getElementById('text');
    var searchTerm = findInp.value.trim();

    if (searchTerm === "") {
        alert("Please enter a word to find");
        return;
    }

    var words = textarea.value.split(" ");
    
    for (var i = 0; i < words.length; i++) {
        if (words[i].includes(searchTerm)) {
            words[i] = `<span style="background-color: black; color: white;">${words[i]}</span>`;
        }
    }

    var replacedContent = words.join(" ");

    if (replacedContent === textarea.value) {
        alert("No matches found");
    }

    textarea.value = replacedContent;
}


// function search() {
//     let textarea = document.getElementById("text");
//     let findInput = document.getElementById("find-inp").value;
//     let word = textarea.value.indexOf(findInput);

//     if (word !== -1) {
//         let parts = textarea.value.split(findInput);
//         textarea.value = parts.join(`<span class="highlight"> + findInput + </span>`);
//     } else {
//         alert("Word not found!");
//     }
    
// };