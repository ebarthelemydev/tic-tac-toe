const $croix = document.querySelector("#croix");
const $rond = document.querySelector("#rond");

$croix.addEventListener("click", () => {
	$croix.classList.add("background-logo");
    $rond.classList.remove("background-logo");
});

$rond.addEventListener("click", () => {
	$rond.classList.add("background-logo");
    $croix.classList.remove("background-logo");
});