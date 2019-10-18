var seasonSaleContainer = document.getElementsByClassName('seasonSaleContainer');
var border = document.getElementsByClassName('border');


function leftBoxAnim() {
  border[0].style.left = '26.76vw';
  border[0].style.transform = 'rotateY(0deg)'
  setTimeout(function () {
    border[0].style.zIndex = '2';

}, 400);
  setTimeout(function () {
    border[0].style.left = '4.7vw';
    border[0].style.transform = 'rotateY(0deg)'
  }, 1000);
}

function leftTextAnim() {
  seasonSaleContainer[0].style.left = '27.76vw';
  seasonSaleContainer[0].style.transform = 'rotateY(0deg)'
  setTimeout(function () {
    seasonSaleContainer[0].style.zIndex = '4';

}, 400);
  setTimeout(function () {
    seasonSaleContainer[0].style.left = '4.7vw';
    seasonSaleContainer[0].style.transform = 'rotateY(0deg)'
  }, 1000);
}

// lefSideTopTextContainer
var lefSideTopTextContainer = document.getElementsByClassName('lefSideTopTextContainer');

function lefSideTopTextContainerFun() {
  lefSideTopTextContainer[0].style.height = '3.4vw';
}

// shoperContainer anim
var shoperContainer = document.getElementsByClassName('shoperContainer');

function shoperContainerFun() {
  // shoperContainer[0].style.left = '1.6vw';
  shoperContainer[0].style.opacity = '1';
}

// gradButton anim
var gradButton = document.getElementsByClassName('gradButton');

function gradButtonFun() {
  gradButton[0].style.opacity = '1';
}

// nav anim
var nav = document.getElementsByClassName('nav');

function navFun() {
  nav[0].style.right = '0vw';
}

// prodContainer z index
var prodContainer = document.getElementsByClassName('prodContainer');

function prodContainerZindex() {
  setTimeout(function () {
    prodContainer[0].style.zIndex = '4';
  }, 1500);
}

// carousel three
var carouselThree = document.getElementById('carouselThree');
var carThreeLeftArrow = document.getElementById('carThreeLeftArrow');
var carThreeRightArrow = document.getElementById('carThreeRightArrow');
carThreeLeftArrow.addEventListener('click',function(){
  leftArrowThree();
  console.log('do i work?');
});
carThreeRightArrow.addEventListener('click',function(){
  rightArrowThree();
  console.log('do i work?');
});
var moduloThree = 1002;
function leftArrowThree(){
  moduloThree--;
  carMoveThree();
}
function rightArrowThree(){
  moduloThree++;
  carMoveThree();
}
function carMoveThree(){
  if(moduloThree%2 === 0){
    carouselThree.style.left = '0%'
  }
  if(moduloThree%2 === 1){
    carouselThree.style.left = '-50%'
  }
}

// window listeners
// window listeners
// window listeners

window.addEventListener('load',()=>{
  leftBoxAnim();
  leftTextAnim();
  lefSideTopTextContainerFun();
  shoperContainerFun();
  gradButtonFun();
  navFun();
  prodContainerZindex();
});
