const fs = require("fs");

const input = JSON.parse(fs.readFileSync(process.argv[2], "UTF-8"));

input.data.forEach(a => {

  if (a.attributes.bbox === null) {
    //    console.log(JSON.stringify(a, null, 2));
    return;
  }

  const json = {
    "tilejson": "2.2.0",
    "name": a.attributes.title,
    "description": a.attributes.description,
    "version": "1.0.0",
    "attribution": `<a href='https://mapwarper.h-gis.jp/maps/${a.id}'>${a.attributes.title}</a>`,
    "tiles": [
      a.links.tiles.replace("http://", "https://")
    ],
    "bounds": a.attributes.bbox.split(",").map(a => parseFloat(a))
  };

  const filename = `dist/${a.id}.json`;

  fs.writeFileSync(filename, JSON.stringify(json, null, 2), "UTF-8");

  console.log(`wrote ${filename}`);
});
