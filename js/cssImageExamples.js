brImage = document.querySelector("#border-radius");
brImage.classList="round";
brRadio = document.querySelectorAll('input[name="class"]');

const changeRadioOption = () => {
    for(var i = 0; i < brRadio.length; i++) {
        if(brRadio[i].checked)
            brImage.classList = brRadio[i].value;
      }
};

brRadio.forEach(brRadio => brRadio.addEventListener('click', changeRadioOption));
