//console.clear();

const toggle = document.querySelectorAll('.toggle_setting');

for(var i = 0; toggle.length > i; i++) {
	toggle[i].addEventListener('click', function() {
		this.classList.toggle('is-on');
	})
}

const radioItem = document.querySelectorAll('.radio__item');

for(var i = 0; radioItem.length > i; i++) {
	radioItem[i].addEventListener('click', function() {
		const siblingItems = this.parentNode.getElementsByClassName('radio__item');
		for(var i = 0; siblingItems.length > i; i++) {
			siblingItems[i].classList.remove('is-active');
		}
		this.classList.toggle('is-active');
	});
}

const sliderInput = document.querySelectorAll('.slider__input');

for(var i = 0; sliderInput.length > i; i++) {
	sliderInput[i].addEventListener('input', function() {
		const valueContainer = this.parentNode.parentNode.querySelector('.slider__value');
		const sliderValue = this.value;
		const maxVal = this.getAttribute('max');
		const posWidth = this.value/maxVal;
		this.parentNode.querySelector('.slider__positive').style.width = (posWidth*100) + '%';
		valueContainer.innerHTML = sliderValue;
	});
}

// Credits
/*const credits = document.createElement('footer');
credits.innerHTML = '<p><small>Designed and inspired by <a href="https://dribbble.com/shots/3922216-Daily-UI-Challenge-007-Settings" target="_blank" class="link--dribbble">devinvm\'s dribbble shot</a></small></p>';
credits.classList = 'credits';
document.body.appendChild(credits);*/