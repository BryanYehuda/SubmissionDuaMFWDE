import UrlParser from '../../routes/url-parser';
import DicodingDB from '../../data/dicodingdb';

const Detail = {
  async render() {
    return `
        <h2>Detail Page</h2>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingDB.DetailRestaurant(url.id);
    console.log(restaurant);
  },
};

export default Detail;
