// we need to get the time somehow
// ??? how to draw the clock on the HTML page
// some of kind of loop to redraw clock

// change css using jquery
// $("#txt").css({ color: "blue", fontSize: "25px" });

// 4 / 2 = 2
// 4 / 3 = 1 R1

// 4 % 2 = 0
// 4 % 3 = 1

// 2 % 2 = 0
// 3 % 2 = 1

// if a number is even then % with 2 will return 0
// otherwise if a number is odd then % with 2 will return 1

$(document).ready(function() {

  function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      var ampm = isAMorPM(h);
      var color = changeColor(s);
      


      h = changeMilitary(h);
      m = checkTime(m);
      s = checkTime(s);

      $('#txt').html(h + ":" + m + ":" + s + ampm);
      setTimeout(startTime, 500);
  }


  function changeColor(i){
    if (i % 2 === 0){
      $("#txt").css({color: "red"})
    } else {
      $("#txt").css({color: "blue"})
    }
    return;
  }
    
  function isAMorPM(i) {
    var value;
    if (i >= 12) {
      value = "PM"
    } else {
      value = "AM"
    }
    return value;
  }

  function changeMilitary(i) {
    if (i > 12) {
      i = i - 12;
    }
    return i;
  }

  function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
  }

  var hi = function (){
    var back = ["yellow","green","pink","gray","black", "purple"];
    var rand = back[Math.floor(Math.random() * back.length)];
    $('div').css('backgroundColor',rand);     
  }

  setInterval( function() {hi()}, 5000);


  setInterval( function  boo(){
  var back = ["10px","20px","30px","40px","50px", "60px"];
  var rand = back[Math.floor(Math.random() * back.length)];
  $('div').css('fontSize',rand);     
}, 60000);


 

  startTime();

});
