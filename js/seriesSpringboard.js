(function(exports) {
  'use strict';

  function SeriesSpringboard(){
    this.keyDown = function(e){

        console.log("in series SB");
        e.preventDefault();
      switch(e.keyIdentifier){

        case "Enter":

        break;
        case "U+0008"://BACK
          $('.springboardContainer').remove();
          $(".landingPage").show();
          app.view = app;

        break;
      }

    }.bind(this);


  }


  exports.SeriesSpringboard = SeriesSpringboard;
}(window));
