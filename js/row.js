
(function(exports){

  function Row(config, myindex) {
    //this.allClasses = [];
      //console.log(config);
    $('.app-container').append('<div><div class='+config.type+myindex+' index="'+myindex+'"></div></div>');
    //this.allClasses.push(config.type+myindex);

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
    $(this.row).css('transform', 'translate3d('+ config.position +'px, 0px, 0px)');


  }
exports.Row = Row;
})(window);
