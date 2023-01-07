console.log(
  "1 Слайдер изображений в секции destinations +50 \n2 Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50 \n3 Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25\nИтого:125 "
);

// console.log('ШИРИНА ОКНА',window.innerWidth);


// burger handler

(function () {
  const burgerItem  = document.querySelector('.header_burger');
  const menu = document.querySelector('.navUl_mobail');
  const menuCloseItem = document.querySelectorAll('.header_nav-close_burger');
  const backgrItem = document.querySelectorAll('.bg_mb');

  burgerItem.addEventListener('click', (event) => {
    // console.log(1);
    menu.classList.add('navUl_mobail_active');
    for (let i=0; i<backgrItem.length; i++) {
      backgrItem[i].classList.add('bg_mb_activ');
          };
    event.stopPropagation();
  });

  for (let i=0; i<menuCloseItem.length; i++) {
          menuCloseItem[i].addEventListener('click', () => {
      menu.classList.remove('navUl_mobail_active');
      backgrItem[0].classList.remove('bg_mb_activ');
      backgrItem[1].classList.remove('bg_mb_activ');
      
    });
  };

document.addEventListener('click', (e) => {
  const click = e.composedPath().includes(menu);
  if ( !click ) {
    menu.classList.remove('navUl_mobail_active');
    for (let i=0; i<backgrItem.length; i++) {
     backgrItem[i].classList.remove('bg_mb_activ');
   };
  }
});
}());


// ЕДИНОРАЗОВОЕ ОБНОВЛЕНИЕ СТРАНИЦЫ

window.onresize = function(event) {
  if (document.documentElement.clientWidth > 0 && document.documentElement.clientWidth <= 390) {
    location.reload();
  } else if(document.documentElement.clientWidth > 390 && document.documentElement.clientWidth <= 1440) {
    location.reload();

}
};


// 



//  SLADER START


if (window.innerWidth <= 390) {
  // console.log('ШИРИНА ОКНА ПРОВЕРКА',window.innerWidth);
  // location.reload();


let witdthImgSmall = document.querySelector('.destinations_img').clientWidth;
// console.log('witdthImgSmall',witdthImgSmall);

let offset = 0; // смещение от левого края
const autolayoutSmall = document.querySelector('.autolayout');

let boll = document.getElementsByClassName('boll');
// console.log('bolls', boll);

let indexboll = 0;

boll[indexboll].classList.add('boll_active');

const leftvector = document.querySelector('.left_vector');
// leftvector.classList.add('left_vector_notactiv');


const rigthvector = document.querySelector('.rigth_vector');
rigthvector.classList.add('rigth_vector_activ');


document.querySelector('.rigth_vector').addEventListener('click', function(){
   
  if (offset > witdthImgSmall * 2) {
 
    console.log(1, offset);
    return offset;
  } else {
  offset = offset + witdthImgSmall + 15;
    autolayoutSmall.style.left = -offset + 'px';
    console.log(2, offset);
    indexboll++;
    boll[indexboll].classList.add('boll_active');
    boll[indexboll-1].classList.remove('boll_active');
    leftvector.classList.add('left_vector_activ');

    if (indexboll === 2) {
      rigthvector.classList.remove('rigth_vector_activ');
    }
   
  }
  
});


document.querySelector('.left_vector').addEventListener('click', function(){
      
  if (offset < witdthImgSmall) {
    console.log(3, offset);

    
    return offset;
  } else {
offset = offset - witdthImgSmall - 15;
    console.log(4, offset);
     autolayoutSmall.style.left = -offset + 'px';
     indexboll--;
    boll[indexboll].classList.add('boll_active');
    boll[indexboll+1].classList.remove('boll_active');

    if (indexboll === 0) {
      leftvector.classList.remove('left_vector_activ');
      rigthvector.classList.add('rigth_vector_activ');
    }
    
  }
 
});

};
//  SLADER END


//  SLADER START DESCTOP

// let witdthImgBig = document.querySelector('.destinations_img_big').clientWidth;
// let j = 0;

if (window.innerWidth > 390) {

  // console.log('ШИРИНА ОКНА ПРОВЕРКА',window.innerWidth);

  // for (j; j<2; j++) {
  //     location.reload();

  // }


let witdthImgBig = 800;
// console.log('witdthImgBig', witdthImgBig);

offsetBig = 860; // смещение от левого края
const autolayoutBig = document.querySelector('.autolayout');

let boll = document.getElementsByClassName('boll')
// console.log('bolls', boll);

let indexbollBig = 1;

boll[indexbollBig].classList.add('boll_active');
// boll[indexboll-1].classList.remove('boll_active');
// boll[indexboll+1].classList.remove('boll_active');


const choiceЗictures = document.querySelectorAll('.destinations_img_big');
// console.log('choiceЗictures', choiceЗictures);


for (let i=0; i<choiceЗictures.length; i++) {

  choiceЗictures[i].addEventListener('click', () => {

// console.log('i pic = ', i);
boll[i].classList.add('boll_active');

if (boll[i+1]) {
  boll[i+1].classList.remove('boll_active');
};

if (boll[i-1]) {
  boll[i-1].classList.remove('boll_active');
}


// boll[i+1].classList.remove('boll_active');
autolayoutBig.style.left = 320 -(offsetBig * i) + 'px';

});
};


};

//  SLADER START DESCTOP





