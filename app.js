var yes = document.getElementById("yes");

var no = document.getElementById("no");

var movie = "https://youtu.be/RtoD5B1dfIc";

var homep = document.getElementById("homep");

homep.onclick = () => {
    location.href = "./index.html";
}

function yes() {
    window.open(movie);
}

function no() {
    location.href = "./index.html";
}

var submit = document.getElementById("submit1");

// var submitc = document.getElementById("submitc");

var questions = ["qoone", "qttwo", "qthree", "qfour", "qfive"];

const divanswer = document.getElementById("quesone");

const divans = document.getElementById("divans");




function submit1() {
    if (document.getElementById('answer').checked) {
        divanswer.innerHTML = "This is the Correct Answer";
    } else {
        divanswer.innerHTML = "This is the wrong answer. The answer is  Forcing children to do dangerouswork even if they don't want to";
    }
}

function submit2() {
    if (document.getElementById('answe').checked) {
        divans.innerHTML = "This is the Correct Answer";
    } else {
        divans.innerHTML = "This is the wrong answer.The correct answer is Poverty";
    }
}

function submitc() {
    if (document.getElementById('answ').checked) {
        divan.innerHTML = "This is the Correct Answer";
    } else {
        divan.innerHTML = "This is the wrong answer.The correct answer is Lungs";
    }
}

function submitd() {
    if (document.getElementById('ans').checked) {
        diva.innerHTML = "This is the Correct Answer";
    } else {
        diva.innerHTML = "This is the wrong answer.The correct answer is Strike ";
    }
}

function submite() {
    if (document.getElementById('an').checked) {
        divas.innerHTML = "This is the Correct Answer";
    } else {
        divas.innerHTML = "This is the wrong answer.The correct answer is A group of workers who work together to improve working conditions or get higher wages  ";
    }
}

const thanks = document.getElementById("thanks");
const sorry = document.getElementById("sorry");

function response() {
    if (document.getElementById("thanks").checked) {
        document.getElementById("response").write = "Thanks";
    } else {
        document.getElementById("response").write = "Sorry.Will try to improve the webpage";
    }
}