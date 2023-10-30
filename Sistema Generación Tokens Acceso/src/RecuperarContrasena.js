import { LitElement, html} from 'lit-element';
import listaUsuarios from './Usuarios';
import StylesCss from "../src/HomeStyle";
import md5 from 'blueimp-md5';
class RecuperarContrasena extends LitElement {
  constructor(){
    super();
    this.listaUsuarios = [];
  }
  static properties = {
    correo : {},
    contrasena : {},
    direccion : {},
    token : {}
  }
  static get styles(){
    return [StylesCss];
  }
  
  handleInput(event) {
    const { name, value } = event.target;
    this[name] = value;
  }
  
  actualizarListaUsuarios() {
    this.listaUsuarios = JSON.parse(localStorage.getItem('usuarios'));
  }
  
  recuperarContrasena(event) {
    event.preventDefault();
    if (this.generarToken(this.correo, this.direccion, this.nombre)) {
      this.token = generarCaracteresToken(10)
      const objetoUsuario = {
        usuario : this.correo,
        token : this.token
      }
      localStorage.setItem(this.nombre + "_token", JSON.stringify(objetoUsuario))
    } else {
      alert("Credenciales incorrectas")
    }
  }
  
  generarToken(correo, direccion, nombre) {
    const usuario = listaUsuarios.find(
    (usuario) => usuario.correo === correo && usuario.direccion === direccion && usuario.nombre === nombre
    );
    
    if (usuario) {
      return true;
    } else {
      console.log('Credenciales incorrectas');
      return false;
    }
  }
  
  render() {
    this.actualizarListaUsuarios()
    const handleClick  = () =>{
      this.dispatchEvent(new CustomEvent('token-generado', { bubbles: true, composed: true }));
    }
    if (!this.token) {
      return html`
      <div class="login-box">
        <div class="logo"><img src="https://automileniumpremium.com/wp-content/uploads/elementor/thumbs/dibujo-blanco-sin-fondo-p9vg2bdsvum4mfu06x2t76nketq97j5q7691d21jpc.png" alt="" height="100px"></div>
        <h1>Recuperar Contraseña</h1>
        <form @submit=${this.recuperarContrasena} method="post">
          <label>Ingrese su correo</label>
          <input type="text" name="correo" @input=${this.handleInput} />
          <label>Ingrese su dirección</label>
          <input type="text" name="direccion" @input=${this.handleInput} />
          <label>Ingrese su nombre</label>
          <input type="text" name="nombre" @input=${this.handleInput} />
          <button type="submit">Recuperar</button>
        </form>
      </div>
      `
    }else{
      return html`
      <div class="login-box">
        <div class="token">
          <span>Su token ha sido generado:</span>
          <span>${this.token}</span>
        </div>
        <button @click=${handleClick}>Continuar</button>
      </div>
      
      `;
    }
  }
}
const generarCaracteresToken = (longitudToken) => {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!°¿+*-<>$%&/&%|_';
  let cadena = '';
  for (let c = 0; c < longitudToken; c++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    cadena += caracteres.charAt(indice);
  }
  return (md5(cadena));
}

customElements.define('my-recuperar', RecuperarContrasena);
