// Open Menu and Close Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
      }

      if(navClose){
        navClose.addEventListener('click', () =>{
          navMenu.classList.remove('show-menu')
        })
      }
    

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
      // Evey time click on nav_link 

      const navLink = document.querySelectorAll('.nav_link')

      function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
          }
          navLink.forEach(n => n.addEventListener('click', linkAction))


          // Scroll Header Effect
function scrollHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 10 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 10) header.classList.add('scroll_header'); else header.classList.remove('scroll_header')
}
window.addEventListener('scroll', scrollHeader)
// Jquery for menu filter
    $(document).ready(function(){
      $('.menu_item').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'All'){
          $('.menu_items').show('1000');
        }
        else{
          $('.menu_items').not('.'+value).hide('1000');
          $('.menu_items').filter('.'+value).show('1000');
        }
      })
    })
    // active class for the selected item
    $('.menu_item').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    })

// Js for Home Guests
const myInput = document.getElementById("my-input");
function stepper(btn){
  let id = btn.getAttribute("id");
  let min = myInput.getAttribute("min");
  let max = myInput.getAttribute("max");
  let step = myInput.getAttribute("step");
  let val = myInput.getAttribute("value");
  let calcStep = (id == "increament") ? (step*1) : (step*-1);
  let newValue = parseInt(val) + calcStep;

  if(newValue >= min && newValue <= max){
    myInput.setAttribute("value", newValue);
  }
}
// Couter

 
