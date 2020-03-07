var squares = document.querySelectorAll(".square");

var feedback = document.querySelector(".feedback");
var hard = document.querySelector(".hard");
var easy = document.querySelector(".easy");
var body = document.querySelector("body");
var hard = document.querySelector(".hard"); 4
var header = document.querySelector(".heading");
var resetButton = document.querySelector(".reset");
var gameMode=document.querySelectorAll(".gameMode");
var target = document.querySelector(".displayColor");
var numSqaures=6;
var pickedColor;
var colors =[numSqaures];

// so am assigneng the size of the array to 6 at the begging and i am manipualting using each mode
// also i set the reset button to make the array with a size of numsqaures as well bcs that was my real problem at the moment
// -------------

// this is kind of a virtual array
feedback.textContent="Choose Game Mode";
selectGameMode();
function selectGameMode(){

    
    for(var x=0;x<gameMode.length;x++){
        gameMode[x].addEventListener("click",function(){

            gameMode[0].classList.remove("selected")
            gameMode[1].classList.remove("selected")
                // i am doing this to remove the highligh for all the buttons bcs i wont be able to know which ones are not being clicked
                // then i add the highlight th to selected button to make it more clear and simple

            // this.textContent==="EASY" ? numSqaures=3:numSqaures=6;

            this===gameMode[0] ? numSqaures=3:numSqaures=6;

            this.classList.add("selected");
            // this take alot less time than having 2 fucntions to exeecute for each gameMode selection
            reset();
        })




    }

}



function reset(){
    colors = generateColors(numSqaures);
    pickedColor = pickColor();
    target.textContent = pickedColor;
    feedback.textContent = " ";//clearing up the feedback text
    resetButton.textContent = "Color Game";
    header.style.backgroundColor = "rgb(115, 115, 207)";


   

    for(let x=0;x<squares.length;x++){


        if(colors[x]){
            squares[x].classList.add("add");
            squares[x].classList.remove("remove");

        }
        else{

            squares[x].classList.add("remove");

        }
}
    header.style.backgroundColor="steelblue";
    startGame();


}








// hardMode();

// i am calling hard mode to set it at the begging to 6 colors but that doesnt really mean its 6 all the time

function startGame() {

    resetButton.removeEventListener("click",reset);

    // here i am removing the functionality of the button so the user could not reset the game using the newcolors text

    
    //  this is stopping the functionality of the button after restarting the game
    // so to do that i have to call a function within the adding event listener bcs i have ot provide the name of the function
    // that i want to disable if a click event has happened to that resetButton , if i declared the function inside of the
    // event listner i would not be able to disable bcs i can provide its name within the removeEventListener

    feedback.classList.remove("win");
    for (let x = 0; x < squares.length; x++) {
        squares[x].style.backgroundColor = colors[x];

        squares[x].addEventListener("click", function () {

            var chosen = this.style.backgroundColor;
            // this is used to capture the current color
            console.log(chosen, pickedColor)
            if (chosen === pickedColor) {

                feedback.textContent = "You Have Guessed it Right";
                feedback.classList.add("win");
                header.style.backgroundColor = pickedColor;
                userWin();
                resetButton.textContent = "PlayAgain?";

                resetButton.addEventListener("click", selectGameMode);
                    //generate new colors

                    // change display color to match picked color




                console.log("Classes are Added back")
            }


            else {

                feedback.textContent = "Try Again";
                console.log("Sqaure Removed")
                squares[x].classList.add("hide");
                squares[x].classList.remove("show");

            }


        })


    }


}

function userWin() {
    for (let x = 0; x < squares.length; x++) {
        squares[x].classList.add("show");
        squares[x].classList.remove("hide");

        squares[x].style.backgroundColor = pickedColor;

        feedback.textContent = "You Won"

    }
    resetButton.addEventListener("click",reset);

    // this is restarting the game for the user
}


function generateColors(num) {
    var arr = [];
    // i am creating a empty array in order to fill and return it to colors
    console.log("num is" + num);
    for (let x = 0; x < num; x++) { //dont use a fixed number you idiot
        arr.unshift(randomColor());

        //  am looping 6 times in order to get 6 RGB STRINGS
        // so i am either unshifting or pushing this colors to the Array;
        // and then i am inserting it to the arr before actually returning it


    }

    return arr;
}


function randomColor() {

    //     here am i generating a random number for each RGB Elementw
    // which are red blue and green and then i am inserting it within
    // a string which will later be used at arr[x] then colors[x]

    var r = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    //  math floor returns the approx to integer
    // math random generates a random number

    return "rgb(" + r + ", " + g + ", " + b + ")";

    // css adds spaces after commas so in case of comparison it would only get it right if i do have the same proper spacing after commmas
}


function pickColor() {
    //  this is randomizing the target Color
    // same way as using mathfloors +mathrandoms

    var random = Math.floor(Math.random() * colors.length);
    // math floors get its to neraest integer
    // math randomm gets a random number between 0,1 and then if a multpily by a 6 for ex it would get numbers from 0 to 5.99 it wont reach the 6
    //  then returning a random index of the array colors in order to make it our target

    return colors[random];
    //  now i am returing a color with a random index so the picked color would be different each time

}
























// thats the bad way of doing it 




// function easyMode(){
//     easy.classList.add("selected");
//     hard.classList.remove("selected");
//     numSqaures=3;
//     colors=generateColors(numSqaures);
//     pickedColor=pickColor();
//     target.textContent = pickedColor;

// for(let x=0;x<squares.length;x++){
//     if(colors[x]){
//         squares[x].style.backgroundColor=colors[x];
//         squares[x].classList.add("add");
//         squares[x].classList.remove("remove");

//         // i am removing the remove class bcs i cant use 2 classes one with display block and the other with display none,
//         // so whatever has beeen added first will be pirotized

//     }
//     else{
//         squares[x].classList.add("remove");
//     }

// }
// startGame();

//     console.log("easy");

// }
// function hardMode(){
//     hard.classList.add("selected");
//     easy.classList.remove("selected");
//     console.log("hard");
//     numSqaures=6;
//     colors=generateColors(numSqaures);
//     pickedColor=pickColor();
//     target.textContent = pickedColor;

//     for(let x=0;x<squares.length;x++){
//         if(colors[x]){
//             squares[x].style.backgroundColor=colors[x];
//             squares[x].classList.add("add");
//             squares[x].classList.remove("remove");

//         //            i am removing the remove class bcs i cant use 2 classes one with display block and the other with display none,
//         // so whatever has beeen added first will be pirotized

//         }
//         else{
//             squares[x].classList.add("remove");
//         }
//     }
//     startGame();

//     // these 2 function have beeen simplified at the top

//     }





