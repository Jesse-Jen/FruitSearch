const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	if(str.length === 0){
		return results
	}
	let inputLowerCase = str.toLowerCase()
	results = fruits.filter(function(fruit){
		return fruit.toLowerCase().includes(inputLowerCase)
	})
	

	return results;
}

function searchHandler(e) {
	let inputVal = e.target.value
	let results = (search(inputVal))
	showSuggestions(results, inputVal)
	
}

function showSuggestions(results, inputVal) {
	//resetting the suggestions for each input
	suggestions.innerHTML = ''

	//creating and appending li(input) to list
	//add eventlisteners for highlights
	results.forEach(function(val){
	let newLi = document.createElement('li')
	newLi.innerText = val
	newLi.addEventListener('mouseover', addHighlights)
	newLi.addEventListener('mouseout', removeHighLights)
	newLi.addEventListener('click', useSuggestion)
	suggestions.append(newLi)
	})
	//dropdown
	suggestions.style.display = results.length ? 'block' : 'none'
}

function useSuggestion(e) {
	if(e.target.tagName === 'LI'){
		input.value = e.target.innerText
		suggestions.style.display = 'none'
	}
}

function addHighlights(e){
	e.target.classList.add('highlighted')
}

function removeHighLights(e){
	e.target.classList.remove('highlighted')
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);