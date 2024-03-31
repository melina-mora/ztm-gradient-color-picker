let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.querySelector(".btn-random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	h3.textContent = body.style.background + ";";
}

function randomizeColor(){
	const randomize = () => {
		let n = (Math.random() * 0xfffff * 1000000).toString(16);
  		return '#' + n.slice(0, 6);
	}

	color1.value = randomize();
	color2.value = randomize();

	setGradient();
}

random.addEventListener("click", randomizeColor);

window.addEventListener("load",setGradient);


color1.addEventListener("input", setGradient);


color2.addEventListener("input", setGradient);