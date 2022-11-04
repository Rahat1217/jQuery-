$(function() {
 
  let menu = $('nav .menu')
  let box = $('.box')
  let sidebar = $('.sidebar')
   let toggle = $('.toggle')

  menu.click(function()
  {sidebar.toggleClass('active')
  if(sidebar.hasClass('active')){
    menu.text('X')
  }
  else{
    menu.text('=')
  }
})
  
toggle.click(function(){
 box.slideToggle(300)
})



let myImg = $('.myimg')
myImg.hover(
  function(){
$(this).attr('src', './img/Real_Madrid_CF.svg.png')    
  },
  function(){
  $(this).attr('src', './img/fcb.png')
  }
  
)
  

})



