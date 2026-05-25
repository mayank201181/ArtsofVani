const artworks = [
  {
    title: "Smiling Character",
    date: "May 2026",
    image: "assets/artwork/smiling-character.jpg",
    alt: "A smiling character drawn in black marker on lined paper"
  },
  {
    title: "Playful Creature",
    date: "May 2026",
    image: "assets/artwork/playful-creature.jpg",
    alt: "A playful creature drawn in black marker on lined paper"
  },
  {
    title: "Brown Character",
    date: "May 2026",
    image: "assets/artwork/brown-character.jpg",
    alt: "A brown rounded character with black hair-like strokes"
  }
];

const chalisaPages = [
  { title: "Page 01", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image0.jpeg", alt: "Vani Hanuman Chalisa flip book page 01" },
  { title: "Page 02", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image1.jpeg", alt: "Vani Hanuman Chalisa flip book page 02" },
  { title: "Page 03", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image2.jpeg", alt: "Vani Hanuman Chalisa flip book page 03" },
  { title: "Page 04", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image3.jpeg", alt: "Vani Hanuman Chalisa flip book page 04" },
  { title: "Page 05", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image4.jpeg", alt: "Vani Hanuman Chalisa flip book page 05" },
  { title: "Page 06", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image6.jpeg", alt: "Vani Hanuman Chalisa flip book page 06" },
  { title: "Page 07", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image7.jpeg", alt: "Vani Hanuman Chalisa flip book page 07" },
  { title: "Page 08", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image8.jpeg", alt: "Vani Hanuman Chalisa flip book page 08" },
  { title: "Page 09", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image9.jpeg", alt: "Vani Hanuman Chalisa flip book page 09" },
  { title: "Page 10", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image10.jpeg", alt: "Vani Hanuman Chalisa flip book page 10" },
  { title: "Page 11", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image11.jpeg", alt: "Vani Hanuman Chalisa flip book page 11" },
  { title: "Page 12", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image12.jpeg", alt: "Vani Hanuman Chalisa flip book page 12" },
  { title: "Page 13", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image13.jpeg", alt: "Vani Hanuman Chalisa flip book page 13" },
  { title: "Page 14", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image14.jpeg", alt: "Vani Hanuman Chalisa flip book page 14" },
  { title: "Page 15", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image15.jpeg", alt: "Vani Hanuman Chalisa flip book page 15" },
  { title: "Page 16", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image16.jpeg", alt: "Vani Hanuman Chalisa flip book page 16" },
  { title: "Page 17", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image17.jpeg", alt: "Vani Hanuman Chalisa flip book page 17" },
  { title: "Page 18", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image18.jpeg", alt: "Vani Hanuman Chalisa flip book page 18" },
  { title: "Page 19", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image19.jpeg", alt: "Vani Hanuman Chalisa flip book page 19" },
  { title: "Page 20", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image20.jpeg", alt: "Vani Hanuman Chalisa flip book page 20" },
  { title: "Page 21", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image21.jpeg", alt: "Vani Hanuman Chalisa flip book page 21" },
  { title: "Page 22", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image22.jpeg", alt: "Vani Hanuman Chalisa flip book page 22" },
  { title: "Page 23", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image23.jpeg", alt: "Vani Hanuman Chalisa flip book page 23" },
  { title: "Page 24", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image24.jpeg", alt: "Vani Hanuman Chalisa flip book page 24" },
  { title: "Page 25", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image25.jpeg", alt: "Vani Hanuman Chalisa flip book page 25" },
  { title: "Page 26", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image26.jpeg", alt: "Vani Hanuman Chalisa flip book page 26" },
  { title: "Page 27", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image27.jpeg", alt: "Vani Hanuman Chalisa flip book page 27" },
  { title: "Page 28", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image28.jpeg", alt: "Vani Hanuman Chalisa flip book page 28" },
  { title: "Page 29", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image29.jpeg", alt: "Vani Hanuman Chalisa flip book page 29" },
  { title: "Page 30", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image30.jpeg", alt: "Vani Hanuman Chalisa flip book page 30" },
  { title: "Page 31", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image31.jpeg", alt: "Vani Hanuman Chalisa flip book page 31" },
  { title: "Page 32", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image32.jpeg", alt: "Vani Hanuman Chalisa flip book page 32" },
  { title: "Page 33", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image33.jpeg", alt: "Vani Hanuman Chalisa flip book page 33" },
  { title: "Page 34", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image34.jpeg", alt: "Vani Hanuman Chalisa flip book page 34" },
  { title: "Page 35", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image35.jpeg", alt: "Vani Hanuman Chalisa flip book page 35" },
  { title: "Page 36", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image36.jpeg", alt: "Vani Hanuman Chalisa flip book page 36" },
  { title: "Page 37", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image37.jpeg", alt: "Vani Hanuman Chalisa flip book page 37" },
  { title: "Page 38", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image38.jpeg", alt: "Vani Hanuman Chalisa flip book page 38" },
  { title: "Page 39", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image39.jpeg", alt: "Vani Hanuman Chalisa flip book page 39" },
  { title: "Page 40", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image40.jpeg", alt: "Vani Hanuman Chalisa flip book page 40" },
  { title: "Page 41", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image41.jpeg", alt: "Vani Hanuman Chalisa flip book page 41" },
  { title: "Page 42", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image42.jpeg", alt: "Vani Hanuman Chalisa flip book page 42" },
  { title: "Page 43", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image43.jpeg", alt: "Vani Hanuman Chalisa flip book page 43" },
  { title: "Page 44", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image44.jpeg", alt: "Vani Hanuman Chalisa flip book page 44" },
  { title: "Page 45", note: "Hanuman Chalisa flip book", image: "assets/hanuman-chalisa/image45.jpeg", alt: "Vani Hanuman Chalisa flip book page 45" }
];

const galleryGrid = document.querySelector("#galleryGrid");
const dialog = document.querySelector("#artDialog");
const dialogImage = document.querySelector("#dialogImage");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogMeta = document.querySelector("#dialogMeta");
const closeDialog = document.querySelector("#closeDialog");
const book = document.querySelector("#book");
const previousPage = document.querySelector("#previousPage");
const nextPage = document.querySelector("#nextPage");
const bookCounter = document.querySelector("#bookCounter");
const pageDots = document.querySelector("#pageDots");

let currentSpread = 0;

function openArtwork(artwork) {
  dialogImage.src = artwork.image;
  dialogImage.alt = artwork.alt;
  dialogTitle.textContent = artwork.title;
  dialogMeta.textContent = artwork.date;
  dialog.showModal();
}

function renderGallery() {
  artworks.forEach((artwork) => {
    const card = document.createElement("button");
    card.className = "art-card";
    card.type = "button";
    card.innerHTML = `
      <img src="${artwork.image}" alt="${artwork.alt}">
      <span>
        <h3>${artwork.title}</h3>
        <p>${artwork.date}</p>
      </span>
    `;
    card.addEventListener("click", () => openArtwork(artwork));
    galleryGrid.append(card);
  });
}

function createBookPage(page, index) {
  const pageElement = document.createElement("section");
  pageElement.className = `book-page${page.image ? "" : " empty-page"}`;
  pageElement.setAttribute("aria-label", `Page ${index + 1}`);

  if (page.image) {
    pageElement.innerHTML = `
      <img src="${page.image}" alt="${page.alt}">
      <span>
        <h3>${page.title}</h3>
        <p>${page.note}</p>
      </span>
    `;
    return pageElement;
  }

  pageElement.innerHTML = `
    <strong>${page.title}</strong>
    <p>${page.note}</p>
  `;
  return pageElement;
}

function renderDots(totalSpreads) {
  pageDots.innerHTML = "";

  for (let index = 0; index < totalSpreads; index += 1) {
    const dot = document.createElement("button");
    dot.className = `dot${index === currentSpread ? " active" : ""}`;
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to spread ${index + 1}`);
    dot.addEventListener("click", () => {
      currentSpread = index;
      renderBook();
    });
    pageDots.append(dot);
  }
}

function renderBook() {
  const totalSpreads = Math.ceil(chalisaPages.length / 2);
  const firstPageIndex = currentSpread * 2;
  const visiblePages = chalisaPages.slice(firstPageIndex, firstPageIndex + 2);

  book.innerHTML = "";
  visiblePages.forEach((page, index) => {
    book.append(createBookPage(page, firstPageIndex + index));
  });

  if (visiblePages.length === 1) {
    book.append(createBookPage({ title: "", note: "", image: "", alt: "" }, firstPageIndex + 1));
  }

  previousPage.disabled = currentSpread === 0;
  nextPage.disabled = currentSpread === totalSpreads - 1;
  bookCounter.textContent = `Spread ${currentSpread + 1} of ${totalSpreads}`;
  renderDots(totalSpreads);
}

previousPage.addEventListener("click", () => {
  currentSpread = Math.max(0, currentSpread - 1);
  renderBook();
});

nextPage.addEventListener("click", () => {
  const totalSpreads = Math.ceil(chalisaPages.length / 2);
  currentSpread = Math.min(totalSpreads - 1, currentSpread + 1);
  renderBook();
});

closeDialog.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

renderGallery();
renderBook();
