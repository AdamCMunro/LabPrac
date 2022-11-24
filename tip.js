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
    
    if (totalTip < 5) {
      $('#output').toggleClass('medium', 'large', false);
      $('#output').toggleClass('smoll', true);
    }
    else if (totalTip > 5 && totalTip <= 10) {
      $('#output').toggleClass('smoll', 'large', false);
      $('#output').toggleClass('medium', true);
    }
    else if (totalTip > 10) {
      $('#output').toggleClass('smoll', 'medium', false);
      $('#output').toggleClass('large', true);
    }
    
    $('#output').html("£" + totalTip);
    
  });

$('#10p').click(function(){
    let billValue = $('#billValue').html();
    let totalTip = billValue * 0.1;
    
    if (totalTip < 5) {
      $('#output').toggleClass('medium', 'large', false);
      $('#output').toggleClass('smoll', true);
    }
    else if (totalTip > 5 && totalTip <= 10) {
      $('#output').toggleClass('smoll', 'large', false);
      $('#output').toggleClass('medium', true);
    }
    else if (totalTip > 10) {
      $('#output').toggleClass('smoll', 'medium', false);
      $('#output').toggleClass('large', true);
    }
    
    $('#output').html("£" + totalTip);
});

$('#25p').click(function(){
    let billValue = $('#billValue').html();
    let totalTip = billValue * 0.25;
    
    if (totalTip < 5) {
      $('#output').toggleClass('medium', 'large', false);
      $('#output').toggleClass('smoll', true);
    }
    else if (totalTip > 5 && totalTip <= 10) {
      $('#output').toggleClass('smoll', 'large', false);
      $('#output').toggleClass('medium', true);
    }
    else if (totalTip > 10) {
      $('#output').toggleClass('smoll', 'medium', false);
      $('#output').toggleClass('large', true);
    }
    
    $('#output').html("£" + totalTip);
});

$('#Big').click(function(){
    let billValue = $('#billValue').html();
if ((billValue * 0.25) > (2 + billValue * 0.1)) {
    let totalTip = billValue * 0.25;
}
else {
    let totalTip = 2 + billValue * 0.1;
}

if (totalTip < 5) {
  $('#output').toggleClass('medium large', false);
  $('#output').toggleClass('smoll', true);
}
else if (totalTip > 5 && totalTip <= 10) {
  $('#output').toggleClass('smoll large', false);
  $('#output').toggleClass('medium', true);
}
else if (totalTip > 10) {
  $('#output').toggleClass('smoll medium', false);
  $('#output').toggleClass('large', true);
}

$('#output').html("£" + totalTip);

});





