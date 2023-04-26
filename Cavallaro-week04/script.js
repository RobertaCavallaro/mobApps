// In the JavaScript file, write code to read the the <input> and <textarea> Elements after a Submit action.
// Write JavaScript code to create an Object using Object Constructor Notation for a Movie.
// Write JavaScript code to create new instances of a Movie after a Submit action, and store them in an Array.
// Write JavaScript to run after a button is pressed, where a random Movie is selected from the Array and displayed on-screen.

////VARIABLES ///
let formSaveData = document.getElementById("fmSaveData");
let formShowData = document.getElementById("fmShowData");
let elshowingData = document.getElementById("showingData");

//Create an Array to store data, and make it empty//////
let arrayData = [];

//Object Constructor Notation variable
function Movie(name, genre, date, review) {
  this.name = name;
  this.genre = genre;
  this.date = date;
  this.review = review;
}

//FUNCTIONS?////
//get the data
function functionSaveData(event) {
  event.preventDefault();

  //Read the values of the <inputs>
  let valInDataName = document.getElementById("InName").value;
  let valInDataGenre = document.getElementById("InGenre").value;
  let valInDataDate = document.getElementById("InDate").value;
  let valInDataReview = document.getElementById("InReview").value;

  console.log(valInDataName, valInDataGenre, valInDataDate, valInDataReview);

  let tmpData = new Movie(
    valInDataName,
    valInDataGenre,
    valInDataDate,
    valInDataReview
  );
  console.log(tmpData);

  //Add the newest Movie to the Array
  arrayData.push(tmpData);
  console.log(arrayData, arrayData.length);

  //Reset the form to add a new movie
  formSaveData.reset();

  //Pop up
  window.alert("Thanks for submitting!");
}

function functionShowData(event) {
  event.preventDefault();
  if (!arrayData.length) {
    // Array is empty, say a message
    window.alert("Please fill out the form first!");
  } else {
    //First randomly pick a data
    let randomData = Math.floor(Math.random() * arrayData.length);

    // On-screen show submittion
    elShowingData.getElementById("showingData").innerHTML =
      "<p><strong>First Name: </strong>" +
      arrayData[randomData].name +
      "<br><strong>Last Name: </strong>" +
      arrayData[randomData].genre +
      "<br><strong>Email: </strong>" +
      arrayData[randomData].date +
      "<br><strong>Reviews: </strong>" +
      arrayData[randomData].review +
      "</p>";
  }
}

//Using an If..Else (Conditional Statement), check if empty Array (empty collection)

///EVENT LISTENERS////////////
// Listen for clicking Submit on the Save form
formSaveData.addEventListener("submit", function (event) {
  functionSaveData(event);
});
formShowData.addEventListener("submit", function (event) {
  functionSaveData(event);
});
