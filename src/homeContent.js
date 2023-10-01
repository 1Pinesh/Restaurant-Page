let homeContentCreator = () => {
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

  const intro = document.createElement("h1");
  intro.id = "intro";

  const introContentLiteral = `
    <div id="boat">
      <span class="material-symbols-outlined boat">sailing</span>
    </div>
    The Baratie, a seafaring eatery overseen by Zeff in the Sambas
    Region of East Blue, beckons sailors near the Grand Line's gateway.
    This ocean-bound restaurant promises not just culinary delights but
    also nautical tales on every plate.
    <div id="wave">
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
      <div class="wave wave4"></div>
    </div>
    `;

  intro.innerHTML = introContentLiteral;

  // Appending

  pirate_ScrollDiv.appendChild(pirateContent);

  pirateContent.appendChild(intro);

  contentBox.append(pirate_ScrollDiv);
};

export default homeContentCreator;
