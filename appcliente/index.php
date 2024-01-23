<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicios AJAX</title>
  <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
  <link rel="stylesheet" href="public/css/style.css">
  <script src="public/js/auxiliar.js" defer></script>
  <script src="public/js/index.js" defer></script>
</head>
<body>
  
  <h1>Lista de tareas</h1>
  
  <!-- <form id="frmDatos">
    <label for="txtMensaje">Mensaje</label>
    <input type="text" name="txtMensaje" id="txtMensaje">
    <button type="button" id="btnEnviar">Enviar datos</button>
  </form> -->

  <div class="partido-mitad">
    <div>
      <h2>Formulario de tareas</h2>
      <form id="frmTareas">
      <label for="txtTarea">Nueva tarea</label>
      <input type="text" name="txtTarea" id="txtTarea">
      <br>
      <label for="txtPrioridad">Prioridad</label>
      <select name="txtPrioridad" id="txtPrioridad">
        <option value="0">0 - Baja</option>
        <option value="1">1 - Alta</option>
        <option value="2">2 - Urgente</option>
      </select>
      <br>
      <fieldset>
        <legend>Acciones</legend>
        <button type="button" id="btnCrearTarea">Crear tarea</button>
        <button type="button" id="btnCrearTabla">Crear tabla</button>
        <button type="button" id="btnListarTareas">Listar tareas</button>
      </fieldset>
  </form>
    </div>
    <div>
      <h2>Notificaciones</h2>
      <p class="notice" id="pRespuesta"></p>
    </div>
  </div>

  <table>
    <caption>Lista de tareas</caption>
    <thead>
      <tr>
        <th>ID</th>
        <th>Tarea</th>
        <th>Prioridad</th>
      </tr>
    </thead>
    <tbody id="tbodyTareas">
    </tbody>
    <tfoot>
      <tr>
        <th colspan="3">Nº de tareas: 0</th>
      </tr>
    </tfoot>
  </table>

</body>
</html>