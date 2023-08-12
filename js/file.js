const file = document.querySelector('.images__file');
const imagesContainer = document.querySelector('.images__box');
const image = document.querySelector('.images__img')

file.addEventListener('change', (event) => {
    const selectedFile = event.target.files[0];
    if(selectedFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            image.src = e.target.result;
        }

        reader.readAsDataURL(selectedFile);
    } 
})
