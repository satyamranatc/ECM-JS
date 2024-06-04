// Select the main element where the products will be displayed
let Main = document.querySelector("main");

// Select the dropdown element for filtering products
let Filter = document.getElementById("FilterProducts");

// Initialize an empty variable to store fetched product data
let data = "";

// Asynchronous function to fetch products from the API
async function GetProducts() {
  // Fetch the product data from the API
  data = await fetch("https://fakestoreapi.com/products");
  
  // Convert the response data to JSON format
  data = await data.json();

  // Log each product category to the console (for debugging)
  for (let i of data) {
    console.log(i.category);
  }

  // Display all fetched products initially
  Display(data);
}

// Add an event listener to the filter dropdown to handle changes
Filter.addEventListener("change", (e) => {
  // Initialize a variable to store the filtered data
  let NewData;

  // Filter products based on the selected value in the dropdown
  if (e.target.value == "Fashion") {
    NewData = data.filter(
      (e) => e.category == "women's clothing" || e.category == "men's clothing"
    );
    console.log(NewData); // Log the filtered data to the console (for debugging)
  }
  else if(e.target.value == "All") {
    NewData = data;
    console.log(NewData); // Log all data to the console (for debugging)
  }
  else if(e.target.value == "Electronics") {
    NewData = data.filter((e) => e.category == "electronics");
    console.log(NewData); // Log the filtered data to the console (for debugging)
  }
  else if(e.target.value == "Jewelery") {
    NewData = data.filter((e) => e.category == "jewelery");
    console.log(NewData); // Log the filtered data to the console (for debugging)
  }

  // Display the filtered data
  Display(NewData);
});

// Call the function to fetch and display products when the script runs
GetProducts();

// Function to display the product data on the web page
function Display(data) {
  // Clear the main element's current content
  Main.innerHTML = "";

  // Loop through each product and create its HTML representation
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
