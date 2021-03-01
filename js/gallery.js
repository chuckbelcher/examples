function Gallery(gallery) {
    if (!gallery) {
        throw new Error('No gallery found');
    }

    //select elements
    const images = Array.from(gallery.querySelectorAll('img'));
    const modal = document.querySelector('.modal');
    const prevButton = modal.querySelector('.prev');
    const nextButton = modal.querySelector('.next');
    let currentImage;

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }

    const handleKeyUp = (e) => {
        if (modal.matches('.open')) {
            if(e.key === 'Escape') return closeModal();
            if(e.key === 'ArrowRight') return showNextImage();
            if(e.key === 'ArrowLeft') return showPrevImage();
            if(e.key === 'ArrowLeft') return showPrevImage();
        }
    }


    const openModal = () => {
        //Check to see if modal is open
        if(modal.matches('.open')) {
            console.log('Modal is already open');
            return;
        }
        modal.classList.add('open');

        window.addEventListener('keyup', handleKeyUp);
        nextButton.addEventListener('click', showNextImage);
        prevButton.addEventListener('click', showPrevImage);
    }

    const closeModal = () => {
        modal.classList.remove('open');
        
        //TODO: Add event listener for clicks adn keyboard
        window.removeEventListener('keyup', handleKeyUp);
        nextButton.removeEventListener('click', showNextImage);
        prevButton.removeEventListener('click', showPrevImage);
    }

    const showImage = img => {
        if (!img) {
            console.log('no image to display');
            return;
        }

        //Update modal with info
        modal.querySelector('img').src = img.src;
        modal.querySelector('h2').textContent = img.title;
        modal.querySelector('figure p').textContent = img.dataset.description;
        currentImage = img;
        openModal();
    }

    const showNextImage = () => {
        showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    }

    const showPrevImage = () => {
        showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    }


    //Event Listeners

    images.forEach(image => image.addEventListener('click', (e) => showImage(e.currentTarget)));
    images.forEach(image => {
        image.addEventListener('keyup', e => {
            if(e.key === 'Enter') return showImage(e.currentTarget);
        })
    });
    modal.addEventListener('click', handleOutsideClick);
    
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));