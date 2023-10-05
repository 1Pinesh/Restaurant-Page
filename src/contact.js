const createContact = () => {
  const contentBox = document.getElementById("content");
  // clearing the content inside the content box;
  contentBox.innerHTML = "";

  const contact_con = document.createElement("div");
  contact_con.classList.add("mainContentContact");

  const leftSide = document.createElement("div");
  leftSide.classList.add("leftSide");

  const rightSide = document.createElement("div");

  contact_con.appendChild(leftSide);
  contact_con.appendChild(rightSide);

  // pirate-scroll con
  const pirate_ScrollDiv = document.createElement("div");
  pirate_ScrollDiv.classList.add("pirate-scroll");
  pirate_ScrollDiv.classList.add("contactM");
  // pirate-content Home
  const pirateContent = document.createElement("div");
  pirateContent.classList.add("pirate-content");
  pirateContent.classList.add("contactEf");

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
  pirateContent.appendChild(contact_con);

  leftSide.appendChild(contactCon);
  leftSide.appendChild(createOpening());

  rightSide.appendChild(queryForm());

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

const queryForm = () => {
  const rightContaier = document.createElement("div");

  const mapCon = document.createElement("div");
  mapCon.innerHTML = `<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15647.198948563284!2d142.18926605427757!3d11.349333259589844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67328f3cd57de715%3A0x1bbe64e7a21aa7fc!2sMariana%20Trench!5e0!3m2!1sen!2suk!4v1696527223187!5m2!1sen!2suk" width="600" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  const feedbackCOm = document.createElement("div");
  feedbackCOm.classList.add("FeedBack-Form");

  // Using string literal we can
  feedbackCOm.innerHTML = `<h1>FeedBack</h1>
  <p>Help Us improve our Service. From Issue to even compliment:</p>
  <form action="#" class="QueryForm">
    <label for="name"
      >Name
      <input type="text" name="name" id="name" />
    </label>
    <label for="reason"
      >Reason<input type="text" name="reason" id="reason"
    /></label>
    <label for="more-detail"
      >More Detail
      <textarea
        name="more-detail"
        id="more-detail"
        cols="30"
        rows="10"
      ></textarea>
    </label>
    <div class="submitCOn">
    <input type="submit" name="submit" id="submit" />
    </div>
  </form> `;
  rightContaier.appendChild(mapCon);
  rightContaier.appendChild(feedbackCOm);
  return rightContaier;
};

export default createContact;
// createContact();
