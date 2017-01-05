//Pasapalabra

//function guessTheWord(){

var wordsContainer = [
	{id: "a", word: "alicia", status: false, desc: 'Esta niña viajó por un hollo hasta un lugar Fantástico!!.<br><br>Pista: empieza con la letra "A".'},
	{id: "b", word: "camberra", status: false, desc: 'Es la Capital de Australia.<br><br>Pista: contiene la letra "B".'},
	{id: "c", word: "calabozo", status: false, desc: 'Donde deben terminar los criminales...??.<br><br>Pista: empieza con la letra "C".'},
	{id: "d", word: "danubio", status: false, desc: 'Rio famoso cuyo curso incluye partes de Alemania, Austria, Eslovaquia, Hungría, Croacia, Serbia, Rumania, Bulgaria, Moldavia y Ucrania??.<br><br>Pista: empieza con la letra "D".'},
	{id: "e", word: "jedi", status: false, desc: 'Defensor de la paz de gran poder y sabiduría, seguidor del Lado Luminoso de La Fuerza, que pertenece a una orden mística y monacal.<br><br>Pista: contiene la letra "E".'},
	{id: "f", word: "afro", status: false, desc: 'Tipo de peinado producido naturalmente por la textura de cabello afroide.<br><br>Pista: contiene la letra "F".'},
	{id: "g", word: "golf", status: false,desc: 'Deporte de precisión cuyo objetivo es introducir una bola en los hoyos que están distribuidos en el campo con el menor número de golpes posibles.<br><br>Pista: empieza con la letra "G".'},
	{id: "h", word: "chat", status: false, desc: 'Término proveniente del inglés que en español equivale a charla, también conocido como cibercharla.<br><br>Pista: contiene la letra "H".'},
	{id: "i", word: "india", status: false, desc: 'Es el segundo país con mayor población del mundo.<br><br>Pista: empieza con la letra "I".'},
	{id: "j", word: "ajo", status: false, desc: 'Especie de planta utilizada para espantar vampiros!, perdón malas vibras!.<br><br>Pista: contiene la letra "J".'},
	{id: "k", word: "kilo", status: false, desc: 'Es la unidad de masa del Sistema Internacional de Unidades.<br><br>Pista: empieza con la letra "K".'},
	{id: "l", word: "luke", status: false, desc: 'Nombre de pila del hijo de Darth Vader.<br><br>Pista: empieza con la letra "L".'},
	{id: "m", word: "manzana", status: false, desc: 'Fruto prohibido del Edén.<br><br>Pista: empieza con la letra "M".'},
	{id: "n", word: "neo", status: false, desc: 'Alias del elegido para salvarnos de las máquinas en la saga The Matrix.<br><br>Pista: empieza con la letra "N".'},
	{id: "ñ", word: "niño", status: false, desc: 'Sinónimo de infante.<br><br>Pista: contiene la letra "Ñ".'},
	{id: "o", word: "developer", status: false, desc: 'Desarrollador en inglés.<br><br>Pista: contiene la letra "O".'},
	{id: "p", word: "playstation", status: false, desc: 'Así se llama la consola de juegos de Sony.<br><br>Pista: empieza con la letra "P".'},
	{id: "q", word: "aquiles", status: false, desc: 'Héroe de la Guerra de Troya en la mitología Griega.<br><br>Pista: contiene la letra "Q".'},
	{id: "r", word: "reggae", status: false, desc: 'Género musical desarrollado en Jamaica.<br><br>Pista: empieza con la letra "R".'},
	{id: "s", word: "asia", status: false, desc: 'Es uno de los cinco continentes.<br><br>Pista: contiene la letra "S".'},
	{id: "t", word: "torpe", status: false, desc: 'Antónimo de ágil.<br><br>Pista: empieza con la letra "T".'},
	{id: "u", word: "autor", status: false, desc: 'Es la persona que crea una obra, sea artística, literaria o científica.<br><br>Pista: contiene la letra "U".'},
	{id: "v", word: "volante", status: false, desc: 'Tipo de control de dirección para vehículos terrestres.<br><br>Pista: empieza con la letra "V".'},
	{id: "w", word: "volkswagen", status: false, desc: 'Fabricante de automóviles alemán con sede en Wolfsburgo, Baja Sajonia.<br><br>Pista: contiene la letra "W".'},
	{id: "x", word: "excelente", status: false, desc: 'Antónimo de mediocre.<br><br>Pista: contiene la letra "X".'},
	{id: "y", word: "chucky", status: false, desc: 'Así se llama el muñeco diabólico...<br><br>Pista: contiene la letra "Y".'},
	{id: "z", word: "zapato", status: false, desc: 'Accesorio de ropa para usar en los pies.<br><br>Pista: empieza con la letra "Z".'},
];	

var justLetters = /^[a-zA-Z""ñÑ]*$/;
var timeCheck;
var userWord, countGood, countBad, index, stopCount;

