const form = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('p.msg-1');
const messageTwo = document.querySelector('p.msg-2');

form.addEventListener('submit', e => {
  e.preventDefault();
  messageOne.innerText = 'loading...';

  fetch('./weather?address=' + search.value)
    .then( data => data.json().then( d => {
      messageOne.innerText = d.location;
      messageTwo.innerText = d.data;
    }));
});



