// Show Menu
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show-menu')
      })
  }
}
showMenu('nav-toggle','nav-menu')

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll Section Active Link
const sections = document.querySelectorAll('section[id')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop =  current.offsetTop - 50,
          sectionId = current.getAttribute('id')

       if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active-link')
       }else{
          document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active-link')
      }
  })
}
window.addEventListener('scroll',scrollActive)

// Change background header
function scrollHeader(){
  const header = document.getElementById('header')
      // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Show scrollup
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  //when we scroll is higher than 560 viewport height, and the 
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// Dark light theme
const themeButton = document.getElementById('theme-button')
const darktheme = 'dark-theme'
const icontheme = 'bx-toggle-right'

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validatin the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(icontheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// we valiate if the user previously chose a topic
if (selectedTheme) {
  // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darktheme)
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](icontheme)
}

// active / deactive the theme manualy with the button
themeButton.addEventListener('click', () =>{
  // add or remove the dark / icon theme
  document.body.classList.toggle(darktheme)
  themeButton.classList.toggle(icontheme)
  // we save the theme ad nthe current icon that the user chose
  localStorage.setItem('seclted-theme',getCurrentTheme)
  localStorage.setItem('seclted-icon',getCurrentIcon)
})

// Accordion
const acc_btns = document.querySelectorAll(".accordion-header");
  const acc_contents = document.querySelectorAll(".accordion-body");

  acc_btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      acc_contents.forEach((acc) => {
        if (
          e.target.nextElementSibling !== acc &&
          acc.classList.contains("active")
        ) {
          acc.classList.remove("active");
          acc_btns.forEach((btn) => btn.classList.remove("active"));
        }
      });

      const panel = btn.nextElementSibling;
      panel.classList.toggle("active");
      btn.classList.toggle("active");
    });
  });

  window.onclick = (e) => {
    if (!e.target.matches(".accordion-header")) {
      acc_btns.forEach((btn) => btn.classList.remove("active"));
      acc_contents.forEach((acc) => acc.classList.remove("active"));
    }
  };


// change language
{/* <script>
var dataReload = document.querySelectorAll("[data-reload]");
var language = {
  en :{
      hello: "New Academic Year 2022-2023"
  },
  kh: {
      hello: "ឆ្នាំសិក្សាថ្មី 2022-2023"
  }
};
if(window.location.hash) {
  if(window.location.hash === "#kh") {
      hi.textContent = language.kh.hello;
  }
}
for (i =0; i <= dataReload.length; i++) {
  dataReload[i].onclick = function() {
      location.reload(true);
  }

</script>  */}


