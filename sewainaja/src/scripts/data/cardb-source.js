/* eslint-disable no-unused-vars */
import API_ENDPOINT from '../globals/api-endpoint';

class CarDBSource {
  static async listData() {
    const response = await fetch(API_ENDPOINT.CARI_KENDARAAN);
    const responseJson = await response.json();
    return responseJson.data;
  }

  // static async detailRestaurant(id) {
  // const response = await fetch(API_ENDPOINT.DETAIL(id));
  // return response.json();
  // }
}

export default CarDBSource;
