/////////
// api //
/////////

insertPerson()

async function insertPerson() {
    const baseURL = 'https://fdnd.directus.app'
    const endpoint = '/items/person/306'
    const url = baseURL + endpoint

    let response = await fetch(url)
    console.log(response)

    let person = await response.json()
    console.log(person)

    let personHTML = 
    `<article class="${person.data.name}">
			<h2>${person.data.name}</h2>
			<img src=${person.data.avatar} alt=${person.data.name}>
			<p>${person.data.github_handle}</p>
			<p>${person.data.website}</p>
      <p>${person.data.birthdate}</p>
		</article>`
    
    document.body.insertAdjacentHTML('beforeend', personHTML)
}



//////////////////////////////////////
// achtergrond dots repeat + resize //
//////////////////////////////////////

const wrapper = document.querySelector('.wrapper');

function createDots() {
  const dotSize = 10;                                                       // berekent hoeveel dots er in de lengte + breedte passen incl gap
  const gap = 10;
  const cols = Math.floor(window.innerWidth / (dotSize + gap));
  const rows = Math.floor(window.innerHeight / (dotSize + gap));
  const totalDots = cols * rows;                                            // totale dots op de oppervlakte

  for (let i = 0; i < totalDots; i++) {                                     // for-loop, begin bij 0 en blijf herhalen tot i < totalDots. i++ = verhoog i met 1
    const dot = document.createElement('div');                              // maakt html element
    dot.classList.add('dot');                                               // class voor css
    wrapper.appendChild(dot);                                               // plaats dot binnen wrapper op pagina
  }

  wrapper.style.gridTemplateColumns = `repeat(${cols}, ${dotSize}px)`;      // update grid
  wrapper.style.gridTemplateRows = `repeat(${rows}, ${dotSize}px)`;
}

createDots();

window.addEventListener('resize', createDots);                              // update bij venster resize