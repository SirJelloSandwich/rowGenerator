
(function(exports){

  function Row(config, myindex) {
      //console.log(config);
    $('.app-container').append('<div class='+config.type+myindex+' index="'+myindex+'"></div');

    $.each(config.data, function(index, value){
        $('.'+config.type+myindex+'').append('<img src='+config.data[index].image.styles.large+'>');
    });

    $.each($('.'+config.type+myindex+' img'),function(){
      $(this).css('width', config.width+'px');
      $(this).css('height', config.height+'px');
      $(this).css('margin-top',  config.marginTop+'px' );
      $(this).css('margin-right',  config.marginRight+'px' );
      $(this).css('margin-bottom',  config.marginBottom+'px' );
      $(this).css('margin-left',  config.marginLeft+'px' );
    });

    this.row = $('.'+config.type+myindex+'')[0];
    var w = (config.width * config.data.length );
    var mr = w +  config.marginRight*config.data.length;
    $(this.row).css('width',mr);
    $(this.row).css('transform', 'translate3d('+ -config.width/2.7 +'px, 0px, 0px)');


    this.keyDown = function(e){
      if(e.keyIdentifier === "Right"){

        $(this.row).css({
          'transform':'translate3d(-600px, 0px, 0px)',
          'transition': 'all 500ms cubic-bezier(0.86, 0, 0.07, 1)'
        });
         e.preventDefault();
      }
      if(e.keyIdentifier === "Left"){
        $(this.row).css({
          'transform':'translate3d(0px, 0px, 0px)',
          'transition': 'all 500ms cubic-bezier(0.86, 0, 0.07, 1)'
        });
         e.preventDefault();
      }
    }.bind(this);

  }
exports.Row = Row;
})(window);
