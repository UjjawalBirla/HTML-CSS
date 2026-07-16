const navbar = document.getElementById("navbar");

if (navbar) {
    fetch("Navigation.html")
        .then(res => res.text())
        .then(data => {
            navbar.innerHTML = data;
        })
        .catch(err => console.error(err));
}