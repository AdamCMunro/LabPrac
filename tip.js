var totalTip

$( function() {
  $( "#selectable" ).selectable({
    stop: function() {
      let total = 0
      var result = $("#billValue");
      $( ".ui-selected", this ).each(function() {
        total += parseInt($(this).html());
        result.html((total));
      });
    }
  });
} );

$('#5p').click(function(){
    let billValue = $('#billValue').html();
    let totalTip = billValue * 0.05;
    
    if (totalTip < 5 && ($('#output').hasClass('smoll') == false)) {
      do{
        if ($('#output').hasClass('medium') == true) {
          $('#output').toggleClass('medium');
        }
        else if ($('#output').hasClass('large') == true) {
          $('#output').toggleClass('large');
        }
      } while(($('#output').hasClass('medium') == true) || ($('#output').hasClass('large') == true))
      $('#output').toggleClass('smoll');
    }
    else if (totalTip > 5 && totalTip <= 10 && ($('#output').hasClass('medium') == false)) {
      do{
        if ($('#output').hasClass('smoll') == true) {
          $('#output').toggleClass('smoll');
        }
        else if ($('#output').hasClass('large') == true) {
          $('#output').toggleClass('large');
        }
      } while(($('#output').hasClass('smoll') == true) || ($('#output').hasClass('large') == true))
      $('#output').toggleClass('medium');
    }
    else if (totalTip > 10 && ($('#output').hasClass('large') == false)) {
      do{
        if ($('#output').hasClass('smoll') == true) {
          $('#output').toggleClass('smoll');
        }
        else if ($('#output').hasClass('medium') == true) {
          $('#output').toggleClass('medium');
        }
      } while(($('#output').hasClass('smoll') == true) || ($('#output').hasClass('medium') == true))
      $('#output').toggleClass('large');
    }
    
    $('#output').html("£" + totalTip);
    
  });

$('#10p').click(function(){
    let billValue = $('#billValue').html();
    let totalTip = billValue * 0.1;
    
    if (totalTip < 5 && ($('#output').hasClass('smoll') == false)) {
      do{
        if ($('#output').hasClass('medium') == true) {
          $('#output').toggleClass('medium');
        }
        else if ($('#output').hasClass('large') == true) {
          $('#output').toggleClass('large');
        }
      } while(($('#output').hasClass('medium') == true) || ($('#output').hasClass('large') == true))
      $('#output').toggleClass('smoll');
    }
    else if (totalTip > 5 && totalTip <= 10 && ($('#output').hasClass('medium') == false)) {
      do{
        if ($('#output').hasClass('smoll') == true) {
          $('#output').toggleClass('smoll');
        }
        else if ($('#output').hasClass('large') == true) {
          $('#output').toggleClass('large');
        }
      } while(($('#output').hasClass('smoll') == true) || ($('#output').hasClass('large') == true))
      $('#output').toggleClass('medium');
    }
    else if (totalTip > 10 && ($('#output').hasClass('large') == false)) {
      do{
        if ($('#output').hasClass('smoll') == true) {
          $('#output').toggleClass('smoll');
        }
        else if ($('#output').hasClass('medium') == true) {
          $('#output').toggleClass('medium');
        }
      } while(($('#output').hasClass('smoll') == true) || ($('#output').hasClass('medium') == true))
      $('#output').toggleClass('large');
    }
    
    $('#output').html("£" + totalTip);
});

