function Gallery(gallery) {
    if (!gallery) {
        throw new Error('No gallery found');
    }

    this.gallery = gallery;

    //select elements
    this.images = Array.from(gallery.querySelectorAll('img'));
    this.modal = document.querySelector('.modal');
    this.prevButton = this.modal.querySelector('.prev');
    this.nextButton = this.modal.querySelector('.next');

    //bind methods to instance
    this.showNextImage = this.showNextImage.bind(this);
    this.showPrevImage = this.showPrevImage.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this)

    //Event Listeners

    this.images.forEach(image => image.addEventListener('click', e => this.showImage(e.currentTarget)));
    this.images.forEach(image => {
        image.addEventListener('keyup', e => {
            if(e.key === 'Enter') return this.showImage(e.currentTarget);
        })
    });
    this.modal.addEventListener('click', this.handleOutsideClick);
    
}

Gallery.prototype.handleOutsideClick = function(e) {
    if (e.target === e.currentTarget) {
        this.closeModal();
    }
}

Gallery.prototype.handleKeyUp = function(e) {
    if (this.modal.matches('.open')) {
        if(e.key === 'Escape') return this.closeModal();
        if(e.key === 'ArrowRight') return this.showNextImage();
        if(e.key === 'ArrowLeft') return this.showPrevImage();
        if(e.key === 'ArrowLeft') return this.showPrevImage();
    }
}


Gallery.prototype.openModal = function() {
    //Check to see if modal is open
    if(this.modal.matches('.open')) {
        console.log('Modal is already open');
        return;
    }
    this.modal.classList.add('open');

    window.addEventListener('keyup', this.handleKeyUp);
    this.nextButton.addEventListener('click', this.showNextImage);
    this.prevButton.addEventListener('click', this.showPrevImage);
}

Gallery.prototype.closeModal = function() {
    this.modal.classList.remove('open');
    
    //TODO: Add event listener for clicks adn keyboard
    window.removeEventListener('keyup', this.handleKeyUp);
    this.nextButton.removeEventListener('click', this.showNextImage);
    this.prevButton.removeEventListener('click', this.showPrevImage);
}

Gallery.prototype.showImage = function(img) {
    if (!img) {
        console.log('no image to display');
        return;
    }

    //Update modal with info
    this.modal.querySelector('img').src = img.src;
    this.modal.querySelector('h2').textContent = img.title;
    this.modal.querySelector('figure p').textContent = img.dataset.description;
    this.currentImage = img;
    this.openModal();
}

Gallery.prototype.showNextImage = function() {
    this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);
}

Gallery.prototype.showPrevImage = function() {
    this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
}

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));