// rename terlebih dahulu file
import API_ENDPOINT from '../globals/api-endpoint';

class CarSource {
  static async carlist() {
    const response = await fetch(API_ENDPOINT.LISTCAR);
    const responseJson = await response.json();
    return responseJson;
  }

  // static async (id) {
  // const response = await fetch(API_ENDPOINT.DETAIL(id));
  // return response.json();
  // }
}

export default CarSource;
