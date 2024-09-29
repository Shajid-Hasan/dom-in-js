// 1. where to add
const placesList = document.getElementById('places-list');
// 2. what to be added
const li = document.createElement('li');
li.innerText = 'jhaubon';
// 3. add the child
placesList.appendChild(li);

// 1. where to add
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer);

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Doi';
ul.appendChild(li3);
section.appendChild(ul);
mainContainer.appendChild(section);

//  Set inner html directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>Shirt</li>
    <li>Pant</li>
    <li>Genji</li>
</ul>
`
mainContainer.appendChild(sectionDress);






