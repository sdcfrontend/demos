const btn = document.querySelector('button');
const input = document.querySelector('input');
const div = document.querySelector('div');

input.addEventListener('input', (event) => {});

btn.addEventListener('click', () => {
  const input = document.querySelector('input');
  div.textContent = input.value;
  div.classList.add('fancy-text--on');
  setTimeout(function(){
    div.classList.remove('fancy-text--on');
  }, 2000);
});