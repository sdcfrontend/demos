function userSurvey(){

  var surveykey = 'sn-state-of-nation-user';
  var data = window.localStorage.getItem(surveykey);
  var questions = document.querySelectorAll('[data-role="survey"]');
  var resultbutton = document.querySelector('[data-role="survey-results"]');

  if(!data){
    data = '{}';
  }

  data = JSON.parse(data);

  setInitialState(data);
  nextQuestion(questions);
  setQuestions(questions);

  function setInitialState(data){

    Object.keys(data).forEach(function(key){
      var row = data[key];
      var el;
      var selected;

      if(row.hasOwnProperty('answered') && row.answered === true){
        el = document.querySelector('#'+key);
        if(el){
          el.setAttribute('data-state', 'answered');
          selected = el.querySelector('#' + row.value);
          if(selected){
            selected.setAttribute('data-selected', true);
          }

          el.querySelectorAll('button').forEach(function(item){
            item.removeAttribute('disabled');
          })
        }
      }

    });

  }


  function setQuestions(questions){
  
    questions.forEach(function(question){
  
  
        var answer = {
          answered: false,
          value: null
        };
  
        var id = question.id;
        
        var answers = question.querySelectorAll('button[data-role="survey-answer"]');

        answers.forEach(function(item){
  
          item.addEventListener('click', function(event){
            event.preventDefault();
            answer.value = item.id;
            answer.answered = true;
            data[id] = answer;

            answers.forEach(function(item){
              item.removeAttribute('data-selected');
            });
            item.setAttribute('data-selected', true);
            question.setAttribute('data-state', 'answered');
  
            // set answers in local storage
            window.localStorage.setItem(surveykey, JSON.stringify(data));
            nextQuestion()
  
          })
        })
      
    });
  }

  function checkAnswers(){
    var answered = true;
    questions.forEach(function(item){
      if(item.getAttribute('data-state')!=='answered'){
        answered = false;
      }
    });

    if(answered){
      resultbutton.href = resultbutton.getAttribute('data-href');
      resultbutton.removeAttribute('disabled');
    }
  }

  function nextQuestion(){

    var candidate = document.querySelector('[data-state="answered"] + [data-state="unanswered"]');
    if(candidate){
      // move to next question
      setTimeout(function(){
        window.scrollTo(0, (candidate.getBoundingClientRect().top + window.pageYOffset));
        candidate.removeAttribute('data-state');
        candidate.querySelectorAll('button').forEach(function(item){
          item.removeAttribute('disabled');
        })
      }, 500)
    }

    checkAnswers();

  }

 
  
}