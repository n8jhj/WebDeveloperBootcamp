// // Method 1
// document.querySelector('button').addEventListener('click', function(){
//     var bodyColor = document.body.style.background;
//     if(bodyColor === 'purple') {
//         document.body.style.background = 'white';
//     } else {
//         document.body.style.background = 'purple';
//     }
// });

// // Method 2
// var isPurple = false;
// document.querySelector('button').addEventListener('click', function(){
//     if(isPurple) {
//         document.body.style.background = 'white';
//     } else {
//         document.body.style.background = 'purple';
//     }
//     isPurple = !isPurple;
// });

// Method 3
document.querySelector('button').addEventListener('click', function(){
    document.body.classList.toggle('purple');
});
