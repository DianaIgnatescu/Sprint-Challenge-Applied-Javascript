class Carousel {
    constructor (element) {
		// 1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
		this.element = element;
		this.buttonLeft = document.querySelector('.left-button');
		this.buttonRight = document.querySelector('.right-button');
		console.log(this.buttonRight);

		// 2. You will need to grab a reference to all of the images
		const images = Array.from(document.querySelectorAll('img'));
		console.log(images);

		// 3. Create a current index
		const currentIndex = 0;

		// 4. Those buttons are gonna need some click handlers.
		this.buttonLeft.addEventListener('click', () => this.slideLeft());
		this.buttonRight.addEventListener('click', () => this.slideRight());
    }
		//methods
		
		slideLeft() {
			console.log('click left');
		}

		slideRight() {
			console.log('click right');
		}
}

let carousel = document.querySelectorAll('img').forEach(slide => new Carousel(slide));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/