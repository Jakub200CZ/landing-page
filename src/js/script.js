// Script load console log ==> START
const seccess = "Script byl úspěšně spuštěn"
const failed = "Script se nenačetl správně"
let load = $(window).on('load')

function scriptLoad() {
  if (load) {
    console.log(seccess)
  } else
    console.load(failed)
}
scriptLoad()
// Script load console log ==> END


// Skip this sh*ts to real jQuery
// I learned something new so I use it everywhere :DDDD (DATE: 26.5.2022)
// Yep, i am FrontEnd Developer and jQuery I learned so late


// Scripts with real use are here: D

$("#tsparticles")
  .particles()
  .ajax("particles.json", function (container) {
    // container is the particles container where you can play/pause or stop/start.
    // the container is already started, you don't need to start it manually.
  });


jQuery(document).ready(function () {

  jQuery('.progress-bar').each(function () {
    jQuery(this).find('.progress-content').animate({
      width: jQuery(this).attr('data-percentage')
    }, 2000);

    jQuery(this).find('.progress-number-mark').animate(
      { left: jQuery(this).attr('data-percentage') },
      {
        duration: 2000,
        step: function (now, fx) {
          var data = Math.round(now);
          jQuery(this).find('.percent').html(data + '%');
        }
      });
  });
});

