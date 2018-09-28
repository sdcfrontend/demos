(function () {

  var quizzes = document.querySelectorAll('.sf-mini-quiz');

  // use this to decode/encode the answers
  function scramble(text, dir) {
    var a = ['e', 'a', 'r', 'i', 'o', 't', 'n', 's', 'l', ' ', '3', '1'];
    var b = ['∑', '∞', '¿', '∃', '¢', '†', '⅔', '√', '≠', '∂', '=', '@'];

    var code1 = a;
    var code2 = b;

    if (dir === 1) {
      code1 = b;
      code2 = a;
    }

    code1.forEach(function (letter, index) {
      var reg = new RegExp(letter, 'g');
      text = text.replace(reg, code2[index]);
    });

    return text;
  }

  quizzes.forEach(function (quiz) {

    var buttons = quiz.querySelectorAll('.sf-mini-quiz__answer');
    var desc = quiz.querySelector('.sf-mini-quiz__desc');
    var correct = ['Correct!', 'Wrong!'];

    var answer = quiz.getAttribute('data-id').split("|");
    answer = parseInt(answer[0], 10) / parseInt(answer[1], 10);
    answer = answer - 10;

    var answered = false;

    buttons.forEach(function (button, index) {

      button.onclick = function (event) {

        event.preventDefault();

        if (answered) {
          return;
        }

        quiz.setAttribute('data-answered', true);
        this.setAttribute('data-answer', true);

        buttons[answer].setAttribute('data-correct', true);

        if (answer === index) {
          correct = correct[0];
        }
        else {
          correct = correct[1];
        }

        desc.textContent = [correct, scramble(desc.getAttribute('data-text'), 1)].join(' ');

        answered = true;
      }
    })

  });
})()