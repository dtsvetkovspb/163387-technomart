/* Buy cart modal */

var buyLinks = document.querySelectorAll(".buy");
var modalCart = document.querySelector(".modal-cart")
var modalClose = modalCart.querySelector(".modal-close");

[].forEach.call(buyLinks, function (el) {
    el.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(modalClose);

        modalCart.classList.toggle("modal-show");
    })
})

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCart.classList.add("modal-hide");

    setTimeout(function () {
        modalCart.classList.remove("modal-show");
        modalCart.classList.remove("modal-hide");
    }, 200)
});