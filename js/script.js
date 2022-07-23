$(function() {
    var $todoform = $('#todoform');
    var $todoitem  = $('#todoitem');
    var $textInput = $('input:text');

    $todoform.on('submit', function(e){
        e.preventDefault();
        var newText = $('input:text').val();
        $('li:last').after('<li>' + newText + '</li>');
        $textInput.val('');
    })
});