AOS.init();

function toggleMenu() {
    console.log("toggleMenu function called"); // Debugging log
    let btn = document.querySelector("#nav");
    if (btn.innerHTML.trim() === "") {
        btn.innerHTML = `
            <ul id="mobile-view-nav" >
                <li>
                    <img src="/images/close_24dp_FILL0_wght400_GRAD0_opsz24.svg" height="50px" width="50px" alt="" style="padding-left: 10px;" id="close-menu" onclick="toggleMenu()">
                </li>
                <li><a href="index.html" target="_blank">Home</a></li>
        <li><a href="matches.html" target="_blank">Matches</a></li>
        <li><a href="players.html" target="_blank">The Risers</a></li>
        <li><a href="news.html" target="_blank">News</a></li>
            </ul>
        `;
        console.log("Menu opened");

        // Add event listeners to close the menu when links are clicked
        let links = document.querySelectorAll("#mobile-view-nav a");
        links.forEach(link => {
            link.addEventListener("click", toggleMenu);
        });

    } else {
        btn.innerHTML = "";
        console.log("Menu closed");
    }
}