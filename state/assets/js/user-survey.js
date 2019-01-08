function userSurvey(){

  var surveykey = 'sn-state-of-nation-user';
  var data = window.localStorage.getItem(surveykey);
  var questions = document.querySelectorAll('[data-role="survey"]');

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
        }
      }

    });

  }


  function setQuestions(questions){
  
    questions.forEach(function(question){
  
      if(question.getAttribute('data-state') !== 'answered'){
  
        var answer = {
          answered: false,
          value: null
        };
  
        var id = question.id;
  
        question.querySelectorAll('a[data-role="survey-answer"]').forEach(function(item){
  
          item.addEventListener('click', function(event){
  
            if(data[id] && data[id].answered){
              return;
            }
  
            event.preventDefault();
            answer.value = item.id;
            answer.answered = true;
            data[id] = answer;
            item.setAttribute('data-selected', true);
            question.setAttribute('data-state', 'answered');
  
            // set answers in local storage
            window.localStorage.setItem(surveykey, JSON.stringify(data));
            nextQuestion()
  
          })
        })
      }
    });
  }

  function nextQuestion(){

    var candidate = document.querySelector('[data-state="answered"] ~ [data-state="unanswered"]');
    if(candidate){
      // move to next question
      setTimeout(function(){
        window.scrollTo(0, (candidate.getBoundingClientRect().top + window.pageYOffset));
        candidate.removeAttribute('data-state');
      }, 500)
    }
  }
 
  
}