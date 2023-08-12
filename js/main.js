const settings = document.querySelectorAll('.setting');
const values = document.querySelectorAll('.settings__value');

settings.forEach((setting, index) => {
    setting.addEventListener('input', () => {
        values[index].textContent = setting.value;
        image.style.filter = `blur(${settings[0].value}px) 
                              contrast(${settings[1].value})
                              grayscale(${settings[2].value}%)
                              hue-rotate(${settings[3].value}deg)
                              invert(${settings[4].value}%)
                              opacity(${settings[5].value}%)
                              saturate(${settings[6].value}%)
                              sepia(${settings[7].value}%)`;
    })
})

const imagesTextChecked = document.querySelector('.images__text_checked');
const imagesInputs = document.querySelector('.images__input');
const imagesText = document.querySelector('.images__text');

imagesTextChecked.addEventListener('click', () => {
    imagesInputs.classList.toggle('dn');
    imagesText.classList.toggle('dn');
})


const imagesSettings = document.querySelectorAll('.images__setting');
const imagesTextInput = document.querySelector('.images__text-input');


imagesTextInput.addEventListener('input', () => {
    imagesText.textContent = imagesTextInput.value;
})

imagesSettings.forEach((setting, index) => {
    setting.addEventListener('input', () => {
        if(index === 0) imagesText.style.top = `${setting.value}%`;
        else if(index === 1) imagesText.style.left = `${setting.value}%`;
        else if(index === 2) imagesText.style.fontSize = `${setting.value}px`;
        else if(index === 3) imagesText.style.transform = `rotate(${setting.value}deg)`;
        else if(index === 4) imagesText.style.color = `${setting.value}`;
    })
})