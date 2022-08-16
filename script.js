$(document).ready(function() {
    console.log("Let's get ready to party with jQuery!");
})

$('article img').addClass('image-center');

$('p').last().remove();

$('#title').css('font-size', Math.floor(Math.random() * 100));

$('ol').append('<li>I added this</li>');

$('aside').empty().append("<p>I'm sorry I ever said that I love lists</p>");


let $r = $('#red').val();
let $g = $('#green').val();
let $b = $('#blue').val();

$('.form-control').change(function() {
    $r = $('#red').val();
    $g = $('#green').val();
    $b = $('#blue').val();

    $('body').css('background-color', `rgb(${$r},${$g},${$b})`)
})

$('img').on('click', function() {
        $(this).remove();
});





let count = 0;

$('#submit').on('click', function() {
    let title = $('#title').val()
    let rating = $('#rating').val()
    let div = $('<div></div>')
    let finDiv = div.text(title + ": " + rating + " ")
    let removeBtn = $('<button id="'+count+'">Remove</button>')

    finDiv.append(removeBtn)
    $('form').append(finDiv)

    $('#'+count).on('click', function() {
        $(this).parent().remove();
    })


    count++;


})
