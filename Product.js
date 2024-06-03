
let Main = document.querySelector('main');
async function GetProducts()
{
    let data = await fetch("https://fakestoreapi.com/products")
    data = await data.json();
    console.log(data)

    Main.innerHTML = "";
    data.forEach(element => {
        Main.innerHTML += `
        <div class="ProductCard">
        <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      `
    });
}

GetProducts();