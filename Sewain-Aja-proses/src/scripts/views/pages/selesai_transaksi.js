const Selesai = {
  async render() {
    return `
		<div class="container pt-3 pb-5">
			<div class="card selesai mx-auto p-3">
				<i class="material-icons text-center mx-auto">done</i>
				<h3 class="pt-4">Bukti pembayaran Anda telah terkirim.</h3>
				<p>Silahkan hubungi nomor WhatsApp pemilik untuk pengambilan kendaraan sewa.</p>
				<div class="button-whatsapp">
					<a href="">
						<i class="fa fa-whatsapp p-2 text-center" style="font-size:24px">  Chat Via WhatsApp</i>
					</a>
				</div>
			</div>
		</div>
		`;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Selesai;
