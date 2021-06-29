import API_ENDPOINT from '../globals/api-endpoint';

class DicodingDB {
  static async HomePage() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async DetailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log(responseJson.restaurant); // Opsional, hanya untuk cek data di konsol.
    return responseJson.restaurant;
  }
}

export default DicodingDB;
