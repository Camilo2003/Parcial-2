import React from 'react';
import './App.css'; // Aquí estoy importando el archivo CSS

function PortafolioPersonal() {
  return (
    <div>
      <header>
        <h1>Mi Portafolio Personal <i className="fas fa-user-tie"></i></h1>
      </header>

      <section id="resumen">
        <h2>Resumen - Descripción Corta Profesional <i className="fas fa-briefcase"></i></h2>
        <p>
          Soy Camilo Iragorri, un Ingeniero Multimedia apasionado por la tecnología y el diseño. 
          Tengo experiencia en desarrollo web, diseño gráfico, y producción de dibujos animados. 
          Mi objetivo es crear soluciones innovadoras que impacten positivamente a los usuarios.
        </p>
      </section>

      <section id="links">
  <h2>Links (Ejercicios en Clase) <i className="fas fa-link"></i></h2>
  <p>A continuación, algunos enlaces a ejercicios realizados en clase:</p>
  <ul>
    <li><a href="https://docs.google.com/document/d/1eKZzbZqbBlcxF_OvCqF71tF0-AjFVI8azkoPxAuCcdQ/edit?usp=sharing">Ejercicio 1</a></li>
    <li><a href="https://github.com/Camilo2003/Tarea1web/blob/main/index.html">Ejercicio 2</a></li>
    <li><a href="https://github.com/Camilo2003/Tarea2web/blob/main/Tarea-2-web">Ejercicio 3</a></li>
    <li><a href="https://github.com/Camilo2003/javascript-2-martes.git">Números iguales y cuál es mayor</a></li>
    <li><a href="https://github.com/Camilo2003/Clase-10.git">Cards</a></li>
  </ul>
</section>

      <section id="redes">
        <h2>Redes Sociales <i className="fas fa-share-alt"></i></h2>
        <p>Sígueme en mis redes sociales:</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/camilo-iragorri2003"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
          <li><a href="https://github.com/Camilo2003"><i className="fab fa-github"></i> GitHub</a></li>
        </ul>
      </section>

      <section id="habilidades">
        <h2>Habilidades <i className="fas fa-cogs"></i></h2>
        <h3>Habilidades Duras <i className="fas fa-wrench"></i></h3>
        <ul>
          <li><i className="fas fa-code"></i> Desarrollo Web (HTML, CSS, JavaScript)</li>
          <li><i className="fas fa-pencil-ruler"></i> Diseño Gráfico (Adobe Photoshop, Illustrator)</li>
          <li><i className="fas fa-laptop-code"></i> Programación (Python, Java)</li>
        </ul>

        <h3>Habilidades Blandas <i className="fas fa-users"></i></h3>
        <ul>
          <li><i className="fas fa-comments"></i> Comunicación efectiva</li>
          <li><i className="fas fa-hands-helping"></i> Trabajo en equipo</li>
          <li><i className="fas fa-clock"></i> Gestión del tiempo</li>
        </ul>
      </section>

      <section id="proyectos">
        <h2>Proyectos <i className="fas fa-project-diagram"></i></h2>
        <ul>
          <li><a href="https://uao-my.sharepoint.com/:v:/g/personal/victor_iragorri_uao_edu_co/EYqB5WEU_MlNtFcLvtXgUOoBZcLBBzUyHsnZbFpjrIBz_Q?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=zsR9wZ">Proyecto 1: Dibujo animado</a></li>
          <li><a href="https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fjpeg&attachment_token=AOo0EEXssk8shbsEhnM7Txz%2B7IbprFn9X8P6jWO3loyOTZjR35PqUcvU1%2F8u%2FLFW2O4%2F8UX%2BgoJtw6jVhoUKQWhz0j9%2FOt8qZNTXjbwl0InMm3Sl5a5kI2DfiON9onOv1ozctzifLgyc8yecWSGLH1AHhRV1tGUbhjJuJ3CvbH9byr7GmKeXdV1FcA4zbGg0eqp1TeICXJW9g7l%2BrAsxRbPqzJAEkaqxWXgST5onk%2BNN7OxrsTldPdcd7QYEOC9JYuC7tNWaS7X4MIC3j5ftuDxBS5hbjjPtQiIsoRJVrdgbdoMMeqPTGce9YXHCRK1QImWKJlbySyTpgMZHnvKSAJxPIwqw6xcPQiwUCXZLOTheHnE3ZozY5biipjktN1%2BUd3txL6ktxWn48dd8W1Oh698TJBb8A2yT4qpSEW1xysDjykLAO4qhnbnPklYFj3f76aRWXVMBtlHggaryZJeTrqqB0L8%2FY14fUgBhxjOOa6gpTXe0%2FRrq%2BZ9mOrSKPyefily5RzySZj1Su27fIEjAMPgjDvHcxrr%2BzbJdLKUZFecgAMfxZBieV9IU49%2FWXJVJAhqW4GE06pm3Epz7FhUL1Bs%3D">Proyecto 3: Modelado 3D Scifi-Robot</a></li>
        </ul>
      </section>

      <section id="gitignore">
        <h2>Git Ignore (Paso a Paso) <i className="fas fa-file-alt"></i></h2>
        <p>En un proyecto de programación, el archivo `.gitignore` es utilizado para especificar qué archivos o directorios deben ser ignorados por Git:</p>
        <pre>
          <code>
            # Ignorar todos los archivos .log
            *.log

            # Ignorar la carpeta node_modules
            node_modules/

            # Ignorar archivos de configuración del entorno
            .env
          </code>
        </pre>
      </section>

      <footer>
        <p>&copy; 2024 Camilo Iragorri. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default PortafolioPersonal;
