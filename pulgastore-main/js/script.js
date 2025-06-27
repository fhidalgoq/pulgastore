 function mostrarFecha() {
      const fecha = new Date();

      const diasSemana = [
        "domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"
      ];
      const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
      ];

      const diaSemana = diasSemana[fecha.getDay()];
      const dia = fecha.getDate();
      const mes = meses[fecha.getMonth()];
      const anio = fecha.getFullYear();

      const hora = fecha.getHours();
      const minutos = fecha.getMinutes();
      const segundos = fecha.getSeconds();

      const mensaje = `Hoy es ${diaSemana} ${dia} de ${mes} de ${anio}, y son las ${hora} horas, ${minutos} minutos con ${segundos} segundos.`;

      document.getElementById("salida").innerText = mensaje;
    }

    // Inicia la actualización automática al cargar la página
    window.onload = function() {
      mostrarFecha(); // Mostrar al cargar
      setInterval(mostrarFecha, 1000); // Actualizar cada segundo
    }

    function actualizarTiempoRestante() {
      const ahora = new Date();
      const finDeAnio = new Date(ahora.getFullYear(), 11, 31, 23, 59, 59); // 31 diciembre

      const diferencia = finDeAnio - ahora;

      if (diferencia <= 0) {
        document.getElementById("tiemporestante").innerText = "¡El año ha terminado!";
        return;
      }

      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

      const texto = `Faltan ${dias} días, ${minutos} minutos y ${segundos} segundos para que termine el año.`;
      document.getElementById("tiemporestante").innerText = texto;
    }

    // Iniciar al cargar y actualizar cada segundo
    actualizarTiempoRestante();
    setInterval(actualizarTiempoRestante, 1000);