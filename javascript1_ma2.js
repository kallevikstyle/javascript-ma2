//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function Team() {
	this.sport = 'football';
	this.players = 22;
}

// create an instance of the constructor Team
var avaldsnes = new Team();
console.log(`The new ${avaldsnes.sport} team Avaldsnes had ${avaldsnes.players} players at startup`);

// create a new method on the prototype which will add new players to the team
Team.prototype.newPlayers = function(howManyPlayers) {
	this.players += howManyPlayers;
}

// adding some players to my team
avaldsnes.newPlayers(5);
console.log(`Avaldsnes now has ${avaldsnes.players} players`);


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var playerNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var slicePlayerNumber = playerNumber.slice(4, 5);
console.log(slicePlayerNumber);

//3. Delete the last number in the array that you created above.
playerNumber.pop();
console.log(playerNumber);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
var myText = 'Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.';

var iLoveBananas = function(text) {
	return text
		.replace('Strawberries', 'Bananas')
		.replace('Strawberry', 'Banana')
		.replace('strawberry', 'banana')
		.replace('strawberries', 'bananas');
}

console.log(iLoveBananas(myText));

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var myClubs = ['Tottenham', 'FK Haugesund', 'Avaldsnes', 'Liverpool'];

function carLover() {
	myClubs = ['Audi', 'BMW', 'Volvo', 'Fiat'];
	console.log('Array after button is clicked; ');
	console.log(myClubs);
}

console.log('Array before button is clicked; ');
console.log(myClubs);


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var myFavoritePlayers = [
	{
		firstName: 'Harry',
		lastname: 'Kane',
		position: 'forward'
	},
	{
		firstName: 'Martin',
		lastname: 'Ødegaard',
		position: 'midfielder'
	},
	{
		firstName: 'Harry',
		lastname: 'Winks',
		position: 'midfielder'
	}

];
// map all players named Harry
var harries = myFavoritePlayers.filter(function(harry) {
	return harry.firstName === 'Harry';
});

console.log(harries);


//7. Create a simple function that logs the date.
(function displayDate() {
	let date = new Date();

	console.log(`Today is ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);

})();


