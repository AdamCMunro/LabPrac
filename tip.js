$('#5p').click(function(){
    let billValue = $('#bill').val();
    var totalTip = billValue * 0.05;
    $('#output').html("£" + totalTip);  
});

$('#10p').click(function(){
    let billValue = $('#bill').val();
    var totalTip = billValue * 0.1;
    $('#output').html("£" + totalTip);
});

$('#25p').click(function(){
    let billValue = $('#bill').val();
    var totalTip = billValue * 0.25;
    $('#output').html("£" + totalTip);
});

$('#Big').click(function(){
    let billValue = $('#bill').val();
if ((billValue * 0.25) > (2 + billValue * 0.1)) {
    var totalTip = billValue * 0.25;
    $('#output').html("£" + totalTip);
}
else {
    let totalTip = 2 + billValue * 0.1;
    $('#output').html("£" + totalTip);
}
});



