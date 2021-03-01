const Slider = slider => {
    if(!(slider instanceof Element)) {
        throw new Error(`${slider} is not a valide Element`);
    }
    //Create variables for current, previous, and next elements
    let current, prev, next;

    //Get slider elements
    const slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');
    const startSlider = () => {
        current = slider.querySelector('.current') || slides.firstElementChild;
        prev = current.prevElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
    }
    const addClasses = () => {
        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');
    }

    const move = direction => {
        //Strip current classes
        const classesToRemove = ['prev', 'current', 'next'];
        prev.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);

        if (direction === 'back') {
            //assignments in new array in order of presense
            [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
        } else {
            [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];
        }

        addClasses();
    }

    prevButton.addEventListener('click', ()=> move('back'));
    nextButton.addEventListener('click', ()=> move('forward'));

    startSlider();
    addClasses();
}

const mainSlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
