document.addEventListener("DOMContentLoaded", function () {
    typeText("#title-text", "Soy Gabriel Jaramillo", 100);
    typeText("#subtitle-text", "Estudiante y Programador en proceso", 100);
  });
  
  function typeText(selector, text, speed) {
    let i = 0;
    const element = document.querySelector(selector);
    element.textContent = "";
    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        element.classList.remove('typing'); // Remove typing class once text is fully written
      }
    }
    type();
  }
  