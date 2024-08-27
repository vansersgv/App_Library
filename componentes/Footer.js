import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">        
        <div className="footer-links">
          <div className="footer-column">
            <a href="/quienes-somos">Quiénes somos</a>
            <a href="/trabaja-con-nosotros">Trabajá con nosotros</a>
            <a href="/contacto">Contacto</a>
            <a href="/sucursales">Sucursales</a>
          </div>
          <div className="footer-socials">
            
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="/imagenes/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="/imagenes/instagram.png" alt="Instagram" />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="/imagenes/gorjeo.png" alt="WhatsApp" />
            </a>
          </div>
          <div className="footer-column">
            <a href="/compra-online">Compra Online</a>
            <a href="/atencion-al-cliente">Atención al cliente</a>
            <a href="/preguntas-frecuentes">Preguntas frecuentes</a>
            <a href="/terminos-y-condiciones">Términos y condiciones</a>
          </div>          
        </div>
        <p>© Biblioteca Fantasía. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;