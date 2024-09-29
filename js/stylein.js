const sections = document.querySelectorAll('section')
for(const section of sections){
    // console.log(section)
    section.style.border = '2px solid red';
    section.style.paddingLeft = '20px';
    section.style.backgroundColor = 'lightgray';
    section.style.marginBottom = '10px';
    section.style.borderRadius = '15px';
    // section.style.textAlign = 'center';

}
const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'skyblue';

