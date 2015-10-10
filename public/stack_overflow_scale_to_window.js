module.exports = function resizeCanvas(canvas) {
   // only change the size of the canvas if the size it's being displayed
   // has changed.
   var width = canvas.clientWidth;
   var height = canvas.clientHeight;
   if (canvas.width != width ||
       canvas.height != height) {
     // Change the size of the canvas to match the size it's being displayed
     canvas.width = width;
     canvas.height = height;
   }
}