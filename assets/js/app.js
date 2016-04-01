(function () {

  new WOW().init();


  if (SVG.supported) {

    // var draw = SVG('drawing').size(300, 300);
    // var rect = draw.rect(100, 100).attr({ fill: '#f06' });

    // var line = draw.line(0, 0, 100, 150).stroke({ width: 3 });
    
    // line.plot(100, 250, 500, 250);

    // var start = SVG.select('#start')

    // start.attr({
    //   fill: '#f06'
    //   , 'fill-opacity': 0.5
    //   , stroke: '#000'
    // })

} else {
  console.log('SVG not supported')
}

// var current_frame, total_frames, path, length, handle, myobj;

// myobj = document.getElementById('drawing').cloneNode(true);

// var init = function() {
//   current_frame = 0;
//   total_frames = 60;
//   path = new Array();
//   length = new Array();
//   var path2 = $(".moving-path");

//   console.log(path2);

//   $.each(path2, function(i, el) {
//     var l = el.getTotalLength();
//     path[i] = el;
//     length[i] = l;

//     $(el).css({
//       "strokeDasharray": l + ' ' + l,
//       "strokeDashoffset": l
//     });
//   });

//   handle = 0;
// }


// var draw = function() {

//   SVG.select("ellipse").each(function() {
//     this.animate(2000, '>', 0).attr({ stroke: '#f03' });
//   });

//   SVG.select("rect").each(function() {
//     this.animate(2000, '>', 0).attr({ stroke: '#f03' });
//   });

//   var progress = current_frame/total_frames;
//   if (progress > 1) {
//    window.cancelAnimationFrame(handle);
//  } else {
//    current_frame++;
//    for(var j=0; j<path.length;j++){
//      path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
//    }
//    handle = window.requestAnimationFrame(draw);
//  }
// };

// init();
// draw();

// var rerun = function() {
//   var old = document.getElementsByTagName('div')[0];
//   old.parentNode.removeChild(old);
//   document.getElementsByTagName('body')[0].appendChild(myobj);
//   init();
//   draw();
// };

var vivus = new Vivus('svg-drawing', {
  type: "oneByOne",
  duration: 1000
  // file: "assets/img/process-diagram-simple.svg"
});
vivus.play();


})();