$('#25p').click(function(){
    let billValue = $('#billValue').html();
    let totalTip = billValue * 0.25;
    
    if (totalTip < 5 && ($('#output').hasClass('smoll') == false)) {
      do{
        if ($('#output').hasClass('medium') == true) {
          $('#output').toggleClass('medium');
        }
        else if ($('#output').hasClass('large') == true) {
          $('#output').toggleClass('large');
        }
      } while(($('#output').hasClass('medium') == true) || ($('#output').hasClass('large') == true))
      $('#output').toggleClass('smoll');
    }
    else if (totalTip > 5 && totalTip <= 10 && ($('#output').hasClass('medium') == false)) {
      do{
        if ($('#output').hasClass('smoll') == true) {
          $('#output').toggleClass('smoll');
        }
        else if ($('#output').hasClass('large') == true) {
          $('#output').toggleClass('large');
        }
      } while(($('#output').hasClass('smoll') == true) || ($('#output').hasClass('large') == true))
      $('#output').toggleClass('medium');
    }
    else if (totalTip > 10 && ($('#output').hasClass('large') == false)) {
      do{
        if ($('#output').hasClass('smoll') == true) {
          $('#output').toggleClass('smoll');
        }
        else if ($('#output').hasClass('medium') == true) {
          $('#output').toggleClass('medium');
        }
      } while(($('#output').hasClass('smoll') == true) || ($('#output').hasClass('medium') == true))
      $('#output').toggleClass('large');
    }
    
    $('#output').html("£" + totalTip);
});

$('#Big').click(function(){
    let billValue = $('#billValue').html();
if ((billValue * 0.25) > (2 + billValue * 0.1)) {
    let totalTip = billValue * 0.25;
    
    if (totalTip < 5 && ($('#output').hasClass('smoll') == false)) {
      do{
        if ($('#output').hasClass('medium') == true) {
          $('#output').toggleClass('medium');
        }
        else if ($('#output').hasClass('large') == true) {
          $('#output').toggleClass('large');
        }
      } while(($('#output').hasClass('medium') == true) || ($('#output').hasClass('large') == true))
      $('#output').toggleClass('smoll');
    }
    else if (totalTip > 5 && totalTip <= 10 && ($('#output').hasClass('medium') == false)) {
      do{
        if ($('#output').hasClass('smoll') == true) {
          $('#output').toggleClass('smoll');
        }
        else if ($('#output').hasClass('large') == true) {
          $('#output').toggleClass('large');
        }
      } while(($('#output').hasClass('smoll') == true) || ($('#output').hasClass('large') == true))
      $('#output').toggleClass('medium');
    }
    else if (totalTip > 10 && ($('#output').hasClass('large') == false)) {
      do{
        if ($('#output').hasClass('smoll') == true) {
          $('#output').toggleClass('smoll');
        }
        else if ($('#output').hasClass('medium') == true) {
          $('#output').toggleClass('medium');
        }
      } while(($('#output').hasClass('smoll') == true) || ($('#output').hasClass('medium') == true))
      $('#output').toggleClass('large');
    }
    
    $('#output').html("£" + totalTip);
}
else {
    let totalTip = 2 + billValue * 0.1;

    if (totalTip < 5 && ($('#output').hasClass('smoll') == false)) {
      do{
        if ($('#output').hasClass('medium') == true) {
          $('#output').toggleClass('medium');
        }
        else if ($('#output').hasClass('large') == true) {
          $('#output').toggleClass('large');
        }
      } while(($('#output').hasClass('smoll') == true) || ($('#output').hasClass('large') == true))
      $('#output').toggleClass('smoll');
    }
    else if (totalTip > 5 && totalTip <= 10 && ($('#output').hasClass('medium') == false)) {
      do{
        if ($('#output').hasClass('smoll') == true) {
          $('#output').toggleClass('smoll');
        }
        else if ($('#output').hasClass('large') == true) {
          $('#output').toggleClass('large');
        }
      } while(($('#output').hasClass('medium') == true) || ($('#output').hasClass('large') == true))
      $('#output').toggleClass('medium');
    }
    else if (totalTip > 10 && ($('#output').hasClass('large') == false)) {
      do{
        if ($('#output').hasClass('smoll') == true) {
          $('#output').toggleClass('smoll');
        }
        else if ($('#output').hasClass('medium') == true) {
          $('#output').toggleClass('medium');
        }
      } while(($('#output').hasClass('smoll') == true) || ($('#output').hasClass('medium') == true))
      $('#output').toggleClass('large');
    }
    
    $('#output').html("£" + totalTip);
}
});





