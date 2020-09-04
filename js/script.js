// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

// functions

// function that return a random number between (min) and (max)
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function that return true if a (num) is inside an (array)
function isInside(array, num) {
  if (array.indexOf(num) != -1) {
    return true;
  } else {
    return false;
  }
}

// function that return an array with (quantityElementGen) different random numbers between (minNumGen) and (maxNumGen)
function arrayRandomNumbers(quantityElementGen, minNumGen, maxNumGen) {

  if (quantityElementGen > (maxNumGen - minNumGen + 1)) {
    return alert("ERROR");
  }

  var myArray = [];

  for (var i = 0; i < quantityElementGen; i++) {
    var tempRandomNumber = randomNumber(minNumGen, maxNumGen);

    while (isInside(myArray, tempRandomNumber)) {
      tempRandomNumber = randomNumber(minNumGen, maxNumGen);
    }

    myArray.push(tempRandomNumber);
  }

  return myArray;
}



// script
