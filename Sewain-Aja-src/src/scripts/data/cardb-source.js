// rename terlebih dahulu file
import API_ENDPOINT from '../globals/api-endpoint';

class CarDBSource {
  static async cariKendaraanList() {
    const response = await fetch(API_ENDPOINT.CARI_KENDARAAN);
    const responseJson = await response.json();
    return responseJson.data;
  }

  // static async (id) {
  // const response = await fetch(API_ENDPOINT.DETAIL(id));
  // return response.json();
  // }
}

export default CarDBSource;
