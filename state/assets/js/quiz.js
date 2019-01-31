(function () {

  var quizzes = document.querySelectorAll('[data-role="quiz"]');

  quizzes.forEach(function (quiz) {

    var answered = false;
    var answer = quiz.getAttribute('data-id').replace(/quiz-/, '');
    answer = (parseInt(answer, 10) / 13) - 1;

    var answers = quiz.querySelectorAll('[data-role*="quiz-answer-"]');
    var headline = quiz.querySelector('[data-role="headline"]');

    answers.forEach(function (item, index) {
      item.onclick = function (event) {

        event.preventDefault();
        if (answered) {
          return;
        }
        quiz.setAttribute('data-answered', true);
        if (answer !== index) {
          answers[index].setAttribute('data-correct', false);
          headline.textContent = "Incorrect"
        }

        else {
          answers[index].setAttribute('data-correct', true);

        }
        answered = true;
      }
    })

  });
})();