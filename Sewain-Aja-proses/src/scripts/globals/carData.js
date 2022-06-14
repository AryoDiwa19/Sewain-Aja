class CarData {
  static cariKendaraanList() {
    return fetch('https://private-c9196-aryo.apiary-mock.com/users')
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.data) {
          return Promise.resolve(responseJson.data);
        }
        return Promise.reject('Tidak Ditermukan');
      });
  }
}
export default CarData;
