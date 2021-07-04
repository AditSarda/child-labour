var Donate = document.getElementById("Donate");

var link = "https://www.savethechildren.in/donate";

Donate.onclick = () => {
    window.open(link);
}

const video = document.getElementById("video");

video.onclick = () => {
    location.href = "./video.html";
}

const home = document.getElementById("home");

home.onclick = () => {
    location.href = "./index.html";
}

// var button = document.getElementById("qbutton");

var yes = document.getElementById("yes");

var no = document.getElementById("no");

var movie = "https://youtu.be/RtoD5B1dfIc";




yes.onclick = () => {
    window.open(movie);
}

no.onclick = () => {
    location.href = "./index.html";
}

var quiz = document.getElementById("quiz");

// questions.onclick = () => {
//     location.href = "./quiz.html";
// }

// var answer = document.getElementById("answer");
// var nicely = document.getElementById("nicely");
// var love = document.getElementById("love");
// var prison = document.getElementById("prison");

// var response = "This is the correct answer";

// var wrong = "No this is wrong. The answer is  Forcing children to do dangerouswork even if they don't want to ";

var submit = document.getElementById("submit1");

var questions = ["qoone", "qttwo", "qthree", "qfour", "qfive"];

quiz.onclick = () => {
    location.href = "./quiz.html";
}

// var Text = "Total number is";

// if (answer.checked) {
//     return response;
// }

// var qone = document.getElementById("qone");
// qone.onclick = () => {
//     let i;
// }
// qone.onclick = () => {
//     for (let i = 12; i < 125; i + 2) {
//         Text.innerHTML = "Total number is" + i;
//     }
// }

const divanswer = document.getElementById("quesone");




submit1.onclick = () => {
    if (answer.checked) {
        divanswer.innerHTML = "This is the Correct Answer";

        // } else if (nicely.checked) {
        //     document.write("No this is the wrong answer. The answer is  Forcing children to do dangerouswork even if they don't want to  ");
        // } else if (love.checked) {
        //     document.write("No this is the wrong answer. The answer is  Forcing children to do dangerouswork even if they don't want to  ");
        // } else if (prison.checked) {
        //     document.write("No this is the wrong answer. The answer is  Forcing children to do dangerouswork even if they don't want to  ");
        // } else {
        //     document.write("Invalid response")
    } else {
        divanswer.innerHTML = "This is the wrong answer. The answer is  Forcing children to do dangerouswork even if they don't want to";
    }
}