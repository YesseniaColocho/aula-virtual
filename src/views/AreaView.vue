<template>
    <main class="area">
        <BarraSuperior></BarraSuperior>

        <div class="fecha">
            Fecha:06/10/2022
        </div>

        <div class="area-personal row">
            <div class="titulos col-3">
                <div class="titulo">
                    <h2>Área personal</h2>
                    <h4>Cambio de datos y becas</h4>
                </div>
            </div>

            <div class="alumno-foto col-2">

                <div class="foto-wrapper">
                    <div class="circulo-foto">
                        <img src="/alumno.png" />
                    </div>

                    <div class="circulo-estado">
                        <span></span>
                    </div>
                </div>
            </div>

            <div class="cursos-alumno col-7">
                <div class="matricula">
                    Cursos Matriculados 2022/2023
                </div>

                <div class="cursos-matriculados">
                    <div>
                        Dirección de Arte y Creatvidad Audiovisual
                    </div>

                    <div class="cursos-matriculados">
                        Animación Digital para Cómic
                    </div>

                </div>


            </div>
        </div>

        <div class="datos-personales row">
            <div class=" datos-izquierda col-5">
                <div class="nombre-input">
                    Nombre
                    <input class="boton-input" type="text" />
                </div>

                <div class="nombre-input">
                    Apellidos
                    <input class="boton-input" type="text" />
                </div>

                <div class="nombre-input">
                    Telefono
                    <input class="boton-input" type="text" />
                </div>

            </div>

            <div class="col-1"></div>

            <div class="parte-derecha col-6">
                <div class="nombre-input">
                    DNI
                    <input class="boton-input" type="text" />
                </div>

                <div class="nombre-input">
                    Dirección
                    <input class="boton-input" type="text" />
                </div>

                <div class="nombre-input">
                    Email
                    <input class="boton-input" type="text" />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="contrato col-5">
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

            <div class="col-1"></div>

            <div class="administracion col-6">
                <a href="/mensajeria">
                    <span>Contactar con administracion</span>
                    <img src="/group.png" />
                </a>
            </div>
        </div>

        <div class="row">
            <div class="becas col-5">
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


</script>

<style scoped lang="scss">
.fecha {
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
    margin-top: 20px;
    font-size: small;

}

.area-personal {
    .titulos {
        display: flex;
        justify-content: space-between;
        margin: 30px 0 100px 0;
        padding: 0 20px;

        h2 {
            font-weight: bold;
        }
    }

    .alumno-foto {
        display: flex;
        justify-content: center;
        align-items:flex-start;

        .foto-wrapper {
            height: 80%;
            .circulo-foto {
                height: 100%;
                overflow: hidden;
                border-radius: 100%;

                img {
                    height: 100%;
                    width: 100%;
                }
            }

            .circulo-estado {
                background: rgb(8, 172, 8);
                border-radius: 100%;
                position: absolute;
                height: 20%;
                width: 20%;
                border: 3px white solid;
                top: 76%;
                left: 78%;
            }
        }
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
</style>