var body = document.querySelector("body");
var btn = document.querySelector("button");

var images = [
  "https://static.vecteezy.com/system/resources/thumbnails/028/283/955/small/cartoon-insect-aigenerative-png.png",
  "https://png.pngtree.com/png-vector/20231214/ourmid/pngtree-hand-drawn-animal-flat-material-beetle_01-png-image_11351121.png",
  "https://www.pngarts.com/files/3/Ladybug-Insect-Download-Transparent-PNG-Image.png",
];

// console.log(num);

btn.addEventListener("click", () => {
  var num = Math.floor(Math.random() * images.length);
  // console.log(num);
  var randX = Math.random() * window.innerWidth;
  var randY = Math.random() * window.innerHeight;
  var rotat = Math.random() * 360;

  var img = document.createElement("img");
  img.setAttribute("src", images[num]);
  img.style.position = "absolute";
  img.style.width = "80px";
  img.style.height = "80px";
  img.style.left = randX + "px";
  img.style.top = randY + "px";
  img.style.rotate = rotat + "deg";
  btn.style.zIndex = 9;

  body.append(img);
});
