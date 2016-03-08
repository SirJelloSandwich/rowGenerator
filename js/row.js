
(function(exports){

  function Row(config, myindex, container) {

      if(config.rowArrows){
        $('.landingPage').append('<div class='+config.parentClass+'><span class="rowtitle">Title</span><span class="rowArrowLeft"></span><span class="rowArrowRight"></span></span></div><div><div class='+config.type+myindex+' index="'+myindex+'"></div></div>');
      }
      else if(container){
          $(container).append('<div class='+config.parentClass+'><div class='+config.type+myindex+' index="'+myindex+'"></div></div>');
      }
      else{
          $('.landingPage').append('<div class='+config.parentClass+'><div class='+config.type+myindex+' index="'+myindex+'"></div></div>');
      }


      if(config.rowArrows || config.type === 'seriesSpringboardRow'){
        $.each(config.data, function(index, value){
          if(config.data[index].duration && config.data[index].label){
            $('.'+config.type+myindex+'').append('<div><img id='+config.data[index].id+' src='+config.data[index].image.styles.large+'><div class="duration">'+config.data[index].duration.toHHMMSS()+'</div><div class="label">'+config.data[index].label+'</div></div>');
          }
          if(!config.data[index].duration){
            $('.'+config.type+myindex+'').append('<div><img id='+config.data[index].id+' src='+config.data[index].image.styles.large+'><div class="label">'+config.data[index].label+'</div></div>');
          }
            //if(config.data[index].duration){
            //  $('.'+config.type+myindex+' div').append('<div class="duration">'+config.data[index].duration.toHHMMSS()+'</div>');
            //}
            //if(config.data[index].label){
            //  $('.'+config.type+myindex+' div').append('<div class="label">'+config.data[index].label+'</div>');
            //}
        });
      }
      else{
          $.each(config.data, function(index, value){
            $('.'+config.type+myindex+'').append('<div><img id='+config.data[index].id+' src='+config.data[index].image.styles.large+'><div class="overlay"></div><div class="overlayText">'+config.data[index].label+'</div></div');
              });
          }

    if(config.rowArrows){
    $.each($('.'+config.type+myindex+' div img'),function(){
      $(this).css('width',         config.width+'px');
      $(this).css('height',        config.height+'px');
      $(this).css('margin-top',    config.marginTop+'px' );
      $(this).css('margin-right',  config.marginRight+'px' );
      $(this).css('margin-bottom', config.marginBottom+'px' );
      $(this).css('margin-left',   config.marginLeft+'px' );
    });
  }
  else{
    $.each($('.'+config.type+myindex+' img'),function(){
      $(this).css('width',         config.width+'px');
      $(this).css('height',        config.height+'px');
      $(this).css('margin-top',    config.marginTop+'px' );
      $(this).css('margin-right',  config.marginRight+'px' );
      $(this).css('margin-bottom', config.marginBottom+'px' );
      $(this).css('margin-left',   config.marginLeft+'px' );

    });

    // $.each($('.'+config.type+myindex+' img').parent(),function(){
    //   $(this).css('width',         config.width+'px');
    //   $(this).css('margin-top',    config.marginTop+'px' );
    //   $(this).css('margin-right',  config.marginRight+'px' );
    //   $(this).css('margin-bottom', config.marginBottom+'px' );
    //   $(this).css('margin-left',   config.marginLeft+'px' );
    // });

  }

    this.row = $('.'+config.type+myindex+'')[0];
    var w = (config.width * (config.data.length+1) );
    var mr = w +  config.marginRight*config.data.length ;
    $(this.row).css('width',mr);
    $(this.row).css('transform', 'translate3d('+ config.position +'px, 0px, 0px)');


  }
exports.Row = Row;
})(window);
