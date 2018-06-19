function checkName() {
	var name1 = document.getElementById("name-one").value.toString();
	var name2 = document.getElementById("name-two").value.toString();

	if(name1 == "" && name2 == "") {
		document.getElementById("results").innerHTML = "Try writing something in.";
		return;
	} else if (name1=="") {
		document.getElementById("results").innerHTML = "First name is missing.";
		return; 
	} else if (name2=="") {
		document.getElementById("results").innerHTML = "Second name is missing.";
		return
	}

	var nameDist1 = checkDistance(name1);
	var nameDist2 = checkDistance(name2);

	var percentage;
	var stringRes;

	if(nameDist1 > nameDist2) {
		var difference = nameDist1 - nameDist2;
		percentage = (difference/nameDist1);
	} else if (nameDist1 < nameDist2) {
		var difference = nameDist2 - nameDist1;
		percentage = difference/nameDist2;
	} else if (nameDist1 == nameDist2) {
		percentage = 1;
	}

	if(percentage <= 0.15) stringRes = "Keep trying, they will like you back, eventually.";
	else if (percentage > 0.15 && percentage <= 0.5) stringRes = "They like you a little bit.";
	else if(percentage > 0.5 && percentage <= 0.75) stringRes = "They really like you.";
	else if (percentage > 0.75) stringRes = "You should get married!";

	document.getElementById("results").style.visibility = "visible";
	document.getElementById("results").innerHTML = "You are " + Math.ceil(percentage*100) + "% compatible. " + stringRes;
	document.getElementById("button-reset").style.visibility = "visible";
}

function checkDistance(name) {
	var nameTotal = getTotal(name);

	return nameTotal;
}

function getTotal(name) {
	var charArray = name.split("");

	var totalValue = 0;;

	//console.log(charArray[0]);

	for(var i = 0; i<charArray.length;i++) {
		if(charArray[i] == 'A' | charArray[i] == 'a') totalValue += 1;
		else if (charArray[i] == 'B' | charArray[i] == 'b') totalValue += 2;
		else if (charArray[i] == 'C' | charArray[i] == 'c') totalValue += 3;
		else if (charArray[i] == 'D' | charArray[i] == 'd') totalValue += 4;
		else if (charArray[i] == 'E' | charArray[i] == 'e') totalValue += 5;
		else if (charArray[i] == 'F' | charArray[i] == 'f') totalValue += 6;
		else if (charArray[i] == 'G' | charArray[i] == 'g') totalValue += 7;
		else if (charArray[i] == 'H' | charArray[i] == 'h') totalValue += 8;
		else if (charArray[i] == 'I' | charArray[i] == 'i') totalValue += 9;
		else if (charArray[i] == 'J' | charArray[i] == 'j') totalValue += 10;
		else if (charArray[i] == 'K' | charArray[i] == 'k') totalValue += 11;
		else if (charArray[i] == 'L' | charArray[i] == 'l') totalValue += 12;
		else if (charArray[i] == 'M' | charArray[i] == 'm') totalValue += 13;
		else if (charArray[i] == 'N' | charArray[i] == 'n') totalValue += 14;
		else if (charArray[i] == 'O' | charArray[i] == 'o') totalValue += 15;
		else if (charArray[i] == 'P' | charArray[i] == 'q') totalValue += 16;
		else if (charArray[i] == 'Q' | charArray[i] == 'q') totalValue += 17;
		else if (charArray[i] == 'R' | charArray[i] == 'r') totalValue += 18;
		else if (charArray[i] == 'S' | charArray[i] == 's') totalValue += 19;
		else if (charArray[i] == 'T' | charArray[i] == 't') totalValue += 20;
		else if (charArray[i] == 'U' | charArray[i] == 'u') totalValue += 21;
		else if (charArray[i] == 'V' | charArray[i] == 'v') totalValue += 22;
		else if (charArray[i] == 'W' | charArray[i] == 'w') totalValue += 23;
		else if (charArray[i] == 'X' | charArray[i] == 'x') totalValue += 24;
		else if (charArray[i] == 'Y' | charArray[i] == 'y') totalValue += 25;
		else if (charArray[i] == 'Z' | charArray[i] == 'z') totalValue += 26;
	}
	console.log(totalValue);
	return totalValue;
}

function restart() {
	document.getElementById("name-one").value = "";
	document.getElementById("name-two").value = "";
	document.getElementById("results").style.visibility = "hidden";
	document.getElementById("button-reset").style.visibility = "hidden";
}