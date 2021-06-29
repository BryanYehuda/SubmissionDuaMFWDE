import UrlParser from '../../routes/url-parser';
import DicodingDB from '../../data/dicodingdb';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingDB.DetailRestaurant(url.id);
    console.log(restaurant);
  },
};

export default Detail;
