// let userName = askForName();

// if(!userName){
//     while(!userName){
//         alert("You did not write your name, please write your name");
//         userName = askForName();
//     }

// }

// alert("You are Welcome, " + userName)
// alert("Enjoy your quiz")

//first alert page and next page button
const alertInput = document.getElementById("usernameinput");
let alertNameInput = "";

const nextPageButton = document.getElementById("tonextpage")
nextPageButton.addEventListener('click', () => {
    const modalPage = document.getElementById("modalpagesection")
    modalPage.style.display = "none";
    alertNameInput = alertInput.value;

    const quizPage = document.getElementById("appcontainer");
    quizPage.style.display = "block";

})

//question and answers
const questions = [
    {
        question: "What is JavaScript?",
        answers: [
            { text: "JavaScript is a low-level, compiled programming language primarily used for creating static web pages.", correct: false },
            { text: "JavaScript is used for styling website or web Applications only.", correct: false },
            { text: "JavaScript is a high-level, interpreted programming language primarily used for creating interactive web pages.", correct: true },
            { text: "None of the above", correct: false },
        ]
    },

    {
        question: "What are the data types in JavaScript?",
        answers: [
            { text: "JavaScript has several built-in data types, including numbers, strings, booleans, objects, arrays, and null/undefined.", correct: true },
            { text: "JavaScript has no data types", correct: false },
            { text: "None of the above!", correct: false },
            { text: "JavaScript has four primitive data types: string, number, boolean, and array. It does not have complex data types.", correct: false },
        ]
    },

    // {
    //     question: "What is the difference between '==' and '===' in JavaScript?",
    //     answers: [
    //         { text: "There is no any Difference between them", correct: false },
    //         { text: "'==' is used for strict equality comparison, while '===' is used for loose equality comparison. '==' checks for both value and type equality, while '===' performs type coercion.", correct: false },
    //         { text: "All of the above", correct: false },
    //         { text: "'==' is used for loose equality comparison, while '===' is used for strict equality comparison. '==' performs type coercion, while '===' checks for both value and type equality", correct: true },
    //     ]
    // },

    // {
    //     question: "How do you declare variables in JavaScript?",
    //     answers: [
    //         { text: "You can declare variables using 'function()' ", correct: false },
    //         { text: "You can declare variables using the 'var', 'let', or 'const' keywords. 'var' has function scope, while 'let' and 'const' have block scope.", correct: true },
    //         { text: "No one is Correct", correct: false },
    //         { text: "You can declare variables using the 'var', 'let', or 'const' keywords. 'var' and 'let' have block scope, while 'const' has function scope.", correct: false },
    //     ]
    // },

    // {
    //     question: "What is hoisting in JavaScript?",
    //     answers: [
    //         { text: "Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during the compilation phase.", correct: true },
    //         { text: "Hoisting is a javaScript mechanic where vanilla and fraction are declared", correct: false },
    //         { text: "i don't know", correct: false },
    //         { text: "Hoisting is a JavaScript mechanism where variable and function declarations are moved to the bottom of their scope during the compilation phase.", correct: false },
    //     ]
    // },

    // {
    //     question: "How do you define Functions in javaScript?",
    //     answers: [
    //         { text: "Function can be define using the 'fct()' keyword", correct: false },
    //         { text: "We can define functions using the square root formula", correct: false },
    //         { text: "Functions can be defined using the 'func' keyword followed by the function name, parameters, and function body.", correct: false },
    //         { text: "Functions can be defined using the 'function' keyword followed by the function name, parameters, and function body.", correct: true },
    //     ]
    // },

    // {
    //     question: "What is the difference between 'NULL' and 'UNDEFINED' in javaScript?",
    //     answers: [
    //         { text: "Both 'NULL' and 'UNDEFINED' are the same in JavaScript", correct: false },
    //         { text: "'NULL' is an assignment value that represents no value or an empty object, while 'UNDEFINED' is a type and value that represents an uninitialized variable.", correct: true },
    //         { text: "All is Correct", correct: false },
    //         { text: "'null' is a type and value that represents an uninitialized variable, while 'undefined' is an assignment value that represents no value or an empty object.", correct: false },
    //     ]
    // },

    // {
    //     question: "How do you loop through an array in JavaScript?",
    //     answers: [
    //         { text: "You can use a 'for' loop or 'forEach' method to iterate through an array in JavaScript.", correct: true },
    //         { text: "I don't know", correct: false },
    //         { text: "You can use a 'loop' method to iterate through a variable in javaScript", correct: false },
    //         { text: "You can use a 'while' loop or 'map' method to iterate through an array in JavaScript.", correct: false },
    //     ]
    // },

    // {
    //     question: "What is the purpose of 'this' keyword in JavaScript?",
    //     answers: [
    //         { text: "For Animation", correct: false },
    //         { text: "The 'this' keyword refers to the global object, allowing you to access global properties and methods within a function or method.", correct: false },
    //         { text: "The 'this' keyword refers to the global and current unit object that allow you to access all properties in JavaScript", correct: false },
    //         { text: "The 'this' keyword refers to the current object, allowing you to access its properties and methods within a function or method.", correct: true },
    //     ]
    // },

    // {
    //     question: "How do you handle exceptions in JavaScript?",
    //     answers: [
    //         { text: "Exeptions can be handled using any block statements in javascript", correct: false },
    //         { text: "Exceptions can be handled using try-catch-finally blocks, where you wrap the potentially error-prone code in the 'try' block and handle any exceptions in the 'catch' block.", correct: true },
    //         { text: "Exceptions can be handled using 'if-else' statements, where you check for potential errors and handle them accordingly.", correct: false },
    //         { text: "None of the above", correct: false },
    //     ]
    // },

    // {
    //     question: "What is event delegation in JavaScript?",
    //     answers: [
    //         { text: "Event delegation is a technique where you attach multiple event listeners to each child element and handle events separately. This helps increase code complexity and decreases performance.", correct: false },
    //         { text: "Event is delegation in javaScript", correct: false },
    //         { text: "Event delegation is a technique where you attach a single event listener to a parent element and handle events that occur on its child elements. This helps improve performance and reduces memory consumption.", correct: true },
    //         { text: "Event is also one of the Programming language in javaScript", correct: false },
    //     ]
    // },

    // {
    //     question: "What is the difference between 'let' and 'const' in JavaScript?",
    //     answers: [
    //         { text: "'let' allows you to declare variables with block scope that can be reassigned, while 'const' is used to declare variables with block scope that cannot be reassigned. However, the values of 'const' variables can still be mutated if they are objects or arrays.", correct: true },
    //         { text: "No one is Correct", correct: false },
    //         { text: "'let' cannot be re-assign and 'const' can be re-assign'", correct: false },
    //         { text: "'let' allows you to declare variables with function scope that can be reassigned, while 'const' is used to declare variables with block scope that cannot be reassigned.", correct: false },
    //     ]
    // },

    // {
    //     question: "What is the purpose of the 'bind' method in JavaScript?",
    //     answers: [
    //         { text: "The 'bind' method is used to create a new function with a specified 'this' value and, optionally, initial arguments. It is commonly used to bind a function to a specific object or to curry functions.", correct: true },
    //         { text: "Kingdom javaScript formula", correct: false },
    //         { text: "The 'bind' method is used to create a new function without specifying a 'this' value or initial arguments. It is commonly used to remove context from a function.", correct: false },
    //         { text: "Africa javaScript formula", correct: false },
    //     ]
    // },

    // {
    //     question: "How do you perform asynchronous operations in JavaScript?",
    //     answers: [
    //         { text: "Asynchronous operators", correct: false },
    //         { text: "Asynchronous operations can be performed using synchronous functions. JavaScript does not have built-in asynchronous capabilities.", correct: false },
    //         { text: "Asynchronous operations can be performed using callbacks, promises, or async/await syntax. Callbacks are the traditional approach, promises provide a more elegant solution, and async/await offers a more readable and sequential way to write asynchronous code.", correct: true },
    //         { text: "Africa", correct: false },
    //     ]
    // },

    // {
    //     question: "What is the difference between 'let', 'const', and 'var' in JavaScript?",
    //     answers: [
    //         { text: "Austraila", correct: false },
    //         { text: "'let' and 'const' have function scope and are part of the older syntax, while 'var' has block scope and is the newer way of declaring variables in JavaScript.", correct: false },
    //         { text: "Arctic", correct: false },
    //         { text: "'let' and 'const' have block scope and are part of the newer ES6 syntax, while 'var' has function scope and is the older way of declaring variables in JavaScript.", correct: true },
    //     ]
    // },

    // {
    //     question: "What is the purpose of the 'map' function in JavaScript?",
    //     answers: [
    //         { text: "The 'map' function is used to modify an existing array without creating a new array.", correct: false },
    //         { text: "The 'map' function is used to create a new array by applying a transformation function to each element of an existing array.", correct: true },
    //         { text: "Arctic", correct: false },
    //         { text: "Africa", correct: false },
    //     ]
    // },

    // {
    //     question: "What is a closure in JavaScript?",
    //     answers: [
    //         { text: "Austraila", correct: false },
    //         { text: "A closure is a separate file that contains additional code for a JavaScript program. It allows for modularization and separation of concerns.", correct: false },
    //         { text: "Arctic", correct: false },
    //         { text: "A closure is a combination of a function and the lexical environment within which that function was declared. It allows a function to access variables from an outer function even after the outer function has finished executing.", correct: true },
    //     ]
    // },

    // {
    //     question: "How do you check if a variable is an array in JavaScript?",
    //     answers: [
    //         { text: "Austraila", correct: false },
    //         { text: "You can use the 'Array.isArray()' method to check if a variable is an array.", correct: true },
    //         { text: "Arctic", correct: false },
    //         { text: "There is no built-in method to check if a variable is an array in JavaScript.", correct: false },
    //     ]
    // },


    // {
    //     question: "What is the purpose of the 'typeof' operator in JavaScript?",
    //     answers: [
    //         { text: "The 'typeof' operator is used to convert a variable or expression into a string representation.", correct: false },
    //         { text: "Asia", correct: false },
    //         { text: "The 'typeof' operator is used to determine the type of a variable or expression. It returns a string indicating the type of the operand.", correct: true },
    //         { text: "Africa", correct: false },
    //     ]
    // },

    // {
    //     question: "What are arrow functions in JavaScript?",
    //     answers: [
    //         { text: "Arrow functions are a shorthand syntax for defining functions in JavaScript. They provide a more concise syntax and automatically bind the 'this' value to the surrounding context", correct: true },
    //         { text: "Asia", correct: false },
    //         { text: "Arctic", correct: false },
    //         { text: "Arrow functions are a syntax error in JavaScript and are not supported.", correct: false },
    //     ]
    // },
]

//all html elements
const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

// function askForName() {
//     return prompt("What is your Name?");
// }

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";

    const prevButton = document.getElementById("prev-btn");
    prevButton.addEventListener("click", goBack);
    showQuestion();
}

function goBack() {
    window.history.back();
}


//show question and answers button
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', (event) => selectTheAnswer(event));
    });
}


//next buttons
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


//answre selection
function selectTheAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        // if (button.dataset.correct === "true") {
        //     button.classList.add("correct");
        // }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


//user name and score
function showScore() {
    resetState();
    console.log("name", alertNameInput)
    questionElement.innerHTML = `${alertNameInput} You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


//next button function
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();