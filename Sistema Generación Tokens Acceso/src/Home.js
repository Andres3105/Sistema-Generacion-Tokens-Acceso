import { LitElement, html } from 'lit-element';
import StylesCss from "../src/HomeStyle";
import './RecuperarContrasena';
import './LoginToken';
import listaUsuarios from './Usuarios'
import './Menu'
if (!localStorage.getItem("usuarios")) {
  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios))
}
class Home extends LitElement {
  constructor() {
    super();
    this.usuario = {}
    this.componente = null;
    this.listaUsuarios = [];
    this.addEventListener('token-generado', () => {
      this.componente = html`<my-token></my-token>`;
    });
    this.addEventListener('token-utilizado', () => {
      this.componente = null;
    });
  }
  static properties = {
    correo: {},
    contrasena: {},
    direccion: {},
    nombre: {},
    componente: {},
    usuario : {type :Object}
  };
  
  actualizarListaUsuarios() {
    this.listaUsuarios = JSON.parse(localStorage.getItem('usuarios'));
  }
  
  handleInput(event) {
    const { name, value } = event.target;
    this[name] = value;
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const usuario = this.validar(this.correo, this.contrasena);
    if (usuario) {
      alert('Inicio de sesión correcto');
      this.usuario = usuario
      this.componente = html`<my-menu .usuario =${this.usuario}></my-menu>`
    } else {
      alert('Credenciales incorrectas');
    }
  }
  
  cambiarComponente(nombreComponente) {
    if (nombreComponente === 'recuperar') {
      this.componente = html`<my-recuperar></my-recuperar>`;
    }
  }
  
  validar(correo, contrasena) {
    return this.listaUsuarios.find((usuario) => usuario.correo === correo && usuario.contrasena === contrasena);
  }
  
  static get styles() {
    return [StylesCss];
  }
  
  render() {
    this.actualizarListaUsuarios()
    if (!this.componente) {
      return html`
      <div class="login-box">
        <div class="logo"><img src="https://automileniumpremium.com/wp-content/uploads/elementor/thumbs/dibujo-blanco-sin-fondo-p9vg2bdsvum4mfu06x2t76nketq97j5q7691d21jpc.png" alt="" height="100px"></div>
        <h1>Login</h1>
        <form @submit=${this.handleSubmit} method="post">
          <!-- USERNAME INPUT -->
          <input type="text" @input=${this.handleInput} name="correo" placeholder="Correo">
          <input type="password" @input=${this.handleInput} name="contrasena" placeholder="Contraseña">
          <button type="submit">Enviar</button>
        </form>
        <div><a @click=${() => this.cambiarComponente('recuperar')}>¿Has olvidado tu contraseña?</a></div>
      </div>
      `;
    } else {
      return html`${this.componente}`;
    }
  }
}

customElements.define('my-home', Home);
