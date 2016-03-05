
(function(exports){

  function Row(config, myindex, container) {
    //this.allClasses = [];
      //console.log(config);
      if(config.rowArrows){
        $('.landingPage').append('<div><span class="rowtitle">Title</span><span class="rowArrowLeft"></span><span class="rowArrowRight"></span></span></div><div><div class='+config.type+myindex+' index="'+myindex+'"></div></div>');
      }
      else if(container){
          $(container).append('<div><div class='+config.type+myindex+' index="'+myindex+'"></div></div>');
      }
      else{
          $('.landingPage').append('<div><div class='+config.type+myindex+' index="'+myindex+'"></div></div>');
      }

    //this.allClasses.push(config.type+myindex);
      if(config.rowArrows){
        $.each(config.data, function(index, value){
            $('.'+config.type+myindex+'').append('<div><img id='+config.data[index].id+' src='+config.data[index].image.styles.large+'><div class="label">'+config.data[index].label+'</div><div class="duration">'+config.data[index].duration+'</div><div class="description">'+config.data[index].description+'</div></div>');
        });
  }
  else{
    $.each(config.data, function(index, value){
      $('.'+config.type+myindex+'').append('<div><img id='+config.data[index].id+' src='+config.data[index].image.styles.large+'><div class="overlay"></div><div class="overlayText">Beyond Today</div></div');
        });
  }
  // else{
  //
  // }
    //</img><span class="duration"></span><span class="description"></span>
    if(config.rowArrows){
    $.each($('.'+config.type+myindex+' div img'),function(){
      $(this).css('width', config.width+'px');
      $(this).css('height', config.height+'px');
      $(this).css('margin-top',  config.marginTop+'px' );
      $(this).css('margin-right',  config.marginRight+'px' );
      $(this).css('margin-bottom',  config.marginBottom+'px' );
      $(this).css('margin-left',  config.marginLeft+'px' );
    });
  }
  else{
    $.each($('.'+config.type+myindex+' img'),function(){
      $(this).css('width', config.width+'px');
      $(this).css('height', config.height+'px');
      $(this).css('margin-top',  config.marginTop+'px' );
      $(this).css('margin-right',  config.marginRight+'px' );
      $(this).css('margin-bottom',  config.marginBottom+'px' );
      $(this).css('margin-left',  config.marginLeft+'px' );
    });
  }

    this.row = $('.'+config.type+myindex+'')[0];
    var w = (config.width * config.data.length );
    var mr = w +  config.marginRight*config.data.length;
    $(this.row).css('width',mr);
    $(this.row).css('transform', 'translate3d('+ config.position +'px, 0px, 0px)');


  }
exports.Row = Row;
})(window);
