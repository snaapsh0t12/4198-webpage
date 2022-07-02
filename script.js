const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

const faders = document.querySelectorAll('.fade-in');

// Only make it work on not very small screens???
// if (this.matchMedia("(min-width: 768px)").matches)

const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }

  })
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

$(window).on("load resize", function() {
    $dropdown.hover(
      function() {
        const $this = $(this);
        
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
        $dropdownMenu.removeClass('d-none');
        
        $("#navbarDropdown").addClass('special');
      },
      function() {
        const $this = $(this);
        
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
        $dropdownMenu.addClass('d-none');
        
        $("#navbarDropdown").removeClass('special');
      }
      
    );
  
});