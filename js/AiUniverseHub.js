//  loadData

const loadData = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.data))
}

// display data

const displayData = tools => {
  const dataContainer = document.getElementById('data-container');


  // display All data

  Object.values(tools).forEach( tool => {
    const toolDiv = document.createElement('div')
    toolDiv.classList.add('col')
    toolDiv.innerHTML = `
        <div class="col p-4">
        <div class="card h-100 ">
          <img class="p-4 rounded-4" src="${tool[0].image}" class="card-img-top" alt="...">
          <div class="card-body p-4 border-bottom">
            <h4 class="card-title">Features</h4>
            <p class="card-text">1. ${tool[0].features}</p>
            <p class="card-text">1. ${tool[0].features[1]}</p>
            <p class="card-text">1. ${tool[0].features[2]}</p>
          </div>
          <h4 class="mt-4 ps-4">ChatGPT</h4>
          <p class="ps-4"><i class="fa-regular fa-calendar"> ${tool[0].published_in}</i></p>
        </div>
      </div>
        `;
    dataContainer.appendChild(toolDiv);
  });
}




loadData();