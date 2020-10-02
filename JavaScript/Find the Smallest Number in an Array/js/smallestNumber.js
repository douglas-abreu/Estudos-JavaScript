function findSmallestNum(arr) {
	let smallest = arr[0];
	for(let i = 0; i <= arr.length; i++){
		smallest > arr[i] ? smallest = arr[i] 
		: smallest;
	}
	return smallest;
}

function orUsingMath(arr){
	return Math.min(...arr);
}

let arr = [1,0,-0.023471,4.12387,123.5];
document.write("<p>Array implemented: ["+arr+"].</p>");
document.write("<p>The smallest number: "+findSmallestNum(arr)+".</p>");

