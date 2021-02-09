// import logo from "../assets/images/airbnb_phone.png";

window.addEventListener("load", function () {
    // store tabs variable
    let myTabs = document.querySelectorAll(
        ".portfolio__tab-controls-single"
    );
    let background = document.querySelector('.main-section')

    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove(
                "portfolio__tab-controls-single--active"
            );
        }

        let clickedTab = tabClickEvent.currentTarget;

        background.style.backgroundImage = 'url(\''+ clickedTab.getAttribute('data-image')+'\')'
        

        clickedTab.classList.add("portfolio__tab-controls-single--active");

        tabClickEvent.preventDefault();

       let myContentPanes = document.querySelectorAll(
            ".portfolio__tab-panes-single"
        );

        for (i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove(
                "portfolio__tab-panes-single--active"
            );
        }

        let anchorReference = tabClickEvent.target;
        let activePaneId = anchorReference.getAttribute("href");
        let activePane = document.querySelector(activePaneId);

        activePane.classList.add("portfolio__tab-panes-single--active");
    }

    for (let i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", myTabClicks);
    }
});


jQuery('#slick-trigger').one('click', function () {
    jQuery('.projects__slider').slick({
        slidesToShow: 1,
        prevArrow: `<button type="button" class="slick-prev">
        <?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511.949 511.949" style="enable-background:new 0 0 511.949 511.949;" xml:space="preserve">
<g>
	<g>
		<path d="M386.235,248.308L140.902,2.975c-4.267-4.053-10.987-3.947-15.04,0.213c-3.947,4.16-3.947,10.667,0,14.827l237.76,237.76
			l-237.76,237.867c-4.267,4.053-4.373,10.88-0.213,15.04c4.053,4.267,10.88,4.373,15.04,0.213c0.107-0.107,0.213-0.213,0.213-0.213
			l245.333-245.333C390.395,259.188,390.395,252.468,386.235,248.308z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

        </button>`,
        nextArrow: `<button type="button" class="slick-next">
        <?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511.949 511.949" style="enable-background:new 0 0 511.949 511.949;" xml:space="preserve">
<g>
	<g>
		<path d="M386.235,248.308L140.902,2.975c-4.267-4.053-10.987-3.947-15.04,0.213c-3.947,4.16-3.947,10.667,0,14.827l237.76,237.76
			l-237.76,237.867c-4.267,4.053-4.373,10.88-0.213,15.04c4.053,4.267,10.88,4.373,15.04,0.213c0.107-0.107,0.213-0.213,0.213-0.213
			l245.333-245.333C390.395,259.188,390.395,252.468,386.235,248.308z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

        </button>`,
        responsive: [
            {
              breakpoint: 1100,
              settings: "unslick"
            }
        ]
    });
});

jQuery('.projects__slider').on('init', function(event, slick, currentSlide, nextSlide){
    console.log('init');
});