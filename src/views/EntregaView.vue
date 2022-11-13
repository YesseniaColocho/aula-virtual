<template>
    <main class="pagina-entrega">
        <BarraSuperior></BarraSuperior>

        <div class="fecha">
            <Fecha></Fecha>
        </div>

        <div class="titulos">
            <div class="titulo">
                <h5>Composición</h5>
                <h2>Conocimientos de la composición 1</h2>
                <h4>Módulo 3 Ejercicio 2</h4>
            </div>

            <div class="descripcion">
                <a href="/mensajeria">
                    Contactar con el profesor especialista
                    <img src="/group.png" />
                </a>
            </div>

        </div>

        <div class="row">
            <div class="especificaciones col-7">

                <div class="titulo-ejercicio">
                    Especificaciones del ejercicio
                </div>

                <div class="contenedor">
                    <p>
                        Suspendisse libero nisl, efficitur vel tortor sit amet, efficitur auctor enim.
                        Proin euismod ante a mi ullamcorper lobortis. Vestibulum lobortis facilisis mauris, sit amet
                        vulputate lectus rutrum vitae. Nunc tortor nibh, tristique et enim nec, bibendum finibus
                        quam.
                        Duis fermentum ultricies justo, at euismod nisi fermentum et. <br>
                        <br>
                        Ut nisl risus, aliquam vehicula vestibulum mollis, viverra finibus quam. Pellentesque
                        volutpat
                        vel turpis vel auctor. Cras enim massa, ultrices eu congue eget, condimentum ut mi. Ut nisl
                        risus, aliquam vehicula vestibulum mollis, viverra finibus quam. Pellentesque
                        volutpat
                        vel turpis vel auctor. Cras enim massa, ultrices eu congue eget, condimentum ut mi.
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        Entrega en PDF. Comprovad que el documento se lee correctamente.
                    </p>
                </div>
            </div>

            <div class="entrega col-5">
                <strong>Estado de la entrega</strong>
                <img src="/chek.png" />

                <div class="archivo">
                    <label for="archivo-entrega"></label>
                    <input type="file" id="archivo-entrega" />
                </div>

                <div class="botones-entrega">
                    <div class="boton-mas">
                        <span>+</span>Comentario
                    </div>
                    <div class="boton-archivo">
                        <label for="archivo-entrega">Buscar archivo</label>
                    </div>
                </div>

                <div class="informacion">
                    Esta entrega finaliza el 28/10/2022
                </div>

                <div class="recursos-para-ejericio">
                    Recursos para el ejercicio:
                </div>

                <div class="row">
                    <div class="recursos col-6">
                        Módulo 3 ejercicio 2
                    </div>

                    <div class="col-1"></div>

                    <div class="recursos-adicionales col-5">
                        Recursos adicionales
                    </div>

                </div>

                <div class="biblioteca">
                    <a href="#">Acceso a biblioteca</a>
                </div>

                <div class="ayuda">
                    Ayuda
                    <img src="/pregunta.png" />
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
.pagina-entrega {
    footer {
        margin-top: 0px;
    }
}

.titulos {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
    margin-bottom: 100px;

    h5 {
        color: rgb(179, 179, 179);
    }

    h2 {
        font-weight: bold;
    }

    img {
        margin-left: 10px;
        height: 20px;
    }

    .descripcion {
        margin-top: 45px;

        a {
            color: initial;
        }
    }
}

.especificaciones {
    padding-left: 20px;

    .titulo-ejercicio {
        font-weight: bold;
        font-size: large;
        border-bottom: 1px black solid;
        padding-bottom: 20px;
        width: 330px;
        margin-bottom: 35px;
    }
}

.contenedor {
    max-height: 300px;
    overflow-y: auto;
    padding-right: 10px;
    margin-bottom: 20px;
}

.entrega {
    margin-bottom: 20px;

    img {
        margin-left: 10px;
    }

    .archivo {
        label {
            background: lightgray;
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            height: 40px;
        }

        input {
            display: none;
        }
    }

    .botones-entrega {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;

        .boton-mas {

            span {
                background: $gradiente-azul;
                height: 30px;
                width: 30px;
                border-radius: 3px;
                display: inline-flex;
                justify-content: center;
                margin-right: 10px;
            }
        }

        .boton-archivo {
            background: $gradiente-azul;
            padding: 10px 30px;
        }
    }

    .informacion {
        margin-bottom: 40px;
    }

    .recursos-para-ejericio {
        font-weight: bold;
        margin-bottom: 30px;
    }

    .recursos {
        background: lightgray;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .recursos-adicionales {
        background: lightgray;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .biblioteca {
        margin-top: 20px;
    }

    .ayuda {
        margin-top: 30px;
        display: flex;
        justify-content: flex-end;

        img {
            height: 20px;
        }
    }
}
</style>