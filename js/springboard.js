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
            $('.springboardContainer').remove();
            $(".landingPage").show();
            app.view = app;

          break;
        }

      }.bind(this);


     }

    exports.Springboard = Springboard;
}(window));
