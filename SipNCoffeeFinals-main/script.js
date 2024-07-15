document.addEventListener("click", function(e) {
    if (!e.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var d = 0; d < dropdowns.length; d++) {
            var openDropdown = dropdowns[d];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

document.querySelector('.dropbtn').addEventListener('click', function() {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
    } else {
        dropdownContent.classList.add('show');
    }
});
