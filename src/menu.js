const createMenu = () => {
  // Create contentBox and menuContainer dynamically
  const contentBox = document.getElementById("content");
  // clear the box of existing data
  contentBox.innerHTML = "";

  // pirate-scroll con
  const pirate_ScrollDiv = document.createElement("div");
  pirate_ScrollDiv.classList.add("pirate-scroll");

  // pirate-content Home
  const pirateContent = document.createElement("div");
  pirateContent.classList.add("pirate-content");
  pirateContent.classList.add("home");

  // menuCon
  const menuCon = document.createElement("div");
  menuCon.id = "menu-container";

  // Append elements
  pirate_ScrollDiv.appendChild(pirateContent);
  pirateContent.appendChild(menuCon);
  contentBox.append(pirate_ScrollDiv);

  // Append contentBox to the body or any other container in your HTML
  document.body.appendChild(contentBox);

  async function fetchProductData() {
    // API endpoint URL
    const apiUrl =
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

    try {
      // Make a GET request to the API
      const response = await fetch(apiUrl);

      // Check if the request was successful (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON response
      const productData = await response.json();

      // Check if the expected data structure is present
      if (!productData || !productData.meals) {
        throw new Error("Invalid data structure received from the API");
      }

      // Access information about the meals
      const meals = productData.meals;

      // Loop through each meal and create a menu item
      meals.forEach((meal) => {
        const mealName = meal.strMeal;
        const imageUrl = meal.strMealThumb || "placeholder-image.jpg";

        createMenuItem(mealName, imageUrl);
      });
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error("Error:", error.message);
    }
  }

  function createMenuItem(mealName, imageUrl) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.innerHTML = `
        <img src="${imageUrl}" alt="${mealName}">
        <h2 >${mealName}</h2>
        <div class="button-con"><button id="${mealName}" class="orderBtn">🛒</button></div>
      `;

    const menuContainer = document.getElementById("menu-container");

    menuContainer.appendChild(menuItem);
  }

  fetchProductData();
};

createMenu();
