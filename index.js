let display = document.getElementById("display");
let display2 = document.getElementById("display2")

let numbers = Array.from(document.getElementsByClassName("number"));

let operations = Array.from(document.getElementsByClassName("operation"));

let total = 0
let lastOperation

numbers.map((button) => {
	button.addEventListener("click", (e) => {
		//clear if 'C' is clicked
		if(e.target.innerText === 'C') {
			display.innerText = ''
		} else if(e.target.innerText === '.' && display.innerText.includes('.')) {
			return
		} else {display.innerText += e.target.innerText;			
		}
	});
});

// operation buttons(+,- etc.) pressed and display moved to display2
operations.map((symbol) => {
	symbol.addEventListener("click", (e) => {
		console.log('clicked')
		//check for = then do calculation
		if(e.target.innerText === '='){
			calculation(lastOperation)
		} else {
		//move from bottom of screen to top of screen
		display2.innerText = display.innerText;
		//save the number to total
		total= parseFloat(display2.innerText);
		//add the symbol to the top display screen
		display2.innerText += e.target.innerText;
		//clear the lower screen 
		display.innerText = '';	
		//save the clicked symbol to lastOperation
		lastOperation = e.target.innerText;	}
	});
});

//when equals is pressed do the calculation and display total
function calculation(symbol) {
	if( symbol === '+') {
		// changes the value to a decimal number then adds the current value
		total += parseFloat(display.innerText)
		// displays the new total at the top
		display2.innerText = total;
		// clears the display at the bottom
		display.innerText = '';
	} else if ( symbol === '-'){
		total -= parseFloat(display.innerText)
		display2.innerText = total;
		display.innerText = '';
	} else if ( symbol === '×'){
		total *= parseFloat(display.innerText)
		display2.innerText = total;
		display.innerText = '';
	} else if ( symbol === '÷'){
		total /= parseFloat(display.innerText)
		display2.innerText = total;
		display.innerText = '';
	}
}