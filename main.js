$('.sear').hide();
$('.luna').hide();
$('.description_title').hide();
function destaque() {
    var data = document.getElementById("data").value
    var link = `https://api.nasa.gov/planetary/apod?api_key=j3gAcBzYdK0oGQdLD6Eaj9SF9Dq6NTIplK9ybvZi&date=${data}`;
    $.ajax({url: link,
        success: function(nasa){           
            console.log(nasa)
            $('.title').text(nasa.title)
            $('.description').text(nasa.explanation)
            $('.description_title').show();
            if(nasa.media_type === "image"){
                $('.luna').attr('src', nasa.url);
                $('.luna').show();
                $('.sear').hide();
            }else{
                $('.sear').attr('src', nasa.url);
                $('.sear').show();
                $('.luna').hide();
            }
        }, error: function() {  
            $('.description').text("data inválida, ");
        }
    })
}