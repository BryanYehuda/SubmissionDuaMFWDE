import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurants) => `
<h2 class="content-title-detail">${restaurants.name}</h2>
<img class="content-thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" />
<h3>Information</h3>
<div class="content-rating-detail">Rating :${restaurants.rating}</div>
<div class="content-location-detail">Lokasi : ${restaurants.city}</div>
</div>
<div class="restaurant-overview">
<h3>Description</h3>
<p>${restaurants.description}</p>
`;

const createRestaurantItemTemplate = (restaurants) => `
<article class="content-item ${restaurants.Id}" id="maincontent">
<img class="content-thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}">
<div class="content-paragraph">
    <p>
        <div class="content-rating">Rating : ${restaurants.rating}</div>
        <div class="content-location">Lokasi : ${restaurants.city}</div>
    </p>
    <h3 class="content-title"><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name} <br> (Klik untuk detail)</a></h3>
</div>
</article>
  `;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };