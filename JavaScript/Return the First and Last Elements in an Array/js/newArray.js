function firstLast(arr) {
	let newArr = [arr.shift(),arr.pop()];
	return newArr;
}
let arr = [1,2,3,4,5];
document.write("<p>Array implemented: ["+arr+"].</p>");
document.write("<p>Function returned new array: ["+firstLast(arr)+"].</p>");
