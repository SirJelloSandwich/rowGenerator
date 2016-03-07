(function(exports) {
  'use strict';

  function SeriesSpringboard(data){
    this.data = data;
    this.upDownIndex = 0;
    this.index = [0];
    this.row = 'seriesSpringboardRow0';
    var thisOtherPos = [0];


    this.keyDown = function(e){

        console.log("in series SB");

      switch(e.keyIdentifier){

            case "Enter":
                //var id = $('.'+this.row+" "+"img").eq(this.index[this.upDownIndex]).attr('id');
                //console.log(id);
                var selectedItem = this.data[this.index[this.upDownIndex]];
                //console.log(item);
                // var fff = (function(){
                //   for(var ttt in this.data){
                //     for(var ppp in this.allGridRows[ttt].data){
                //       if(parseInt(this.allGridRows[ttt].data[ppp].id, 10 ) === parseInt(id, 10)){//? this.allGridRows[ttt].data[ppp]: false ;
                //          return this.allGridRows[ttt].data[ppp];
                //       }
                //     }
                //   }
                // }.bind(this))();
                // console.log(fff);

                //if(this.upDownIndex < 3){
                  selectedItem.fliYear = new Date().getFullYear(selectedItem.created);
                  selectedItem.fliTime = selectedItem.duration.toHHMMSS();
                  selectedItem.springboardButtons = 1;
                  if(selectedItem.description.length > 350){
                    selectedItem.description = selectedItem.description.substring(0,350)+"...";
                  }

                  var html = app.util.buildTemplate($('#springboard-template'), selectedItem);
                  $('.app-container').append(html);
                  $(".springboardContainer:first").hide();
                  var springboard = this.springboard = new Springboard();
                  app.view = this.springboard;
                //}
            break;
            case "U+0008"://BACK
              $( ".springboardContainer").eq(0).remove();
              $(".landingPage").show();
              app.view = app;
              e.preventDefault();
            break;
            case "Right":
              //console.log("in right");
              if(this.index[this.upDownIndex] < $('.'+this.row).children().length-1){
                thisOtherPos[this.upDownIndex] += -420;

                $('.'+this.row).css({
                  'transform': "translate3d("+thisOtherPos[this.upDownIndex]+"px, 0px,0px)"
                });

                this.index[this.upDownIndex] += 1;

              }
              break;
              case "Left":
                if(this.index[this.upDownIndex] > 0){
                  thisOtherPos[this.upDownIndex] += 420;

                  $('.'+this.row).css({
                    'transform': "translate3d("+thisOtherPos[this.upDownIndex]+"px, 0px,0px)"
                  });

                  this.index[this.upDownIndex]-=1;
                }
              break;
            }

    }.bind(this);


  }


  exports.SeriesSpringboard = SeriesSpringboard;
}(window));
