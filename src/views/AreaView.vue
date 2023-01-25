<template>
    <main class="area">
        <BarraSuperior></BarraSuperior>

        <div class="area-personal row">
            <div class="titulos col-md-3">
                <div class="titulo">
                    <h2>Área personal</h2>
                    <h4>Cambio de datos y becas</h4>
                </div>
            </div>

            <div class="seccion-foto col-md-2">
                <FotografiaAlumno></FotografiaAlumno>
            </div>

            <div class="cursos-alumno col-md-7">
                <div class="matricula">
                    Cursos Matriculados 2022/2023
                </div>

                <div class="cursos-matriculados">
                    <div>
                        {{ titulo }}
                    </div>

                    <div class="cursos-matriculados">
                        {{ curso }}
                    </div>

                </div>


            </div>
        </div>

        <div class="datos-personales row">
            <div class=" datos-izquierda col-md-5">
                <div class="nombre-input">
                    Nombre
                    <input class="boton-input" type="text" :value="informacionUsuario.name" />
                </div>

                <div class="nombre-input">
                    Apellidos
                    <input class="boton-input" type="text" :value="informacionUsuario.lastname" />
                </div>

                <div class="nombre-input">
                    Telefono
                    <input class="boton-input" type="text" :value="informacionUsuario.tlf" />
                </div>

            </div>

            <div class="col-md-1"></div>

            <div class="parte-derecha col-md-6">
                <div class="nombre-input">
                    DNI
                    <input class="boton-input" type="text" :value="informacionUsuario.dni" />
                </div>

                <div class="nombre-input">
                    Dirección
                    <input class="boton-input" type="text" :value="informacionUsuario.address" />
                </div>

                <div class="nombre-input">
                    Email
                    <input class="boton-input" type="text" :value="informacionUsuario.email" />
                </div>

                <div class="boton-guardar">

                    <button class="boton-azul">Guardar</button>

                </div>

            </div>
        </div>

        <div class="row">
            <div class="contrato col-md-5">
                <div class="elementos-pdf">
                    <div class="matricula">
                        <strong>Matrícula</strong>
                    </div>
                    <div class="descarga">
                        Descargar copia en PDF
                        <img src="/descarga.png" />
                    </div>
                </div>
            </div>

            <div class="col-md-1"></div>

            <div class="administracion col-md-6">
                <a href="/mensajeria">
                    <span>Contactar con administracion</span>
                    <img src="/group.png" />
                </a>
            </div>
        </div>

        <div class="row">
            <div class="becas col-md-5">
                <div>
                    <strong>Becas solicitadas</strong>
                </div>
                <div class="linea">
                    <span></span>
                </div>
            </div>

        </div>

        <div class="ayuda">
            <img src="/ayuda2.png" />
            Ayuda
        </div>




        <BarraInferior></BarraInferior>

    </main>
</template>

<script setup>
import BarraInferior from '../components/BarraInferior.vue';
import BarraSuperior from '../components/BarraSuperior.vue';
import FotografiaAlumno from '../components/FotografiaAlumno.vue';
import { getCourse, getUser } from '../javascript/services/apiMock';
</script>

<script>
export default {
    data() {

    },
    computed: {
        informacionUsuario() {
            return getUser()
        },

        titulo() {
            return getCourse().course_name
        },
        curso() {
            return getCourse().grade_name
        }

    }


}
</script>

<style scoped lang="scss">
.area-personal {
    margin-bottom: 100px;

    .titulos {
        display: flex;
        justify-content: space-between;
        margin: 30px 0 0 0;
        padding: 0 20px;

        h2 {
            font-weight: bold;
        }
    }

    .seccion-foto {
        display: flex;
        align-items: center;
        max-width: 275px;
    }

    .cursos-alumno {
        margin-top: 30px;

        .matricula {
            font-weight: bold;
            padding-bottom: 7px;
            border-bottom: 1px black solid;
            width: 36%;
        }

        .cursos-matriculados {
            margin-top: 15px;
        }
    }
}

.datos-personales {
    margin: 40px 0;

    .datos-izquierda,
    .parte-derecha {
        .nombre-input {
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            align-items: center;
            align-content: center;
            padding: 10px;

            .boton-input {
                background: rgb(200, 200, 200);
                width: 60%;
                border: none;
                height: 50px;
                outline: none;
                display: flex;
                align-content: center;
                padding: 20px;
                margin-right: 50px;
            }
        }
    }
}

.contrato {
    .elementos-pdf {
        display: flex;
        justify-content: space-between;
        padding-left: 10px;
        margin-bottom: 40px;

        .descarga {
            margin-right: 37%;
        }
    }
}

.administracion {
    padding-left: 20px;


    img {
        width: 25px;
        margin-left: 10px;
    }
}

.becas {
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    margin-bottom: 30px;

    .linea {
        padding: 10px;
        margin-right: 40%;

        span {
            width: 100px;
            height: 2px;
            background: rgb(55, 55, 55);
            display: block;
            border-radius: 5px;
        }
    }
}

.ayuda {
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    margin-bottom: 20px;

    img {
        padding-right: 10px;
        height: 30px;
    }
}

.area {
    footer {
        margin-top: 0;
    }
}

.boton-guardar {
    text-align: right;
    padding-right: 60px;
    padding-top: 10px;

    .boton-azul {
        padding: 5px 10px;
        border-radius: 3px;
    }
}
</style>