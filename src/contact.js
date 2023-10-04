const createContact = () => {
  const contentBox = document.getElementById("content");
  // clearing the content inside the content box;
  contentBox.innerHTML = "";

  // pirate-scroll con
  const pirate_ScrollDiv = document.createElement("div");
  pirate_ScrollDiv.classList.add("pirate-scroll");
  // pirate-content Home
  const pirateContent = document.createElement("div");
  pirateContent.classList.add("pirate-content");
  pirateContent.classList.add("home");

  // Creating Contact  Con

  // Appeding
  contentBox.appendChild(pirate_ScrollDiv);
  pirate_ScrollDiv.appendChild(pirateContent);
};
