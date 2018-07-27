(function () {
  var quizzes = document.querySelectorAll('.sff-quiz-fact');

  quizzes.forEach(function (quiz) {

    var body = quiz.querySelector('.sff-quiz-fact__answers');
    var answers = quiz.querySelectorAll('.sff-quiz-fact__answer');

    var id = quiz.id;
    var local = window.localStorage.getItem(id);

    if (local) {
      local = JSON.parse(local);
      body.setAttribute('data-answered', true);
      answers[local.selected].setAttribute('data-selected', true);
      answers[local.correct].setAttribute('data-correct', true);
      return;
    }

    var answer = quiz.getAttribute('data-id').split("|");
    answer = parseInt(answer[0], 10) / parseInt(answer[1], 10);
    answer = answer - 10;

    answers.forEach(function (item, index) {
      item.onclick = function (e) {
        e.preventDefault();
        body.setAttribute('data-answered', true);
        answers[answer].setAttribute('data-correct', true);
        if (index !== answer) {
          this.setAttribute('data-selected', true)
        }

        window.localStorage.setItem(quiz.id, JSON.stringify({ correct: answer, selected: index }))

      }
    })
  })
})()