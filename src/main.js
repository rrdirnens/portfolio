//get the trigger for mobile nav
let navTrigger = document.querySelector('.menu-toggle-js')

//set an event for click
navTrigger.onclick = function () {

    toggleMobileNavigation()

}

function toggleMobileNavigation() {

    //get mobile nav wrapper
    let mobileMenu = document.querySelector('.header__nav-menu-cover-js')

    //save the true/false state of whether or not wrapper has visibility class
    let state = mobileMenu.classList.contains('header__nav-menu-cover--mob-nav-on')

    //check visibility
    if (state === false) {

        //add class to mobile nav wrapper to toggle visibility (turn on)
        mobileMenu.classList.add('header__nav-menu-cover--mob-nav-on')

        //add class to mobile nav toggle
        navTrigger.classList.add('menu-toggle--open')

    } else {

        //remove class from mobile nav wrapper to toggle visibility (turn off)
        mobileMenu.classList.remove('header__nav-menu-cover--mob-nav-on')

        //add class to mobile nav toggle
        navTrigger.classList.remove('menu-toggle--open')

    }
}