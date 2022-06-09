/* eslint-disable no-tabs */
const KonfirmasiOrder = {
  async render() {
    return `
		<div class="container pt-3 pb-5">
		<div class="card konfirmasi mx-auto p-3">
			<h2>Konfirmasi Pembayaran</h2>
			<p>Silahkan melakukan konfirmasi pembayaran dengan melengkapi form berikut ini lalu submit .</p>
			<form action="">
				<div class="form-group">
					<label for="id_transaksi">Masukkan ID Transaksi :</label>
					<input type="text" class="form-control" id="id_transaksi">
				</div>
				<div class="form-group">
					<label for="tgl_pembayaran">Tanggal Pembayaran :</label>
					<input type="text" class="form-control" id="tgl_pembayaran">
				</div>
				<div class="form-group">
					<label for="nama_rekening">Nama Pembayar / Nama Rekening :</label>
					<input type="text" class="form-control" id="nama_rekening">
				</div>
				<div class="form-group">
					<label for="nama_bank">Nama Bank :</label>
					<input type="text" class="form-control" id="nama_bank">
				</div>
				<div class="form-group">
					<label for="bukti_transfer">Upload bukti transfer </label>
					<input type="file" class="form-control-file" id="bukti_transfer">
				</div>
				<button type="submit" class="btn btn-primary" style="width: 100%">Submit</button>
			</form>
		</div>
	</div>
    `;
  },
};

export default KonfirmasiOrder;
