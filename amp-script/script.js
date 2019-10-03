const btn = document.querySelector('.button');
const input = document.querySelector('.input');
const div = document.querySelector('.fancy-text');

input.addEventListener('input', (event) => {});

btn.addEventListener('click', () => {
  const input = document.querySelector('input');

  // div.textContent = input.value;
  div.classList.add('fancy-text--on');

  setTimeout(function(){
    div.classList.remove('fancy-text--on');
  }, 2000);

  fetch('https://sdcfrontend.github.io/demos/amp-script/data.json').then(function(res){
    return res.json();
  }).then(function(data){
    div.textContent = JSON.stringify(data.mydata);
  });

});