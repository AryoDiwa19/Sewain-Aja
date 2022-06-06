import Home from '../views/pages/home';
import CariKendaraan from '../views/pages/cari_kendaraan';
import Laporkan from '../views/pages/laporkan';
import Sewakan from '../views/pages/sewakan';
import Konfirmasi from '../views/pages/konfirmasi_order';
import Selesai from '../views/pages/selesai_transaksi';
import Daftar from '../views/pages/daftar';
import Masuk from '../views/pages/masuk';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/cari_kendaraan': CariKendaraan,
  '/konfirmasi_order': Konfirmasi,
  '/cari_kendaraan/konfirmasi_order/selesai_transaksi': Selesai,
  '/laporkan': Laporkan,
  '/sewakan': Sewakan,
  '/daftar': Daftar,
  '/masuk': Masuk,
};

export default routes;
