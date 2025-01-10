// Quiz Questions
const questions = [
    {
      question: "Where did we first meet?",
      options: ["College", "Cafe", "Park", "Library", "sex shop"],
      answer: "College",
    },
    {
        question: "Which month did we first talk online?",
        options: [ "November", "October", "September", "December"],
        answer: "October",
    },
    {
        question: "Which month did we first talk? hint:bomb",
        options: [ "November", "October", "September", "December"],
        answer: "September",
    },
    {
      question: "In which social media app did we first talk?",
      options: [ "Instagram", "Facebook", "Snapchat", "WhatsApp"],
      answer: "WhatsApp",
    },
    {
      question: "Where did we go consistently after college at the beginning of our time together?",
      options: ["Gym", "Library", "Cafe", "Park"],
      answer: "Gym",
    },
    {
      question: "What was my first gift to you?",
      options: [ "Flowers", "Book","Plushie", "Jewelry", "accessories"],
      answer: "Plushie",
    },
    {
      question: "What was the first meal we ate together?",
      options: [ "Pizza","Ukrainian Snacks", "Burgers", "Pasta"],
      answer: "Ukrainian Snacks",
    },
    {
      question: "Where was our first kiss?",
      options: ["My House", "Park", "Cafe", "Beach"],
      answer: "My House",
    },
    {
      question: "Where did we first travel together?",
      options: [ "Barcelona", "Madrid","Zaragoza", "Paris"],
      answer: "Zaragoza",
    },
  ];
  
  let currentQuestion = 0;
  
  // Start the Quiz
  function startQuiz() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    showQuestion();
  }
  
  // Show the Current Question
  function showQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
  
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
  
    answersElement.innerHTML = ""; // Clear old answers
    q.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      answersElement.appendChild(button);
    });
  }
  
  // Check the Selected Answer
  function checkAnswer(answer) {
    const q = questions[currentQuestion];
    const quizPanel = document.getElementById("quiz");
    const correctPanel = document.getElementById("correct");
  
    if (answer === q.answer) {
      quizPanel.classList.add("hidden");
      correctPanel.classList.remove("hidden");
  
      // Random congratulatory message
      const messages = ["Great, you got it right!", "Correct!", "Well done!"];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      document.getElementById("congrats-message").textContent = randomMessage;
    } else {
      alert("Oops, try again!");
    }
  }
  
  // Go to the Next Question
  function nextQuestion() {
    const correctPanel = document.getElementById("correct");
    const quizPanel = document.getElementById("quiz");
  
    correctPanel.classList.add("hidden");
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      quizPanel.classList.remove("hidden");
      showQuestion();
    } else {
      correctPanel.classList.add("hidden");
      document.getElementById("final").classList.remove("hidden");
    }
  }
  
  // Final Valentine Panel Interaction
  function showGif(choice) {
    alert(`You chose ${choice}! ❤️`);
    
    // Unhide the GIF
    const gifElement = document.getElementById("valentine-gif");
    gifElement.classList.remove("hidden");
  }
  