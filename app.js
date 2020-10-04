function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices 
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

var questions = [
    new Question ("What is my dream job?", ["coder","astonaut","reality star","vet"], "coder"),
    new Question ('How do I stay fit?', ['cycling','swimming','running','snowbording'], 'running'),
    new Question ('How old am I?', ['20','21','23','24',], '24'),
    new Question ('What was my little kitty called?', ['Mushroom','Sooty','Coco','Rusty'],'Coco'),
    new Question ('What subject was my best GCSE result in?', ['chemistry','biology','art','english'],'biology'),
    new Question ('What is my favourite type of fruit?', ['apples','oranges','mangos','kiwis'], 'mangos'),
    new Question ('What is my masters in?', ['maths','real estate','computer science','physics'],'real estate'),
    new Question ('What laptop do i own?', ['apple mac pro','apple mac','surfacebook pro','surface book'], 'surface book'),
    new Question ('What is my degree in?', ['art and design','psychology','biology','physics'], 'psychology'),
    new Question ('whats my favourite hobby?', ['coding','painting','cycling','running'], 'coding')
];

//create quiz
var quiz = new Quiz(questions);

// display quiz
populate();










