
var someVar;

$(function(){
    $('button').on('click', function(event){
        event.preventDefault();
        var htmlComponent = $('#web-link').val();
        console.log(htmlComponent);
        $.get(htmlComponent,function(data){
        someVar = data;
        console.log(someVar);
    });
    })
})

