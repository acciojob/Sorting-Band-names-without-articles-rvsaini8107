//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
touristSpots.sort();


const bandsId = document.getElementById("bands");
for(let i=0;i<touristSpots.length;i++){
	let li = document.createElement("li");
	li.innerText=touristSpots[i];
	bandsId.appendChild(li);
	
}