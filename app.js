$(document).ready(function() {
    var toggle = false
    $(".animate-button").click(function() {
        if(toggle == true) {
            $(".itemLecture").animate({
                width: '156px',
              });
              toggle = false
        } else {
            $(".itemLecture").animate({
                width: '300px',
              });
              toggle = true
        }
        
    });



    $(".info-button").click(function() {
        $(".itemLecture").slideToggle();
    })

    // $(".remove-button").click(function() {
    //     $(this).closest("div").parent().remove()
    // })
    $(".mainLecture").on('click', '.remove-button', function() {
        $(this).closest("div").parent().remove()
    })
    $(".add-button").click( function() {
        var addHTML = `
        <div class="itemLecture">
        <div class="item-img">
            <img src="img/item1.png" alt="item1">
        </div>

        <div class="item-info">
            <a href="#" class="remove-button">Xóa bài học này</a>
            <img src="img/speaker.png" alt="speak">
        </div>
    </div>
        `;
        $(".topicLecture").after(addHTML)
    })
        

   $(".theme-button").click(() => {
    $(".mainContent").toggleClass("backgroundDark")
   }) 
    
    function youtube() {
        var text = $('.youtube').find('input[name="link"]').val();
        var n = text.indexOf("=")
        var link = "https://www.youtube.com/embed/" + text.slice(n+1)
        $("iframe").attr("src",link)
    }

    $(".youtube-button").click(() => {
        youtube()
    })
    
    
})