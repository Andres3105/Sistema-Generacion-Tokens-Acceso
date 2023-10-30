import { LitElement, html} from 'lit-element';
import listaUsuarios from './Usuarios';
import StylesCss from "../src/HomeStyle";
class LoginToken extends LitElement {
  constructor(){
    super();
    this.usuario
    this.nuevaContrasena
    this.confirmacionContrasena
    this.valorToken = false
    this.listaUsuarios = [];
  }
  static properties = {
    valorToken : {}
  }
  static get styles(){
    return [StylesCss];
  }
  
  handleInput(event) {
    const { name, value } = event.target;
    this[name] = value;
  }
  
  recuperarContrasena(event) {
    event.preventDefault();
    if (this.validarCredenciales(this.correo, this.token)) {
      this.valorToken = true
    } else {
      alert("Credenciales incorrectas")
    }
  }
  cambiarContrasena(event){
    // Dentro del método cambiarContrasena
    if (this.nuevaContrasena === this.confirmacionContrasena) {
      const usuarios = JSON.parse(localStorage.getItem("usuarios"));
      for (let usua of usuarios) {
        if (usua.correo === this.usuario.correo && usua.nombre === this.usuario.nombre) {
          usua.contrasena = this.nuevaContrasena;
          this.usuario.contrasena = this.nuevaContrasena;
        }
      }
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      alert("Cambio de contraseña realizada con éxito");
      localStorage.removeItem(this.usuario.nombre + "_token")
      this.dispatchEvent(new CustomEvent('token-utilizado', { bubbles: true, composed: true }));
    } else {
      alert("Las contraseñas no coinciden");
    }
    
  }
  
  validarCredenciales(correo, token) {
    const usuario = this.listaUsuarios.find(
    (usuario) => usuario.correo === correo
    );
    if (usuario) {
      const obtenerTokenUsuario = JSON.parse(localStorage.getItem(usuario.nombre + "_token"))
      this.usuario = usuario
      if (obtenerTokenUsuario) {
        if (obtenerTokenUsuario.token === token) {
          return true;
        }
        console.log("Token incorrecto")
        return false;
      }else{
        console.log("Usuario no encontrado")
        return false;
      }
    } else {
      console.log('Credenciales incorrectasasda');
      return false;
    }
  }
  actualizarListaUsuarios() {
    this.listaUsuarios = JSON.parse(localStorage.getItem('usuarios'));
  }
  
  render() {
    this.actualizarListaUsuarios()
    if (this.valorToken) {
      return html`
      <div class="login-box">
        <div class="logo"><img src="https://automileniumpremium.com/wp-content/uploads/elementor/thumbs/dibujo-blanco-sin-fondo-p9vg2bdsvum4mfu06x2t76nketq97j5q7691d21jpc.png" alt="" height="100px"></div>
        <h1>Recuperar Contraseña</h1>
        <form @submit=${this.cambiarContrasena}>
          <label>Ingrese su nueva contraseña</label>
          <input type="text" name="nuevaContrasena" @input=${this.handleInput} />
          <label>Ingrese nuevamente la contraseña</label>
          <input type="text" name="confirmacionContrasena" @input=${this.handleInput} />
          <button type="submit">Recuperar</button>
        </form>
      </div>
      `
    }else{
      return html`
      <div class="login-box">
        <div class="logo"><img src="https://automileniumpremium.com/wp-content/uploads/elementor/thumbs/dibujo-blanco-sin-fondo-p9vg2bdsvum4mfu06x2t76nketq97j5q7691d21jpc.png" alt="" height="100px"></div>
        <h1>Recuperar Contraseña</h1>
        <form @submit=${this.recuperarContrasena} method="post">
          <label>Ingrese su correo</label>
          <input type="text" name="correo" @input=${this.handleInput} />
          <label>Ingrese el token generado</label>
          <input type="text" name="token" @input=${this.handleInput} />
          <button type="submit">Recuperar</button>
        </form>
      </div>
      `;
    }
  }
}

customElements.define('my-token', LoginToken);
