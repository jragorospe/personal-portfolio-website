function revealMenu() {
    var x = document.getElementById("dropdown-menu");
    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

document.addEventListener('mouseup', function(e) {
    let container = document.getElementById('dropdown-menu');
    if (!container.contains(e.target)) {
      container.style.display = 'none';
    }
});