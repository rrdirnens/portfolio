window.addEventListener("load", function () {
    // store tabs variable
    let myTabs = document.querySelectorAll(
        ".portfolio__tab-controls-single"
    );
    let background = document.querySelector('.main-section')

    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++) {
            console.log('clicked')
            myTabs[i].classList.remove(
                "portfolio__tab-controls-single--active"
            );
        }

        let clickedTab = tabClickEvent.currentTarget;
        console.log(clickedTab)
        console.log(clickedTab.getAttribute("data-image"))

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