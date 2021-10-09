const recommendedNowButton = document.querySelector(".input-section__recomended");
const inputCity = document.querySelector(".input-section__text");
const infoSection = document.querySelector(".output-section");
const recommendedPlaces = document.querySelector("#recommended-places").content.querySelector(".recommended-places").cloneNode(true);
const cityInfo = document.querySelector("#description").content.querySelector(".description").cloneNode(true);
const cityForm = document.querySelector(".input-section__form");


recommendedNowButton.addEventListener('click', () => {
    infoSection.firstChild.remove();
    infoSection.prepend(recommendedPlaces)
    const cityImage = document.querySelector(".recommended-places__image");
    cityImage.addEventListener('click', () => {
        infoSection.firstChild.remove();
        infoSection.prepend(cityInfo);
    });
});



cityForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    infoSection.firstChild.remove();
    infoSection.prepend(cityInfo);
});
