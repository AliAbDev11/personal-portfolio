/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
$(document).ready(function() {
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default navigation
            const page = this.getAttribute("data-page");
            loadPage(page);
            history.pushState({}, "", page === "index" ? "/" : `/${page}`);
        });
    });
    
    function loadPage(page) {
        const content = document.getElementById("content");
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(html => {
                content.innerHTML = html;
            })
            .catch(err => console.error("Failed to load page:", err));
    }
});