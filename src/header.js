const createHeader = () => {
  const headerTag = document.createElement("header");
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("restaurant-title");

  const boatSpan = document.createElement("span");
  boatSpan.classList.add("material-symbols-outlined");
  boatSpan.textContent = "sailing";

  const title = document.createElement("h1");

  title.textContent += " The Baratie";
  title.prepend(boatSpan);

  const navBar = document.createElement("nav");
  navBar.id = "menu-bar";
  const ulList = document.createElement("ul");
  const liItem = ["Home", "Menu", "About"];

  liItem.forEach((e) => {
    const li = document.createElement("li");
    li.id = e.toLowerCase();
    li.textContent = e;

    ulList.appendChild(li);
  });

  navBar.append(ulList);

  headerTag.append(headerContainer);
  headerContainer.append(title);
  headerContainer.append(navBar);

  document.body.appendChild(headerContainer);
};

// createHeader();

export default createHeader();
