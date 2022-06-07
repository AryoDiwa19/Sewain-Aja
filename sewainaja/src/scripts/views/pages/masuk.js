/* eslint-disable no-tabs */
const Masuk = {
  async render() {
    return `
      <style>
      form{
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: sans-serif;
      }
      .login{
        background-color: #fff;
        width: 350px;
        text-align: center;
        padding: 40px;
        box-sizing: border-box;
        border-radius: 10px;
      }
      
      .login h2{
        margin: 0 0 20px; 
        width: 100%;
        margin-bottom: 25px;
      }
      
      .login .input-group{
        position: relative;
        width: 100%;
        margin-bottom: 25px;
      }
      
      .login .input-group input{
        height: 50px;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        font-size: 18px;
        border: 3px solid black;
        border-radius: 10px;
      }
      
      .login .input-group input[type="submit"]{
        background-color: rgb(17, 233, 233);
        border: none;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        width: 35%;
        transition: 0.5s;
      }
      
      .login .input-group input[type="submit"]:hover{
        width: 100%;
        background-color: rgba(240, 179, 13, 0.966);
        color: #fff;
      }
      
      .daftar-link a{
        color: rgb(153, 130, 2);
      }
      </style>
      <form>
	        <div class="login">
            <h2> Silakan Login </h2>
            <div class="input-group">
              <input type="text" placeholder="Username/Email" required="">
            </div>
            <div class="input-group">
              <input type="password" placeholder="Password" required="">
            </div>
            <div class="input-group">
              <input type="submit" value="Login">
            </div>
            <div class="daftar-link">
              Belum daftar? <a href="#daftar">Daftar Sekarang</a>
            </div>
	        </div>
      </form>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Masuk;
