<template>
  <main>
    <BarraSuperior></BarraSuperior>

    <div class="fecha">
      <Fecha></Fecha>
    </div>
    <div class="container">
      <div class="row">
        <div class="curso-cursos-progreso col-8 col-md-5 ">

          <h3 class="titulo">{{ course.course_name }}</h3>
          <h4 class="ano-escolar">año escolar {{ course.year }}</h4>

        </div>
        <div class="col-4 col-md-2 ">

          <div class="mis-cursos boton-azul">
            Mis cursos
          </div>

        </div>

        <div class="col-md-5">
          <BarraCurso :progreso="course.year_progress.percent" :marcadores="course.year_progress.periods"></BarraCurso>
        </div>
      </div>

      <div class="row">

        <div class=" col-12 col-md-3">
          <div class="info-tutora">
            <div class="tutora">
              Mi tutora:
              <br>
              Carmen Gutierrez Aros
            </div>
            <a href="/mensajeria">
              <img class="correo" src="/group.png" />
            </a>
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



          <div class="calificaciones boton-azul">
            <img src="/star.png" />
            Calificaciones
          </div>
        </div>

        <div class="col-hidden col-md-2">

        </div>

        <div class="linea row col-md-7">

          <div class=" asignatura col-md-6">

            <strong>Asignatura</strong>

            <div class="lado-izquierdo">

              <template v-for="asignatura in asignaturas">
                <div class="composicion">
                  <a href="/composicion">
                    <span class="linea-color">{{ asignatura.name }}</span>
                  </a>
                  <img src="/flecha-abajo.png" />
                </div>

                <ul class="lista lineas-lista">
                  <li v-for="modulo in asignatura.modules"> <span>{{modulo.name}}</span></li>
                </ul>
              </template>

            </div>


          </div>

          <div class="recursos col-md-6">
            <img src="/vector.png" />

            <div class="referencias-año-escolar boton-azul">
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
                <li>Foro <div class="recuadro">{{ course.mensajes_foro }}</div>
                </li>
                <li> Estudiantes conectados<div class="recuadro">{{ course.estudiantes_conectados }}</div>
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
import Fecha from '../components/Fecha.vue';
import { getCourse, getSubjects } from '../javascript/services/apiMock';

//Aqui van la importaciones de componentes
</script>

<script>
export default {
  computed: {
    course() {
      return getCourse()
    },
    asignaturas() {
      return getSubjects()
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  max-width: none;
}

.titulo {
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  text-align: right;

  @include media-breakpoint-down(md) {
    text-align: left;
  }
}

.ano-escolar {
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 100px;

  @include media-breakpoint-down(md) {
    justify-content: flex-start;
    margin-bottom: 50px;
  }
}

.info-tutora {
  border-bottom: 1px black solid;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 20px;
  margin-left: 20px;

  @include media-breakpoint-down(md) {
    margin-top: 100px;
  }
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
    align-items: center;

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
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 5px;
  border-radius: 3px;
  font-size: x-large;
  font-weight: 500;

  img {
    margin-right: 20px;
  }
}

.mis-cursos {
  padding: 20px 5px;
  border-radius: 3px;
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

  @include media-breakpoint-down(md) {
    border-top: none;
    margin-top: 10px;
  }
}

.lista {
  li {
    list-style: none;
    margin: 10px;
  }
}

.lado-izquierdo {

  >div {
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    >span {
      width: 80%;
    }
  }

  div.composicion {
    a {
      color: initial;
    }
  }
}

.referencias-año-escolar {
  margin-top: 7px;
  padding: 15px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border-radius: 3px;
  font-size: large;
}

.recursos {
  @include media-breakpoint-down(md) {
    margin-top: 20px;
  }
}

.acceso-biblioteca {
  text-align: center;
  margin: 10px 0 100px 0;

  @include media-breakpoint-down(md) {
    margin-bottom: 50px;
  }

}

.aula-virtual {
  text-align: center;
  border-bottom: 1px black solid;
  padding-bottom: 15px;
  font-weight: bold;
  margin-bottom: 10px;

}
</style>
