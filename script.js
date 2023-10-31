document.addEventListener("DOMContentLoaded", function(){
    el_autohide = document.querySelector('.autohide');
    // class iig el_autohide ruu ugnugit commit
    navbar_height = document.querySelector('.headerRow').offsetHeight;
    console.log(navbar_height);
    document.body.style.paddingTop = navbar_height + 'px';
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
        console.log(" scroll is working");
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
                el_autohide.classList.add('shadow');
                // deeshe scroldoh ued shadow uusgej uguh
                if(scroll_top==0){
                    el_autohide.classList.remove('shadow');
                }
                console.log("scroll-upp");
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
      // window.addEventListener
    }
    // when i click on logo, top should be 0
    document.getElementById('refresh-button').addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    });
    // for mobile
  
  }); 