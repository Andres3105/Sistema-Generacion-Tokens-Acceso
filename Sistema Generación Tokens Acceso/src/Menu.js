import { LitElement, html, css} from 'lit-element';
import stylesCss from './MenuStyle'
export class home extends LitElement{
    constructor(){
        super();
        this.cambiarComponente = false
    }
    static properties = {
        usuario: { type: Object },
        cambiarComponente : {}
    };
    
    static get styles(){
        return [
            stylesCss
        ]
    }
    
    render(){
        console.log(this.usuario)
        const handleClick = (opcion, event) =>{
            if (opcion === "perfil") {
                this.cambiarComponente = !this.cambiarComponente
            }else{
                location.reload()
            }
        }
        return html`
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" >
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&display=swap" rel="stylesheet">
        <header>
            <div class="nav1">
                <img src="https://automileniumpremium.com/wp-content/uploads/elementor/thumbs/dibujo-blanco-sin-fondo-p9vg2bdsvum4mfu06x2t76nketq97j5q7691d21jpc.png" alt="">
                <h1>TOKEN</h1>
            </div>
            
            <div class="nav2">
                <a @click=${(e) => handleClick("perfil", e)} href="#">Perfil</a>
                <a @click=${(e) => handleClick("cerrarSesion", e)} href="#">Cerrar Sesion</a>
            </div>
        </header>
        
        <div class="container">
            ${!this.cambiarComponente ? html`<div class="mitad1">
                <div class="content-mitad1">
                    <h1>BIENVENIDO ${this.usuario.nombre}</h1>
                    <p>"¡Bienvenido a tu destino automotriz! Descubre la excelencia en carros con nosotros. 
                        Explora, compara y elige tu vehículo ideal. Tu aventura en la carretera comienza aquí."
                    </p>
                </div>
            </div>
            <div class="mitad2">
                <img src="https://pngimg.es/d/audi_PNG1736.png" alt="">
            </div>`: html`<div class="datos-perfil">
                <div class="imagen">
                    <img src=${this.usuario.img} alt="Imagen del usuario">
                </div>
                <div class="datos">
                    <span>Nombre: ${this.usuario.nombre}</span>
                    <span>Correo: ${this.usuario.correo}</span>
                    <span>Direccion: ${this.usuario.direccion}</span>
                </div>
            </div>`}
        </div>
        `
    }
}
customElements.define("my-menu", home)