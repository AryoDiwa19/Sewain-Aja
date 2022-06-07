/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */

import CarData from '../../globals/carData';
import UrlParser from '../../routes/url-parser';
import CarDBSource from '../../data/cardb-source';
import createCariKendaraanTemplate from '../templates/template-creator';

const CariKendaraan = {
  async render() {
    return `
      
      `;
  },

  async afterRender() {
    const cars = await CarDBSource.listData();
    const carContainer = document.querySelector('#cari_kendaraan');
    cars.forEach((data) => {
      carContainer.innerHTML += createCariKendaraanTemplate(data);
    });
  },
};

export default CariKendaraan;
