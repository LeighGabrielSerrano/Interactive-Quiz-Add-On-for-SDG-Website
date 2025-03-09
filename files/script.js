      const questions = [
        { 
          question: "Which is NOT an importance of healthcare?", 
          answer: 0, 
          options: ["To improve Education", "Prevention of Sickness", "Improvement of body", "Prevent Infections"] 
        },
        { 
          question: "What is healthcare?", 
          answer: 1, 
          options: ["An educational purpose", "Efforts made to maintaining a healthy body", "Prevention of pollution", "A recreational hobby"] 
        },
        { 
          question: "Which habit is not healthy?", 
          answer: 3, 
          options: ["Exercising", "Sleeping more than 6 hours a day", "Creating a health plan", "Eating lots of junk food"] 
        },
        { 
          question: "How can SDG 3 be achieved?", 
          answer: 0, 
          options: ["Vaccinations", "Ignoring health issues", "Less exercise", "By being lazy"] 
        },
        { 
          question: "Which is a common cause of death among Filipinos?", 
          answer: 1, 
          options: ["GSWs", "Cancer", "Electrocution", "Falling"] 
        }
      ];

      let question = 0;
      let score = 0;

		document.getElementById("proceed").addEventListener("click", function () {
        document.getElementById("preview").classList.add("hidden");
        document.getElementById("quiz").classList.remove("hidden");
        showQuestion();
      });

      function showQuestion() {
        const questioncont = document.getElementById("questioncont");
        questioncont.innerHTML = "";
        const currentQuestion = questions[question];

        questioncont.innerHTML += `<h3>${currentQuestion.question}</h3>`;

		currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => check(index, button));
        questioncont.appendChild(button);
        });

        document.getElementById("nextBtn").classList.add("hidden");
      }

		function check(selectedIndex, selectedButton) {
        const q = questions[question];
        const buttons = document.querySelectorAll("#questioncont button");

        // Disable all buttons after selection
        buttons.forEach(button => button.disabled = true);

        if (selectedIndex === q.answer) {
          score++;
          selectedButton.classList.add("correct");
        } else {
          selectedButton.classList.add("wrong");
          buttons[q.answer].classList.add("correct"); // Highlight correct answer
        }

        document.getElementById("nextBtn").classList.remove("hidden"); // Show next button
      }

      document.getElementById("nextBtn").addEventListener("click", function () {
        question++;
        if (question < questions.length) {
          showQuestion();
        } else {
          showResult();
        }
      });

      function showResult() {
        document.getElementById("quiz").classList.add("hidden");
        document.getElementById("result").classList.remove("hidden");
        document.getElementById("score").innerText = `${score} / ${questions.length}`;
      }

		document.getElementById("again").addEventListener("click", function () {
        question = 0;
        score = 0;
        document.getElementById("result").classList.add("hidden");
        document.getElementById("preview").classList.remove("hidden");
      });