// let h2_1marBot = document.querySelector('#h2_1');
// h2_1marBot.style.marginBottom = 54 + 'px'; 


// start LOGIN


// let countSing = 0;

const acclink = document.querySelector('.acc_link_reg');
const acclink1 = document.querySelector('.acc_link_sing');
const displayNone = document.querySelectorAll('.display_none');
const accvalue = document.querySelector('.acc_value');
// console.log(4, displayNone);
// let linkLogper= document.getElementById("linkLog").innerHTML;



// if (countSing === 0) {
acclink.addEventListener('click', () => {
  // console.log(10, countSing);
    document.getElementById("h2_1").textContent = "Create account";
    // console.log(20, displayNone);
    
    for (let i = 0; i < displayNone.length; i++) {
    displayNone[i].classList.add('display_none_active');
    // console.log(26, i);
    };
    // document.getElementById("linkLog").innerHTML = "Log in";
    document.getElementById("SingButton").textContent = "Sign Up";
    accvalue.textContent = "Already have an account?";

    // countSing = 1;
    // console.log(28, countSing);
    acclink1.classList.remove('display_none_active');
    acclink.classList.add('display_none_active');

  });
// }


// if (countSing === 0) {
  acclink1.addEventListener('click', () => {

    // console.log(30, countSing);
        document.getElementById("h2_1").textContent = "Log in to your account";
        
      for (let i = 0; i < displayNone.length; i++) {
        displayNone[i].classList.remove('display_none_active');
        // console.log(45, displayNone);
        // console.log(47, i);
        };
        // document.getElementById("linkLog").innerHTML = "Register";
        document.getElementById("SingButton").textContent = "Sign In";
        // countSing = 0;
        acclink1.classList.add('display_none_active');
        acclink.classList.remove('display_none_active');
        accvalue.textContent = "Don’t have an account?";
    });
  // }



  // alert

  // console.log(document.getElementById("e_mail").value);

  document.querySelector('.getdatabutton').onclick = submit;
  // let zxcv = '';
function submit() {
  // console.log(55, document.getElementById("email").value);
  let zxcv = document.getElementById("email").value;
  let asdf = document.getElementById("password").value; 

  // console.log(59, zxcv);
    alert(`e-mail is: ${zxcv} password is: ${asdf}`);
};





// END LOGIN

// Выскакивание LOGIN Start

         
    
(function () {

  const loginPopStart  = document.querySelectorAll('.login_pop_start');
  const loginPopupWrapper = document.querySelector('.login_popup_wrapper');
  const contLogin = document.querySelector('.contLogin');

for (let i=0; i < loginPopStart.length; i++) {

  loginPopStart[i].addEventListener('click', (event) => {

    if (event.target.classList.contains('login_pop_start')) {
    loginPopupWrapper.classList.toggle('login_popup_wrapper_visible');
    contLogin.classList.toggle('contLogin_visible');
             };

       });
    };

}());
  

  
  
  // const menu = document.querySelector('.login_popup_wrapper');

  


      
    // loginPopupWrapper.classList.toggle('login_popup_wrapper_visible');
    // contLogin.classList.toggle('contLogin_visible');

    // loginPopupWrapperVisibl = document.querySelector('.login_popup_wrapper_visible');
    // alert(10);
    // alert(loginPopupWrapperVisibl);

// if (loginPopupWrapperVisibl) {
// // alert(2);

// };
  // });
    
  // };


// }());



// document.addEventListener('click', (e) => {

//   if (e.target.classList.contains(login_pop_start)){

//   // alert(e);
//     click1 = e.composedPath().includes(loginPopupWrapperVisibl);
//     if (!click1) {
//       setTimeout(() => alert(55),500) ;
//       // loginPopupWrapper.classList.remove('login_popup_wrapper_visible');
//       // contLogin.classList.remove('contLogin_visible');
//     } else {

//       setTimeout(() => alert(66),500) ;

//     };
//   };
//   });





// Выскакивание LOGIN End


// document.addEventListener('click', (e) => {
//   const click = e.composedPath().includes(menu);
//   if ( !click ) {
//     menu.classList.remove('navUl_mobail_active');
//     for (let i=0; i<backgrItem.length; i++) {
//      backgrItem[i].classList.remove('bg_mb_activ');
//    };
//   }
// });



// // Выскакивание LOGIN Start

// let click1;
// let loginPopupWrapperVisibl;


//     function toggleLoginPopup(event) {
//       if (event.target.classList.contains('modal-toggle')) {
//         loginPopup.classList.toggle('popup-visible');
//       }
//     }



// (function () {
  

  
//   const loginPopStart  = document.querySelectorAll('.login_pop_start');
//   const loginPopupWrapper = document.querySelector('.login_popup_wrapper');
//   const contLogin = document.querySelector('.contLogin');
//   // const menu = document.querySelector('.login_popup_wrapper');

//   for (let i=0; i < loginPopStart.length; i++) {

//   loginPopStart[i].addEventListener('click', (event) => {







      
//     // loginPopupWrapper.classList.toggle('login_popup_wrapper_visible');
//     // contLogin.classList.toggle('contLogin_visible');

//     // loginPopupWrapperVisibl = document.querySelector('.login_popup_wrapper_visible');
//     // alert(10);
//     // alert(loginPopupWrapperVisibl);

// // if (loginPopupWrapperVisibl) {
// // // alert(2);

// // };
//   });
    
//   };


// }());

