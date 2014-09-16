var letterCapitalize = function(str) {
	var Arr = str.split(' ');
	console.log(Arr);
	var Arr2 = [];
	for(var i = 0; i < Arr.length; i++) {
		var capWord= Arr[i].charAt(0).toUpperCase() + Arr[i].substring(1); //capitalizes and returns first letter of word		
		Arr2.push(capWord);
	};
	console.log(Arr2.join(' '));
}

