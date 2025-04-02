const dataJSON = ('/chamber/data/data.json');
async function getData() {
    const response = await fetch(dataJSON);
    const data = await response.json();
    return data;
  }
  
async function buildCards() {
    const allData =  await getData();
    const container = document.getElementById('edo-container');
    allData.forEach(attraction => {
      const cards = document.createElement('div');
      cards.className = 'cards';
      
      cards.innerHTML = `
        <h2>${attraction.title}</h2>
        <figure>
          <img src="${attraction.image}" alt="${attraction.title}" width="300" height="200" loading="lazy">
        </figure>
        <address>${attraction.address}</address>
        <p>${attraction.description}</p>
        <button>Learn more</button>
      `;
      
      container.appendChild(cards);
    });


  }
  
buildCards();