(function(exports) {
    "use strict";

    function Springboard(settings) {

      this.keyDown = function(e){
          console.log(e.keyIdentifier);
          e.preventDefault();
        switch(e.keyIdentifier){

          case "Enter":

          break;
          case "U+0008"://BACK
          if($('.springboardContainer').length > 1){
            $('.springboardContainer').eq(1).remove();
            $('.springboardContainer').eq(0).show();
            app.view = app.seriesSpringboard;
            // e.preventDefault();
          }
          else{
            $('.springboardContainer').remove();
            $(".landingPage").show();
            app.view = app;

          }

          break;
        }

      }.bind(this);


     }

    exports.Springboard = Springboard;
}(window));
