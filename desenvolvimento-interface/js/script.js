// Ativar barra de pesquisa com atalho
const searchBar = document.getElementById("searchBar");

function activateSearchBar() {
    searchBar.focus();
}

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "k") {
        activateSearchBar();
        event.preventDefault();
    }
});

// Mudar display de comando da search bar dependendo do tipo de dispositivo do usuário (Mac ou Windows)
const searchBarLabel = document.getElementById("searchBarLabel");
const isMacOS = navigator.userAgent.toUpperCase().indexOf('MAC') >= 0;

if (isMacOS) { searchBarLabel.innerText = "CMD + K"; }
else { searchBarLabel.innerText = "CTRL + K"; }