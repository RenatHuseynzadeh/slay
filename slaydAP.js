
$('.fBtn').click(function(){
    $('.first2').fadeOut(1000)
})

$('.sBtn').click(function(){
    $('.first2').fadeIn(1000)
})

$('.thBtn').click(function(){
    $('.first2').fadeOut(1000, function(){
       $('.first2').fadeIn(1000)

    })
})

$('.fBtn1').click(function(){
    $('.first3').slideUp(1000)
})

$('.sBtn1').click(function(){
    $('.first3').slideDown(1000)
})

$('.thBtn1').click(function(){
    $('.first3').slideUp(1000, function(){
       $('.first3').slideDown(1000)

    })
})

$('.fBtn2').click(function(){
    $('.first4').hide(1000)
})

$('.sBtn2').click(function(){
    $('.first4').show(1000)
})

$('.thBtn2').click(function(){
    $('.first4').toggle(1000, function(){
        $('.first4').toggle(1000)
 
     })
      
})

$('.fBtn3').dblclick(function(){
    $('.first5').css({
        'background': 'chocolate'
    })
})

$('.cl').click(function(){
    $('.first').css({
        'background': 'chocolate'
    })
})

$('.clR').click(function(){
    $('.first1').css({
        'border-radius': '50%','background': 'chocolate'
        

    })
})

// $('div').hover(function() {
    // $('div').mouseEnter(function() {
        //  $('div').slideDown(1000)
    //  }), function(){
        // 
    //  }
// })