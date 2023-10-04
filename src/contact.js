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

  // Creating Contact  Con
  const contactCon = document.createElement("div");
  contactCon.classList.add("contacts-con");

  // COntact title

  const contactTitle = document.createElement("h1");
  contactTitle.textContent = "Contact-Us";

  // Contact col
  const contactCOl = document.createElement("div");
  contactCOl.classList.add("contanct-col");

  // COntact card
  const contacts = createContactCard();
  // Appeding
  contentBox.appendChild(pirate_ScrollDiv);
  pirate_ScrollDiv.appendChild(pirateContent);
  pirateContent.appendChild(contactCon);
  contactCon.appendChild(contactTitle);
  contactCon.appendChild(contactCOl);
  for (const card of contacts) {
    contactCOl.appendChild(card);
  }
};

const createContactCard = () => {
  const contact = [];

  for (let i = 0; i < 6; i++) {
    const contactCard = document.createElement("div");
    contactCard.classList.add("contact-card");

    const contactIcon = document.createElement("div");
    contactIcon.classList.add("icon");

    const spanIconProfile = document.createElement("span");
    spanIconProfile.classList.add("material-symbols-outlined");
    spanIconProfile.textContent = "person";

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");

    const cnName = document.createElement("span");
    cnName.textContent = "Cello";

    const cnEmail = document.createElement("span");
    cnEmail.textContent = "cello.staff@baratie.com";

    // Appending
    contactCard.appendChild(contactIcon);
    contactCard.appendChild(contactInfo);

    contactInfo.appendChild(cnName);
    contactInfo.appendChild(cnEmail);

    contactIcon.appendChild(spanIconProfile);

    contact.push(contactCard);
  }
  return contact;
};

createContact();
