function handleName(number, evenCallback, oddCallback) {
	if (number % 2 === 0) {
		evenCallback();
	} else {
		oddCallback();
	}
}
function handleEven() {
	console.log('Number is even');
}
function handleOdd() {
	console.log('Number is odd');
}

handleName(8, handleEven, handleOdd);
handleName(5, handleEven, handleOdd);
