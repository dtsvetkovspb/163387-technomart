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
    feedbackPopup.classList.add("modal-hide");
    setTimeout(function () {
        feedbackPopup.classList.remove("modal-show");
        feedbackPopup.classList.remove("modal-error");
        feedbackPopup.classList.remove("modal-hide");
    }, 200)
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
            feedbackPopup.classList.add("modal-hide");
            setTimeout(function () {
                feedbackPopup.classList.remove("modal-show");
                feedbackPopup.classList.remove("modal-error");
                feedbackPopup.classList.remove("modal-hide");
            }, 200)
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
    mapPopup.classList.add("modal-hide");
    setTimeout(function () {
        mapPopup.classList.remove("modal-show");
        mapPopup.classList.remove("modal-hide");
    }, 200)
});

window.addEventListener("keydown", function (evt) {
    if (mapPopup.classList.contains("modal-show")) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            mapPopup.classList.add("modal-hide");
            setTimeout(function () {
                mapPopup.classList.remove("modal-show");
                mapPopup.classList.remove("modal-hide");
            }, 200)
        }
    } 
});

/* Slider */

var sliderLeftBtn = document.querySelector(".slider-left-btn");
var sliderRightBtn = document.querySelector(".slider-right-btn");
var product1 = document.getElementById("product-1");
var product2 = document.getElementById("product-2");

sliderLeftBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!product1.checked) {
        product1.checked = true;
    }
});

sliderRightBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!product2.checked) {
        product2.checked = true;
    }
});

/* Services slider */

var servicesListItems = document.querySelectorAll(".services-list-item > a");
var servicesItems = document.querySelectorAll(".services-item");

[].forEach.call(servicesListItems, function (el, i) {
    el.addEventListener("click", function (e) {
        e.preventDefault();
        
        [].forEach.call(servicesListItems, function (item) {
            item.classList.remove("services-current")
        });
        el.classList.add("services-current");
        [].forEach.call(servicesItems, function (item) {
            item.classList.remove("services-active")
        } );
        servicesItems[i].classList.add("services-active")
    });
}
);
