function calculadora_precio() {
    var multiplicador;
    var total;
    var cantidad = document.getElementById("cantidad").value;
    var categoria = document.getElementById("categoria").value;

    if (categoria == 'Estudiante'){
        multiplicador = 0.2;
    }else if (categoria == 'Trainee'){
        multiplicador = 0.5;
    }else if (categoria == 'Juniors'){
        multiplicador = 0.85;
    }

    total = 200 * cantidad * multiplicador;
    console.log(cantidad);
    console.log(multiplicador);
    console.log(total);

    document.getElementById('a-pagar').innerHTML = 'Total a Pagar: $ '+total;
  }

  var n = document.getElementById("borrar");
  n.addEventListener("click", reiniciar);

  function reiniciar()
  {
    document.location.reload();
  }
