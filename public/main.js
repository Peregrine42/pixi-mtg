"use strict";

let PIXI = require('./pixi.min.js');
let scale_to_window = require('./stack_overflow_scale_to_window.js');

let view = {
  scale: 1.0,
  scale_to_window: scale_to_window
};

let stage = new PIXI.Stage(0x66DD99);
let renderer = PIXI.autoDetectRenderer(400, 300);
document.body.appendChild(renderer.view);
requestAnimationFrame(animate);

let image_url = "images?multiverseid=197887&type=card";
let texture = PIXI.Texture.fromImage(image_url);

let test_card = new PIXI.Sprite(texture);

test_card.anchor.x = 0.5;
test_card.anchor.y = 0.5;

test_card.x = 0;
test_card.y = 0;

stage.addChild(test_card);

function animate() {
  // view.scale = view.scale_to_window(renderer.view.style);
  requestAnimationFrame(animate);
  renderer.render(stage);
}

function handle_mouse_up(evt) {
  let pixi_x = evt.pageX / view.scale;
  let pixi_y = evt.pageY / view.scale;
  
  console.log(`Pixi: (${pixi_x}, ${pixi_y})`);
  console.log(`Window: (${evt.pageX}, ${evt.pageY})`);
}

document.onmouseup = handle_mouse_up;
window.addEventListener("resize", function(event){ 
});

view.scale_to_window(renderer.view);