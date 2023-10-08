// Wait for the page to fully load before running the code
window.addEventListener('load', function () {

    // Select elements from the HTML document
    let headerWrapper = document.querySelector('.c-header__wrapper');
    let headerWrapperHeight = headerWrapper.offsetHeight;
    const headerLogo = document.querySelector('.c-header__logo');
    const headerLinks = document.querySelector('.c-header .c-menu__links');
    var headerLink = document.querySelectorAll('.c-header .c-menu__link');
    const linkVoyager = document.querySelector('.c-menu__link--voyager');
    const linkNavy = document.querySelector('.c-menu__link--navy');
    var menuButton = document.querySelector('.menu-toggle');
    var htmll = document.querySelector('html');
    var modalMenu = document.querySelector('.c-modal__menu');
    var modalLinks = document.querySelectorAll('.c-mm__links .c-mm__link');
    // Get the current viewport width
    var viewportWidth = window.innerWidth;
    // Add a click event listener to the menu button
    menuButton.addEventListener('click', function () {
        // Toggle classes to show/hide the menu
        menuButton.classList.toggle('c-active');
        htmll.classList.toggle('c-active')
        modalMenu.classList.toggle('c-active');
    });

    // Function to close the modal menu
    function closeModalMenu() {
        menuButton.classList.remove('c-active');
        htmll.classList.remove('c-active');
        modalMenu.classList.remove('c-active');
    }  
    // Select all links inside the modal menu
    // Add click event listeners to the links
    modalLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Close the modal menu when a link is clicked
            closeModalMenu();
        });
    });

    // Check viewport width and add a class to menu links based on conditions
    if (viewportWidth < 1440) {
        linkVoyager.classList.add('c-menu__link--white');
    }
    if (viewportWidth < 1101) {
        linkNavy.classList.add('c-menu__link--white');
    }

    // Add a resize event listener to adjust menu links based on viewport width
    window.addEventListener('resize', () => {
        headerWrapperHeight = headerWrapper.offsetHeight;
        viewportWidth = window.innerWidth;
        if (viewportWidth < 1440) {
            linkVoyager.classList.add('c-menu__link--white');
        } else {
            linkVoyager.classList.remove('c-menu__link--white');
        }
        if (viewportWidth < 1101) {
            linkNavy.classList.add('c-menu__link--white');
        } else {
            linkNavy.classList.remove('c-menu__link--white');
        }
    });

    // Function to handle header behavior on scroll
    function handleHeaderScroll() {
        const scrollY = window.scrollY;
        const isShowHeader = scrollY >= headerWrapperHeight;
        headerLogo.classList.toggle('c-active', isShowHeader);
        headerLinks.classList.toggle('c-active', isShowHeader);
        headerWrapper.classList.toggle('c-active', isShowHeader);
    }


       // Scroll and active class on nav link for each section
       var sections = document.querySelectorAll('section');
       let heightOuterHeader = headerWrapper.outerHeight;
   
      
       // Show active on menu when scroll to each sections:

        function handleSectionScroll() {
        let currentPostion = window.scrollY;
        
        sections.forEach(function (section) {
            let topSection = section.getBoundingClientRect().top + window.scrollY - 25;
            let bottomSection = section.getBoundingClientRect().bottom + window.scrollY;
            let idName = section.getAttribute('id');
            if (currentPostion >= topSection && currentPostion <= bottomSection) {
                headerLink.forEach(function(link) {
                    link.classList.remove('c-active');
                    document.querySelector('.c-header .c-menu__links a[href*=' + idName + ']').classList.add('c-active');
                });
            }
            
        });
     }
    


    // Add a scroll event listener to handle header behavior
    window.addEventListener('scroll', () => {
        handleHeaderScroll();
        handleSectionScroll();
    });


 
    




});
