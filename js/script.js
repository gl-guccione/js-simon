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


// function that check if two arrays is equal

function isEqual(array1, array2) {

  if (array1.length != array2.length) {
    return false;
  }

  for (var i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
      return false;
    }
  }
  return true;
}



// function that check how many numbers two arrays have in common

function qntNumbersEqual(array1, array2) {
  var qnt = 0;
  for (var i = 0; i < array1.length; i++) {
    if (array1.indexOf(array2[i]) != -1) {
      qnt++;
    }
  }
  return qnt;
}


// script

// generate 5 random numbers => pcNumbers
var qntNumbers = 5;
var minNumber = 1;
var maxNumber = 25;
var pcNumbers = arrayRandomNumbers(qntNumbers, minNumber, maxNumber);

// alert the 5 numbers to the user

alert("Ciao e benvenuto");
alert("fra poco ti verranno mostrati " + qntNumbers + " numeri casuali compresi tra " + minNumber + " e " + maxNumber);
alert("memorizzali!!\nDopo 30 secondi dovrai inserirli, uno ad uno, nello stesso ordine");

var listNumbers = "";
for (var i = 0; i < qntNumbers; i++) {
  if (i == qntNumbers - 1) {
    listNumbers += pcNumbers[i].toString() + ".";
  } else {
    listNumbers += pcNumbers[i].toString() + ", ";
  }
}

alert("I numeri sono: " + listNumbers);

alert("Via ai 30 secondi");

// after 30 seconds ask the user to insert all the number one by one in the same order
// and save the numbers => array => userNumbers;

setTimeout(function () {

  var userNumbers = [];

  while (userNumbers.length < qntNumbers) {

    var userNumber = parseInt(prompt("Inserisci il primo numero"));

    if (userNumber < minNumber || userNumber > maxNumber) {
      alert("il numero inserito non è compreso tra " + minNumber + " e " + maxNumber);
    } else if (isNaN(userNumber)) {
      alert("non hai inserito un numero!!!");
    } else if (isInside(userNumbers, userNumber)) {
      alert("Hai già inserito questo numero");
    } else {
      userNumbers.push(userNumber);
    }

  }

  console.log(pcNumbers);
  console.log(userNumbers);

  // check if the two arrays are equal
  // if true => alert - hai vinto

  if (isEqual(pcNumbers, userNumbers)) {
    alert("Complimenti, hai vinto!!!");

    // if false check how many correct numbers the user have insert => alert that number
  } else {

    var qntCorrect = qntNumbersEqual(pcNumbers, userNumbers);

    if (qntCorrect == qntNumbers) {
      alert("Benissimo, hai indovinato tutti i numeri, purtroppo però hai sbagliato l'ordine!!!");
    } else if (qntCorrect == (qntNumbers - 1)) {
      alert("Molto bene, le hai prese tutte tranne una");
    } else if (qntCorrect == 0) {
      alert("Sei riuscito a non indovinarne neanche una...");
      alert("La tua memoria fa così pena che probabilmente non ti ricordi nemmeno come ti chiami");
      prompt("come ti chiami?");
    } else if (qntCorrect < (qntNumbers/2)) {
      alert("Continua ad allenarti, ne hai indovinate solo " + qntCorrect);
    } else if (qntCorrect < ((qntNumbers/10) * 8)) {
      alert("Bravo, ci sei quasi, ne hai indovinate " + qntCorrect);
    }
  }


}, 30000);
