const formOne = document.querySelector('#Form1'),
  formTwo = document.querySelector('#Form2'),
  formThree = document.querySelector('#Form3'),
  nextOne = document.querySelector('#Next1'),
  nextTwo = document.querySelector('#Next2'),
  backOne = document.querySelector('#Back1'),
  backTwo = document.querySelector('#Back2'),
  progress = document.querySelector('#progress');


nextOne.onclick = function () {
  formOne.style.left = '-450px';
  formTwo.style.left = '40px';
  progress.style.width = '240px';
}
backOne.onclick = function () {
  formTwo.style.left = '450px';
  formOne.style.left = '40px';
  progress.style.width = '120px';
}
nextTwo.onclick = function () {
  formThree.style.left = '40px';
  formTwo.style.left = '-450px';
  progress.style.width = '360px';
}
backTwo.onclick = function () {
  formThree.style.left = '450px';
  formTwo.style.left = '40px';
  progress.style.width = '240px';
}