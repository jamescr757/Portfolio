$(document).ready(() => {

    // target current div's child back class
    // toggle slide up and down 
    // function backContentSlideToggle(event) {
    //     const targetCard = $(event.currentTarget).find('.back');
    //     targetCard.slideToggle(1000);
    // }

    function backContentSlideUp(event) {
        const targetCard = $(event.currentTarget).find('.back');
        targetCard.fadeOut("fast");
    }

    function backContentSlideDown(event) {
        const targetCard = $(event.currentTarget).find('.back');
        targetCard.fadeIn("fast");
    }
    
    // $('.about-me').on('click', backContentSlideToggle);

    $('.about-me').on('mouseleave', backContentSlideUp).on('mouseenter', backContentSlideDown);

    // target demo buttons for modal content generation
    // grab closest h3 to target button, use that text content to set modal title and image address
    function modalContentGeneration(event) {

      const appName = event.target.dataset.name;
      const imageAddress = appName.toLowerCase().replace(/\s/g, "-");

      // append content to modal header and body 
      $(".modal-body").html(`
          <video src="./assets/images/${imageAddress}-demo.${imageAddress === "ticket-pass" ? "mov" : "mp4"}" 
            height="475px" 
            width="850px" 
            controls>
            Video not supported
          </video>
      `);

      $("#modalTitle").text(`${appName}`);

      
    }

    $('.demo-btn').on("click", modalContentGeneration);


    $('#contact-btn').on('click', () => {
        contactCard = document.querySelector('#contact-card .jumbotron');
        
        // if card is invisible, show it
        // else, make the card disappear
        if (contactCard.style.opacity == 0) {
            $('#contact-card .jumbotron').animate({ opacity: 1 }, 1000);
            $('#contact-card a').css({ cursor: 'pointer' });
            $('#contact-card button').css({ cursor: 'pointer' });
            $('#contact-card p').css({ cursor: 'text' });
        } else {
            $('#contact-card .jumbotron').animate({ opacity: 0 }, 1000);
            $('#contact-card a').css({ cursor: 'default' });
            $('#contact-card button').css({ cursor: 'default' });
            $('#contact-card p').css({ cursor: 'default' });
        }
    });


    // smooth scroll when navigating the site
    // any anchor with an href starting with a # 
    // takes 1 second and timing function is linear
    $('a[href*="#"]').on('click', function(event) {
        event.preventDefault()
      
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top,
          },
          1000,
          'linear'
        )
      });


})