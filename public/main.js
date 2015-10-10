"use strict";

let PIXI = require('./pixi.min.js');

let stage = new PIXI.Stage(0x66DD99);
let renderer = PIXI.autoDetectRenderer(400, 300);
document.body.appendChild(renderer.view);
requestAnimationFrame(animate);

let image_url = "images?multiverseid=197887&type=card";
let texture = PIXI.Texture.fromImage(image_url);

let test_card = new PIXI.Sprite(texture);

test_card.anchor.x = 0.5;
test_card.anchor.y = 0.5;

test_card.x = 200;
test_card.y = 150;

stage.addChild(test_card);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(stage);
}