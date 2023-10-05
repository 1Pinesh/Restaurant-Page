const createContact = () => {
  const contentBox = document.getElementById("content");
  // clearing the content inside the content box;
  contentBox.innerHTML = "";

  const rightSide = document.createElement("div");
  rightSide.classList.add("rightSide");

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
  pirateContent.appendChild(rightSide);

  rightSide.appendChild(contactCon);
  rightSide.appendChild(createOpening());

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

const schedule = [
  "Monday: 8:00am- 8:00pm",
  "Tuesday: 8:00am- 8:00pm",
  "Wednesday: 8:00am- 8:00pm",
  "CLOSED",
  "Friday: 8:00am- 8:00pm",
  "Saturday: 8:00am- 8:00pm",
  "Sunday: 8:00am- 8:00pm",
];

const createOpening = () => {
  const openhoursDIv = document.createElement("div");
  openhoursDIv.classList.add("openingHours-Con");

  const openTitle = document.createElement("h1");
  openTitle.textContent = "Opening Hours";

  const timeCon = document.createElement("div");
  timeCon.classList.add("times");

  schedule.forEach((time) => {
    const spanTime = document.createElement("span");
    spanTime.classList.add("time");
    spanTime.textContent = time;
    timeCon.appendChild(spanTime);
  });

  // Appending
  openhoursDIv.appendChild(openTitle);
  openhoursDIv.appendChild(timeCon);
  return openhoursDIv;
};

export default createContact;
// createContact();
