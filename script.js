let left = document.getElementById('slider-left'),
	leftValue = 0;

left.addEventListener('click', function(event){
	sliderLeft();
});

function sliderLeft(){
	let polosa = document.getElementById('polosa');
	leftValue = leftValue - 130
	if(leftValue < -520){
		leftValue = 0;
	}
	polosa.style.left = leftValue + 'px';
};