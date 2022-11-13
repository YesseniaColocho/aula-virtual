<template>
    <main>
        <BarraSuperior></BarraSuperior>

        <div class="fecha">
            <Fecha></Fecha>
        </div>

        <div class="titulos">
            <div class="titulo">
                <h5>Dirección de arte y creatividad audiovisual</h5>
                <h2>Composición</h2>
            </div>

            <div class="descripcion">
                <strong>índex</strong>
                <img src="/informacion.png" />
            </div>

        </div>

        <div class="row">

            <div class="parte-izquierda col-3">

                <div class="profesor">
                    <strong>Profesor especialista:</strong><br> Andres Garrido B.
                    <a href="/mensajeria">
                        <img src="/group.png">
                    </a>
                </div>

                <div class="boton-notas">
                    <strong>Notas</strong>
                </div>

                <div class="notas">
                    <div>
                        <div class="modulo">
                            Módulo 1
                        </div>

                        <div class="calificacion">
                            8
                        </div>

                    </div>

                    <div>
                        <div class="modulo">
                            Módulo 2
                        </div>

                        <div class="calificacion">
                            5
                        </div>

                    </div>

                    <div>
                        <div class="modulo">
                            Módulo 3
                        </div>

                        <div class="calificacion">
                            -
                        </div>

                    </div>

                    <div>
                        <div class="modulo">
                            Examen final
                        </div>

                        <div class="calificacion">
                            -
                        </div>

                    </div>

                </div>

            </div>

            <div class=" parte-derecha col-9 ">

                <div class="row">
                    <div class="boton-informativo col-12">
                        <div>
                            <strong>Ejercicio en curso:</strong> <a href="/entrega">Conocimientos de la composición
                                1</a>
                        </div>

                        <div class="entrega">
                            Fin de entrega el 28/10/2022
                        </div>

                    </div>

                </div>

                <div class="row">

                    <div class="informacion-asignatura col-4">

                        <strong>La asignatura</strong>

                        <div class="modulos">
                            <span class="linea-color">Módulo 1</span>
                            <img src="/flecha-abajo.png" />
                        </div>

                        <div>
                            <ul class="informacion-asignatura lineas-lista">
                                <li><span>Introducción</span></li>
                                <li><span>Ejercicio 1: Arte y modelado en nuevas tecnologías</span></li>
                                <li><span>Ejercicio 2: Estructura osea natural y animal. Conocmientos básicos</span>
                                </li>
                            </ul>
                        </div>

                        <div class="modulos">
                            Módulo 2
                            <img src="/flecha.png" />
                        </div>

                        <div class="modulos">
                            Módulo 3
                            <img src="/flecha.png" />
                        </div>

                    </div>

                    <div class="recursos-modulo col-4">

                        <strong>Recursos para el Módulo</strong>

                        <div class="recursos-del-modulo">
                            Módulo 1
                        </div>

                        <div class="recursos-del-modulo">
                            Módulo 2
                        </div>

                        <div class="recursos-del-modulo">
                            Módulo 3
                        </div>
                    </div>

                    <div class="alumnado col-4">
                        <strong>Alumnos</strong>

                        <div class="informacion-alumnado">

                            <div class="alumno-foro-grupos">
                                Foro
                            </div>
                            <div class="numero-alumnados">
                                175
                            </div>

                        </div>

                        <div class="informacion-alumnado">

                            <div class="alumno-foro-grupos">
                                Grupos
                            </div>
                            <div class="numero-alumnados">
                                1
                            </div>

                        </div>

                        <div class="informacion-alumnado">

                            <div class="alumno-foro-grupos">
                                Alumnos conectados
                            </div>
                            <div class="numero-alumnados">
                                23
                            </div>

                        </div>


                        <div class="informacion-alumnado">

                            <div class="alumno-foro-grupos">
                                Lista de alumnos
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        <BarraInferior></BarraInferior>

    </main>
</template>

<script setup>
import BarraInferior from '../components/BarraInferior.vue';
import BarraSuperior from '../components/BarraSuperior.vue';
import Fecha from '../components/Fecha.vue';


</script>

<style scoped lang="scss">
.titulos {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;

    h5 {
        color: rgb(179, 179, 179);
    }

    h2 {
        font-weight: bold;
        margin-bottom: 100px;
    }

    img {
        margin-left: 10px;
    }

    .descripcion {
        margin-top: 45px;
    }
}

.parte-izquierda {
    .profesor {
        margin-left: 20px;
        font-weight: 500;
        font-size: 20px;
        border-bottom: 1px black solid;
        padding-bottom: 15px;
        line-height: 35px;

        img {
            margin-left: 20px;
            height: 20px;
            width: auto;
        }
    }

    .boton-notas {
        background: linear-gradient(to right, #60A4FF, #7DEBF2);
        margin: 30px 0 15px 20px;
        height: 70px;
        display: flex;
        align-items: center;
        padding: 20px;
        font-size: large;
        border-radius: 3px;
    }

    .notas {
        margin-left: 20px;

        >div {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;

            &:last-child {
                margin-bottom: 5px;
            }
        }

        .modulo {
            background: lightgrey;
            height: 50px;
            width: 75%;
            display: flex;
            align-items: center;
            padding: 20px;
        }

        .calificacion {
            background: lightgray;
            height: 50px;
            width: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
    }

}

.parte-derecha {

    padding-left: 40px;

    .boton-informativo {
        background: linear-gradient(to right, #60A4FF, #7DEBF2);
        display: flex;
        justify-content: space-between;
        height: 70px;
        align-items: center;
        padding: 0 30px;
        border-radius: 3px;


        span {
            margin-left: 10px;
        }

        a {
            color: initial;
            border-bottom: 1px black solid;
        }
    }

    .informacion-asignatura {
        margin-top: 20px;

        .modulos {
            margin-top: 20px;

            img {
                margin-left: 15px;
            }
        }

        .informacion-asignatura {
            list-style: none;

            li {
                margin-top: 20px;
            }
        }
    }

    .recursos-modulo {
        margin-top: 20px;
        text-align: center;

        .recursos-del-modulo {
            margin-top: 20px;
            background: lightgrey;
            height: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .alumnado {
        text-align: center;
        margin-top: 20px;

        strong {
            border-bottom: 1px black solid;
            width: 100%;
            display: block;
            padding-bottom: 20px;
        }

        .informacion-alumnado {
            display: flex;
            justify-content: space-between;
            align-content: center;
            align-items: center;
            margin: 20px 10px;

            .alumno-foro-grupos {
                margin-top: 10px;
                width: 75%;
                text-align: left;

            }

            .numero-alumnados {
                background: lightgrey;
                height: 40px;
                width: 20%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
}
</style>