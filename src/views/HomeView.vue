<template>
  <main>
    <BarraSuperior></BarraSuperior>
    
  

  <div class="fecha">
    Fecha:06/10/2022
  </div>
  <div class="container">
    <div class="row">
      <div class="curso-cursos-progreso col-5">

        <h3 class="titulo">Dirección de Arte y Creatividad Audiovisual</h3>
        <h4 class="año-escolar">año escolar 2022/2023</h4>

      </div>

    </div>

    <div class="row">

      <div class=" col-3">
        <div class="info-tutora">
          <div class="tutora">
            Mi tutora:
            <br>
            Carmen Gutierrez Aros
          </div>

          <img class="correo" src="public/group.png" />
        </div>


        <div class="informacion-clases">

          <ul>
            <li>Tablón de profesor <div class="recuadro">2</div>
            </li>
            <li>Recursos de estudiantes<div class="recuadro">10</div>
            </li>
            <li>Tutorias</li>
            <li>Dudas y resoluciones</li>
            <li>Becas y transacciónes</li>

          </ul>
        </div>



        <div class="calificaciones">
          <img src="public/star.png" />
          Calificaciones
        </div>
      </div>

    </div>


  </div>

  
</main>
<BarraInferior></BarraInferior>
</template>

<script setup>
import BarraInferior from '../components/BarraInferior.vue';
import BarraSuperior from '../components/BarraSuperior.vue';

//Aqui van la importaciones de componentes
</script>

<style scoped lang="scss">
.container {
  max-width: none;
}

.fecha {
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  margin-top: 20px;
  font-size: small;

}

.titulo {
  font-weight: bold;
  display: flex;
  justify-content: flex-end;

}

.año-escolar {
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 200px;
}

.info-tutora {
  border-bottom: 1px black solid;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 20px;
  margin-left: 20px;
}

.tutora {

  font-weight: 500;
  font-size: 20px;

  .correo {
    width: 27px;
    height: 20px;
  }

}

.informacion-clases {
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 50px;

  ul {
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;

      .recuadro {
        background: lightgrey;
        width: 2.5em;
        text-align: center;
      }
    }
  }
}

.calificaciones {
  background: linear-gradient(to right, #60A4FF, #7DEBF2);
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-radius: 3px;
  font-size: x-large;
  font-weight: 500;

  img {
    margin-right: 20px;
  }
}
</style>
