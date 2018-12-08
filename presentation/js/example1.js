function deepCount(a){
	let countLength = 0;
	for (let i = 0; i < a.length; i++) {
		countLength += a[i].length;
	}
 
  console.log(countLength);
}
deepCount([1, 2, ['z']]);