const db = require('../config/db.config');

const getBanner = async () => {
   const [rows] = await db.query('SELECT banner_name, banner_image, description FROM banners');
   return rows;
}

const getService = async () => {
   const [rows] = await db.query('SELECT service_code, service_name, service_icon, service_tarif FROM services');
   return rows;
}

module.exports = {
   getBanner, getService
}