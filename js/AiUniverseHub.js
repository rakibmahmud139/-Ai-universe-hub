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

  Object.values(tools).forEach(tool => {
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
       <div  class="d-flex justify-content-between">
       <div>
       <h4 class="mt-4 ps-4">ChatGPT</h4>
       <p class="ps-4"><i class="fa-regular fa-calendar"> ${tool[0].published_in}</i></p>
       </div>
       <div>
       <button onclick="displayToolDetails('${tool[0].id}')" type="button" class="btn pt-5 text-danger-emphasis" data-bs-toggle="modal" data-bs-target="#toolModal"><i class="fa-solid fa-arrow-right bg-danger-subtle"></i></button>
       </div>
       </div>
        </div>
      </div>

      // card-2

        <div class="col p-4">
        <div class="card h-100 ">
          <img class="p-4 rounded-4" src="${tool[1].image}" class="card-img-top" alt="...">
          <div class="card-body p-4 border-bottom">
            <h4 class="card-title">Features</h4>
            <p class="card-text">1. ${tool[1].features}</p>
            <p class="card-text">1. ${tool[1].features[1]}</p>
            <p class="card-text">1. ${tool[1].features[2]}</p>
          </div>
       <div  class="d-flex justify-content-between">
       <div>
       <h4 class="mt-4 ps-4">ChatGPT</h4>
       <p class="ps-4"><i class="fa-regular fa-calendar"> ${tool[1].published_in}</i></p>
       </div>
       <div>
       <button onclick="displayToolDetails('${tool[1].id}')" type="button" class="btn pt-5 text-danger-emphasis" data-bs-toggle="modal" data-bs-target="#toolModal"><i class="fa-solid fa-arrow-right bg-danger-subtle"></i></button>
       </div>
       </div>
        </div>
      </div>

      // card-3

        <div class="col p-4">
        <div class="card h-100 ">
          <img class="p-4 rounded-4" src="${tool[2].image}" class="card-img-top" alt="...">
          <div class="card-body p-4 border-bottom">
            <h4 class="card-title">Features</h4>
            <p class="card-text">1. ${tool[2].features}</p>
            <p class="card-text">1. ${tool[2].features[1]}</p>
            <p class="card-text">1. ${tool[2].features[2]}</p>
          </div>
       <div  class="d-flex justify-content-between">
       <div>
       <h4 class="mt-4 ps-4">ChatGPT</h4>
       <p class="ps-4"><i class="fa-regular fa-calendar"> ${tool[2].published_in}</i></p>
       </div>
       <div>
       <button onclick="displayToolDetails('${tool[2].id}')" type="button" class="btn pt-5 text-danger-emphasis" data-bs-toggle="modal" data-bs-target="#toolModal"><i class="fa-solid fa-arrow-right bg-danger-subtle"></i></button>
       </div>
       </div>
        </div>
      </div>

      // card-4

        <div class="col p-4">
        <div class="card h-100 ">
          <img class="p-4 rounded-4" src="${tool[3].image}" class="card-img-top" alt="...">
          <div class="card-body p-4 border-bottom">
            <h4 class="card-title">Features</h4>
            <p class="card-text">1. ${tool[3].features}</p>
            <p class="card-text">1. ${tool[3].features[1]}</p>
            <p class="card-text">1. ${tool[3].features[2]}</p>
          </div>
       <div  class="d-flex justify-content-between">
       <div>
       <h4 class="mt-4 ps-4">ChatGPT</h4>
       <p class="ps-4"><i class="fa-regular fa-calendar"> ${tool[3].published_in}</i></p>
       </div>
       <div>
       <button onclick="displayToolDetails('${tool[3].id}')" type="button" class="btn pt-5 text-danger-emphasis" data-bs-toggle="modal" data-bs-target="#toolModal"><i class="fa-solid fa-arrow-right bg-danger-subtle"></i></button>
       </div>
       </div>
        </div>
      </div>

    // card-5

        <div class="col p-4">
        <div class="card h-100 ">
          <img class="p-4 rounded-4" src="${tool[4].image}" class="card-img-top" alt="...">
          <div class="card-body p-4 border-bottom">
            <h4 class="card-title">Features</h4>
            <p class="card-text">1. ${tool[4].features}</p>
            <p class="card-text">1. ${tool[4].features[1]}</p>
            <p class="card-text">1. ${tool[4].features[2]}</p>
          </div>
       <div  class="d-flex justify-content-between">
       <div>
       <h4 class="mt-4 ps-4">ChatGPT</h4>
       <p class="ps-4"><i class="fa-regular fa-calendar"> ${tool[4].published_in}</i></p>
       </div>
       <div>
       <button onclick="displayToolDetails('${tool[4].id}')" type="button" class="btn pt-5 text-danger-emphasis" data-bs-toggle="modal" data-bs-target="#toolModal"><i class="fa-solid fa-arrow-right bg-danger-subtle"></i></button>
       </div>
       </div>
        </div>
      </div>

    // card-6

        <div class="col p-4">
        <div class="card h-100 ">
          <img class="p-4 rounded-4" src="${tool[5].image}" class="card-img-top" alt="...">
          <div class="card-body p-4 border-bottom">
            <h4 class="card-title">Features</h4>
            <p class="card-text">1. ${tool[5].features}</p>
            <p class="card-text">1. ${tool[5].features[1]}</p>
            <p class="card-text">1. ${tool[5].features[2]}</p>
          </div>
       <div  class="d-flex justify-content-between">
       <div>
       <h4 class="mt-4 ps-4">ChatGPT</h4>
       <p class="ps-4"><i class="fa-regular fa-calendar"> ${tool[5].published_in}</i></p>
       </div>
       <div>
       <button onclick="displayToolDetails('${tool[5].id}')" type="button" class="btn pt-5 text-danger-emphasis" data-bs-toggle="modal" data-bs-target="#toolModal"><i class="fa-solid fa-arrow-right bg-danger-subtle"></i></button>
       </div>
       </div>
        </div>
      </div>

    // card-7

        <div class="col p-4">
        <div class="card h-100 ">
          <img class="p-4 rounded-4" src="${tool[6].image}" class="card-img-top" alt="...">
          <div class="card-body p-4 border-bottom">
            <h4 class="card-title">Features</h4>
            <p class="card-text">1. ${tool[6].features}</p>
            <p class="card-text">1. ${tool[6].features[1]}</p>
            <p class="card-text">1. ${tool[6].features[2]}</p>
          </div>
       <div  class="d-flex justify-content-between">
       <div>
       <h4 class="mt-4 ps-4">ChatGPT</h4>
       <p class="ps-4"><i class="fa-regular fa-calendar"> ${tool[6].published_in}</i></p>
       </div>
       <div>
       <button onclick="displayToolDetails('${tool[6].id}')" type="button" class="btn pt-5 text-danger-emphasis" data-bs-toggle="modal" data-bs-target="#toolModal"><i class="fa-solid fa-arrow-right bg-danger-subtle"></i></button>
       </div>
       </div>
        </div>
      </div>

    // card-8

        <div class="col p-4">
        <div class="card h-100 ">
          <img class="p-4 rounded-4" src="${tool[7].image}" class="card-img-top" alt="...">
          <div class="card-body p-4 border-bottom">
            <h4 class="card-title">Features</h4>
            <p class="card-text">1. ${tool[7].features}</p>
            <p class="card-text">1. ${tool[7].features[1]}</p>
            <p class="card-text">1. ${tool[7].features[2]}</p>
          </div>
       <div  class="d-flex justify-content-between">
       <div>
       <h4 class="mt-4 ps-4">ChatGPT</h4>
       <p class="ps-4"><i class="fa-regular fa-calendar"> ${tool[7].published_in}</i></p>
       </div>
       <div>
       <button onclick="displayToolDetails('${tool[7].id}')" type="button" class="btn pt-5 text-danger-emphasis" data-bs-toggle="modal" data-bs-target="#toolModal"><i class="fa-solid fa-arrow-right bg-danger-subtle"></i></button>
       </div>
       </div>
        </div>
      </div>

    // card-9

        <div class="col p-4">
        <div class="card h-100 ">
          <img class="p-4 rounded-4" src="${tool[8].image}" class="card-img-top" alt="...">
          <div class="card-body p-4 border-bottom">
            <h4 class="card-title">Features</h4>
            <p class="card-text">1. ${tool[8].features}</p>
            <p class="card-text">1. ${tool[8].features[1]}</p>
            <p class="card-text">1. ${tool[8].features[2]}</p>
          </div>
       <div  class="d-flex justify-content-between">
       <div>
       <h4 class="mt-4 ps-4">ChatGPT</h4>
       <p class="ps-4"><i class="fa-regular fa-calendar"> ${tool[8].published_in}</i></p>
       </div>
       <div>
       <button onclick="displayToolDetails('${tool[8].id}')" type="button" class="btn pt-5 text-danger-emphasis" data-bs-toggle="modal" data-bs-target="#toolModal"><i class="fa-solid fa-arrow-right bg-danger-subtle"></i></button>
       </div>
       </div>
        </div>
      </div>

    // card-10

        <div class="col p-4">
        <div class="card h-100 ">
          <img class="p-4 rounded-4" src="${tool[9].image}" class="card-img-top" alt="...">
          <div class="card-body p-4 border-bottom">
            <h4 class="card-title">Features</h4>
            <p class="card-text">1. ${tool[9].features}</p>
            <p class="card-text">1. ${tool[9].features[1]}</p>
            <p class="card-text">1. ${tool[9].features[2]}</p>
          </div>
       <div  class="d-flex justify-content-between">
       <div>
       <h4 class="mt-4 ps-4">ChatGPT</h4>
       <p class="ps-4"><i class="fa-regular fa-calendar"> ${tool[9].published_in}</i></p>
       </div>
       <div>
       <button onclick="displayToolDetails('${tool[9].id}')" type="button" class="btn pt-5 text-danger-emphasis" data-bs-toggle="modal" data-bs-target="#toolModal"><i class="fa-solid fa-arrow-right bg-danger-subtle"></i></button>
       </div>
       </div>
        </div>
      </div>
        `;
    dataContainer.appendChild(toolDiv);
  });
}



// modal

const loadToolDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayToolDetails(data.data))
}

const displayToolDetails = tool => {
  const toolDetail = document.getElementById('tool-detail');
  toolDetail.innerHTML = `
  <div class="container d-flex justify-content-around gap-3 rounded-4">
  <div class="border border-danger-subtle bg-danger-subtle rounded-4 p-3">
  <h5 class="mb-4"> ${tool.description}</h5>
  <div class="d-flex justify-content-around mb-4 gap-4">
  <div>
  <h6 class="border bg-light-subtle text-success rounded-4 p-4">$10/ <br> month <br> Basic</h6>
  </div>
  <div>
  <h6 class="border bg-light-subtle text-warning-emphasis rounded-4 p-4 gap-4">$10/ <br> month <br> Basic</h6>
  </div>
  <div>
  <h6 class="border bg-light-subtle text-danger-emphasis rounded-4 p-4 gap-4 ml-3">Contact <br> us <br> Enterprise</h6>
  </div>
  </div>
  <div class="d-flex justify-content-around gap-2">
  <div>
 <h5>Features</h5>
  <ul>
  <li>${tool.features.feature_name}</li>
  <li>${tool.features.feature_name}</li>
  <li>${tool.features.feature_name}</li>
  </ul>
  </div>
  <div>
  <h5>Integrations</h5>
  <ul>
  <li></li>
  <li></li>
  <li></li>
  </ul>
  </div>
  </div>
  </div>
  <div class="border border-danger-subtle rounded-4">
  <img class="p-4" src=" ${tool.image_link}" class="card-img-top" alt="...">
  <h5 class="p-4">Hi, how are you doing today?</h5>
  <p class="p-4">I'm doing well, thank you for asking. How can I assist you today?</p>
  </div>
  </div>

`
}






loadData();