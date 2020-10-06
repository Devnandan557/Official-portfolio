const API_KEY = '526ce931494e1f887c20f12b58ebbb28';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=526ce931494e1f887c20f12b58ebbb28';
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');

buttonElement.onclick = function(event){
	event.preventDefault();
	const value = inputElement.value;
	const newURL = url + '&query=' + value;
	// console.log(value);

	fetch(newURL)
	.then((res)=>res.json())
	.then((data)=>{
		console.log('Data:', data);
	})
	.catch((error)=>{
		console.log('Error:', error);
	});
	console.log('Value:', value);

	// const newURL = 
}