/* Set the variables to their initial values, start the countdown timer and show the correct
containers or boxes. */
function initGame() {
	document.getElementById('score').style.display = "none";
	userWord = "";
    countGood = 0;
	countBad = 0;
	index = 0;
	stopCount = false;
	for (var i = 0; i < wordsContainer.length; i++) {
		wordsContainer[i].status = false;
		document.getElementsByClassName('inner')[i].style.background = "#3399FF";
	}	
	document.getElementsByClassName('game')[1].style.display = "flex";
	document.getElementById('userBox').style.display = "inline-block";
	questionDisplay();
	document.getElementById("passBtn").disabled = false;
	timeCheck = window.setTimeout(countDown, 1000);
}

/* Show the game containers, hide de intro and start the show. 
Check for a valid user Name.*/
function guessTheWord() {
	var userName = document.getElementById('userName').value;
	if (userName === "") {
		alert("Please enter a user name to start the game.");
	} else {
		document.getElementById('intro').style.display = "none";
		document.getElementById('header').style.display = "block";
		document.getElementsByClassName('game')[0].style.display = "inline-block";
		document.getElementById('grid').style.display = "inline-block";
		//document.getElementsByClassName('game')[1].style.display = "flex";
		document.getElementById('ref').innerHTML = "<p><span id='player'>Player:</span><br>" + userName + "</p>";
		initGame();
		//questionDisplay();
		//timeCheck = window.setTimeout(countDown, 1000);
	}
}

// Show the description property content on the selected div
function showDesc(object) {
	document.getElementById('desc').innerHTML = object.desc;
}

/* Show the count down timer in the selected div. If the stopCount flag
 is true just stop the timer. If the seconds variable reach zero
 just restart this variable and move to the next question. */
var seconds = 20;

function countDown() {
	document.getElementById('time').innerHTML = seconds;
	if (stopCount) {
		window.clearTimeout(timeCheck);
	} else if (seconds >= 0) {		
		seconds--;
		window.setTimeout(countDown, 1000);
	} else {
		window.clearTimeout(timeCheck);
		seconds = 20;		
		wordCheck();
		window.setTimeout(countDown, 1000);
	}
}

/* Show the correct question on the div after checking his status 
(related to the pasapalabra option), the index (current element inside 
the objects array) and the total points count (to know when this ends). */

function questionDisplay() {
	if ((countGood + countBad) === 27) {
		stopCount = true;
		alert("That's all!!, now click the button to see your results.");
		document.getElementById('userBox').style.display = "none";
		document.getElementById('score').style.display = "table";
		document.getElementById('result').innerHTML = "Good Answers: " + "<span>" + countGood + "</span><br>" +
			"Bad Answers: " + "<span>" + countBad + "</span>";
	} else if (wordsContainer[index].status) {
		index++;
		questionDisplay();
	} else {
        showDesc(wordsContainer[index]);
        seconds = 20;
        document.getElementById('time').innerHTML = seconds;
	}
}

// Animation of the current letter circle when the OK button is pressed.
function popCircle() {
    var circle = document.getElementById(wordsContainer[index].id);
	circle.classList.add("popup");
	circle.addEventListener("transitionend", function(event) {
		circle.classList.remove("popup")
	});
}

function goodAnswer() {
	document.getElementById(wordsContainer[index].id).style.background = "#008000";
	popCircle();
	playApplause();
	wordsContainer[index].status = true;	
	countGood++;
	document.getElementById("userInput").reset();	
}

function badAnswer() {
	document.getElementById(wordsContainer[index].id).style.background = "red";
    popCircle();
    playGroan();
    wordsContainer[index].status = true;
    countBad++;
	document.getElementById("userInput").reset();
}

function wordCheck() {	
		
	userWord = document.getElementById('userWord').value;
	
	if (!userWord.match(justLetters)) {
		alert("Sorry, only letters alowed in this game, please try again!");
		document.getElementById("userInput").reset();
	} else if (index === wordsContainer.length - 1 && userWord.toLowerCase() === wordsContainer[index].word && countGood + countBad < 26){	
		goodAnswer();
		index = 0;
		alert("Good answer...!!, that was the first round. Now we are going for the last one, think carefully because this time you won't be able to use the 'Pasapalabra' option!");
		document.getElementById("passBtn").disabled = true;
	} else if (index === wordsContainer.length - 1 && countGood + countBad < 26) {      
        badAnswer();
        index = 0;
		alert("Wrong answer...!!, that was the first round. Now we are going for the last one, think carefully because this time you won't be able to use the 'Pasapalabra' option!");
		document.getElementById("passBtn").disabled = true;		
	} else if (userWord.toLowerCase() === wordsContainer[index].word) {		
		goodAnswer();
		index++;
	} else {		
		badAnswer();
		index++;
	} 
	questionDisplay();
}

function next(){	
	if (index >= wordsContainer.length - 1) {
		index = 0;
		alert("That was the first round. Now we are going for the last one and this time you won't be able to use the 'Pasapalabra' option!");
		document.getElementById("passBtn").disabled = true;		
	} else {
		index++;		
	}
	questionDisplay();
}

function stop() {
	stopCount = true;
	document.getElementById('userBox').style.display = "none";
	document.getElementById('score').style.display = "table";
	document.getElementById('result').innerHTML = "Good Answers: " + "<span>" + countGood + "</span><br>" +
			"Bad Answers: " + "<span>" + countBad + "</span>";
}



