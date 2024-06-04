let Main = document.querySelector("main");
let Filter = document.getElementById("FilterProducts");

let data = "";
async function GetProducts() {
  data = await fetch("https://fakestoreapi.com/products");
  data = await data.json();

  for (let i of data) {
    console.log(i.category);
  }

  Display(data);
}

Filter.addEventListener("change", (e) => {
  if (e.target.value == "Fashion") {
    NewData = data.filter(
      (e) => e.category == "women's clothing" || e.category == "men's clothing"
    );
    console.log(NewData);
  }

  else if(e.target.value == "All")
  {
    NewData = data;
    console.log(NewData);
  }
  else if(e.target.value == "Electronics")
    {
      NewData = data.filter((e) => e.category == "electronics");
      console.log(NewData);
    }

  else if(e.target.value == "Jewelery")
  {
    NewData = data.filter((e) => e.category == "jewelery");
    console.log(NewData);
  }
  Display(NewData);
});

GetProducts();

function Display(data) {
  Main.innerHTML = "";
  data.forEach((element) => {
    Main.innerHTML += `
      <div class="ProductCard">
      <img src="${element.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h4 class="card-title">${element.title}</h4>
        <p class="card-text">${element.description}</p>
        <button>Buy Now</button>
      </div>
    </div>
    `;
  });
}
