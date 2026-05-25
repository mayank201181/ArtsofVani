# Arts of Vani

Repository: `ArtsofVani`

A static website for collecting Vani's artwork, writing, verses, school projects,
and other creations over time.

## Add Hanuman Chalisa Flip Book Pages

1. Add scanned page images to `assets/hanuman-chalisa/`.
2. Open `script.js`.
3. Add each page to the `chalisaPages` list:

```js
{
  title: "Verse page 1",
  note: "Bal Vihar, age 6-7",
  image: "assets/hanuman-chalisa/page-01.jpg",
  alt: "Vani's handwritten Hanuman Chalisa verse page 1"
}
```

## Add New Artwork

1. Add the image to `assets/artwork/`.
2. Open `script.js`.
3. Add a new item to the `artworks` list with a title, date, image path, and alt text.

## Preview Locally

Run a static server from this folder:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deploy With GitHub Pages

Use GitHub Pages with the `main` branch and `/root` as the publishing source.
