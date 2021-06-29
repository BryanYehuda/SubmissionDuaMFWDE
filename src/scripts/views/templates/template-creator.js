import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurants) => `
<h2 class="movie__title">${restaurants.name}</h2>
<img class="movie__poster" ${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" />
<div class="movie__info">
<h3>Information</h3>
  <h4>Tagline</h4>
  <h4>Rating</h4>
  <p>${restaurants.rating}</p>
  <h4>Lokasi</h4>
  <p>${restaurants.city}</p>
</div>
<div class="movie__overview">
  <h3>Description</h3>
  <p>${restaurants.description}</p>
</div>
`;

const createRestaurantItemTemplate = (restaurants) => `
<article class="content-item ${restaurants.Id}" id="maincontent">
<img class="content-thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}">
<div class="content-paragraph">
    <p>
        <div class="content-rating">Rating : ${restaurants.rating}</div>
        <div class="content-location">Lokasi : ${restaurants.city}</div>
    </p>
    <h3 class="content-title">${restaurants.name}</h3>
</div>
</article>
  `;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
