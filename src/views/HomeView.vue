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
        <div class="col-2">

          <div class="mis-cursos">
            Mis cursos
          </div>

        </div>

        <div class="col-5">
          <BarraCurso></BarraCurso>
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

            <ul class="lista-elementos ">
              <li>Tablón de profesor<div class="recuadro">2</div>
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

        <div class="col-2">

        </div>

        <div class="linea row col-7">

          <div class=" asignatura col-6">

            <strong>Asignatura</strong>

            <div class="lado-izquierdo">

              <div class="composicion">
                <span class="linea-color">Composición</span>
                <img src="public/flecha-abajo.png" />
              </div>

              <ul class="lista lineas-lista">
                <li> <span>Conocimientos de la composición</span></li>
                <li><span>Cuerpo y estructura</span></li>
                <li><span>3D</span></li>

              </ul>

              <div>
                Componentes visuales de una pieza<br>gráfica: la imagen
                <img src="public/flecha.png" />
              </div>

              <div>
                Componentes visuales de una pieza <br>gráfica: copy
                <img src="public/flecha.png" />
              </div>

              <div>
                Utilización de la composición para potenciar <br>la idea creativa
                <img src="public/flecha.png" />
              </div>

              <div>
                Componentes visuales de una pieza gráfica:<br> el logotipo
                <img src="public/flecha.png" />
              </div>

            </div>



          </div>

          <div class="col-6">
            <img src="public/vector.png" />

            <div class="referencias-año-escolar">
              Recursos para el año escolar
            </div>

            <div class="acceso-biblioteca">
              Acceso biblioteca
            </div>

            <div class="aula-virtual">
              Aula virtual
            </div>

            <div class="estudiantes">

              <ul class="lista-elementos">
                <li>Foro <div class="recuadro">0</div>
                </li>
                <li> Estudiantes conectados<div class="recuadro">15</div>
                </li>
                <li>Lista de alumnos aula 3</li>

              </ul>


            </div>

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
import BarraCurso from '../components/BarraCurso.vue';

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
  margin-bottom: 100px;
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

.lista-elementos {
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

.informacion-clases {
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 50px;


}

.calificaciones {
  background: linear-gradient(to right, #7DEBF2, #60A4FF, );
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

.mis-cursos {
  background: grey;
  height: 70px;
  border-radius: 3px;
  background: linear-gradient(to right, #7DEBF2, #60A4FF);
  font-size: x-large;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
}

.mis-cursos,
.titulo {
  margin-top: 40px;
}

.linea {
  border-top: 1px black solid;
  padding-top: 30px;
}

.lista {
  li {
    list-style: none;
    margin: 10px;
  }
}

.lado-izquierdo {

  div {
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div.composicion {
    justify-content: unset;
  }
}

.referencias-año-escolar {
  background: linear-gradient(to right, #7DEBF2, #60A4FF);
  margin-top: 7px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border-radius: 3px;
  font-size: large;
}

.acceso-biblioteca {
  text-align: center;
  margin: 10px 0 100px 0;

}

.aula-virtual {
  text-align: center;
  border-bottom: 1px black solid;
  padding-bottom: 15px;
  font-weight: bold;
  margin-bottom: 10px;

}
</style>
