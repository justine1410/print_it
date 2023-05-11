let slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}

]

console.log("longueur du tableau : " + slides.length);

let dot = [
	`
		<div class="dot dot_selected "></div>
		<div class="dot "></div>
		<div class="dot "></div>
		<div class="dot "></div>
	`,
	`
		<div class="dot "></div>
		<div class="dot dot_selected  "></div>
		<div class="dot "></div>
		<div class="dot "></div>
	`,
	`
		<div class="dot"></div>
		<div class="dot "></div>
		<div class="dot dot_selected  "></div>
		<div class="dot "></div>
	`,
	`
		<div class="dot "></div>
		<div class="dot "></div>
		<div class="dot "></div>
		<div class="dot dot_selected "></div>
	`

]


// fonction qui permet de gérer le carousel

// memorise la slide en cours
let numero = 0;
function ChangeSlide(sens){

	// Lors du clique la variable numero et incrementer de 1 ou décrementer de -1
	numero = numero + sens;

		// si numero est supérieur à 0 on le remet à 0 afin de pouvoir boucler sur le tableau
		if(numero > slides.length -1){
			numero = 0;
		}
	
		// Permet de ne pas dépasser la longueur du tableau cela va parcourir les items du tableau
		if(numero < 0){
			numero = slides.length -1;
		}

	// Permet de changer la source de la class banner-img 
	document.querySelector(".banner-img").src = slides[numero].image;
	document.querySelector(".texte").innerHTML= `${slides[numero].tagLine}`;

}

// fonction qui permet de gérer les dot
let bullet = 0;
function ChangeDot(sens){
	bullet = bullet + sens;

	if(bullet > dot.length -1){
		bullet = 0
	}
	if(bullet < 0 ){
		bullet = dot.length -1;
	}
	document.querySelector('.dots').innerHTML = `${dot[bullet]}`
}



// Initilisation de l'affichage par rapport au tableau

let left = document.querySelector(".arrow_left");
let right = document.querySelector('.arrow_right')


left.addEventListener("click",()=>{
	ChangeSlide(-1);
	ChangeDot(-1)
})

right.addEventListener("click",()=>{
	ChangeSlide(1);
	ChangeDot(1)

})