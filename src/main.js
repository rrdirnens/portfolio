window.addEventListener("load", function () {
    // store tabs variable
    var myTabs = document.querySelectorAll(
        ".portfolio__tab-controls-single"
    );

    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++) {
            console.log('clicked')
            myTabs[i].classList.remove(
                "portfolio__tab-controls-single--active"
            );
        }

        var clickedTab = tabClickEvent.currentTarget;

        clickedTab.classList.add("portfolio__tab-controls-single--active");

        tabClickEvent.preventDefault();

        var myContentPanes = document.querySelectorAll(
            ".portfolio__tab-panes-single"
        );

        for (i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove(
                "portfolio__tab-panes-single--active"
            );
        }

        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = document.querySelector(activePaneId);

        activePane.classList.add("portfolio__tab-panes-single--active");
    }

    for (let i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", myTabClicks);
    }
});