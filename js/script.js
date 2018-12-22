var feedbackLink = document.querySelector(".feedback-link");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackName = feedbackPopup.querySelector("[name=feedback-name]");
var feedbackForm = feedbackPopup.querySelector("form");
var feedbackEmail = feedbackPopup.querySelector("[name=feedback-email]");
var feedbackText = feedbackPopup.querySelector("[name=feedback-text]");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";


try {
    storageName = localStorage.getItem("name"); 
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    
    if (storageName || storageEmail) {
        feedbackName.value = storageName;
        feedbackEmail.value = storageEmail;
        feedbackText.focus();
    } else {
        feedbackName.focus();
    }
})

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
})

feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-error");
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", feedbackName.value);
            localStorage.setItem("email", feedbackEmail.value);
        } 
    }
})

window.addEventListener("keydown", function (evt) {
    if (feedbackPopup.classList.contains("modal-show")) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            feedbackPopup.classList.remove("modal-show");
            feedbackPopup.classList.remove("modal-error");
        }
    } 
});

var mapLink = document.querySelector(".map-sm");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
})

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (mapPopup.classList.contains("modal-show")) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            mapPopup.classList.remove("modal-show");
            mapPopup.classList.remove("modal-error");
        }
    } 
});