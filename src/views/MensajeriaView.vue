<template>
    <main class="mensajeria">
        <BarraSuperior></BarraSuperior>

        <div class="fecha">
            Fecha:06/10/2022
        </div>

        <div class="titulos">
            <div class="titulo">
                <h2>Mensajería</h2>
                <h4>Área personal / Mensajería</h4>
            </div>

            <div class="descripcion">
                <input type="text" placeholder="Buscar" />
            </div>

        </div>

        <div class="barra-superior row">
            <div class="boton col-3">
                <div class="mensaje">
                    Nuevo mensaje
                </div>

            </div>

            <div class="botones-selecionadores col-7">
                <div class="selecionadores">
                    <div class="cuadro-imagen">
                        <img src="/icono1.png" />
                    </div>
                    <div>
                        Seleccionar todos
                    </div>
                </div>

                <div class="selecionadores">
                    <div class="cuadro-imagen">
                        <img src="/icono2.png" />
                    </div>
                    <div>
                        Refrescar
                    </div>
                </div>

                <div class="selecionadores">
                    <div class="cuadro-imagen">
                        <img src="/icono3.png" />
                    </div>
                    <div>
                        Marcar como leído
                    </div>
                </div>

                <div class="selecionadores">
                    <div class="cuadro-imagen">
                        <img src="/icono4.png" />
                    </div>
                    <div>
                        Marcar como no leído
                    </div>
                </div>

                <div class="selecionadores">
                    <div class="cuadro-imagen">
                        <img src="/icono5.png" />
                    </div>
                    <div>
                        Papelera
                    </div>
                </div>


            </div>

            <div class="pagina col-2">
                1- 4/4
            </div>
        </div>

        <div class="parte-abajo row">
            <div class="opciones-de-enviado col-3">
                <div class="recibidos">
                    Recibidos
                    <img src="/bandeja.png" />
                </div>

                <div class="recibidos">
                    Enviados
                    <img src="/carta.png" />
                </div>

                <div class="recibidos">
                    Papelera
                    <img src="/papelera.png" />
                </div>

                <div class="recibidos">
                    Guardados
                    <img src="/envio.png" />
                </div>
            </div>

            <div class="mensajes-recibidos col-9">

                <div v-for="email in emails" class="informacion-email">
                    <input class="boton-check" type="checkbox" />
                    <span>{{email.enviar}}</span>
                    <span>{{email.asunto}}</span>
                    <span>{{email.fecha}}</span>
                </div>


            </div>
        </div>

        <div class="botones-siguente-pagina">
            <img src="/botonizquierda.png" />
            <img src="/botonderecha.png" />
        </div>

        <BarraInferior></BarraInferior>
    </main>
</template>

<script setup>
import BarraInferior from '../components/BarraInferior.vue';
import BarraSuperior from '../components/BarraSuperior.vue';
</script>

<script>
export default {
    name: "MensajeriaView",
    data() {
        return {
            emails: [
                {
                    enviar: "Andres Garrido B",
                    asunto: "Duda Módulo 3",
                    fecha: "Viernes 18/10/2022",
                },
                {
                    enviar: "Carmen Gutierrez Aros",
                    asunto: "Tutoría",
                    fecha: "Miercoles 07/10/2022",
                },
                {
                    enviar: "María Gomez Santos",
                    asunto: "Confusión en calificacción",
                    fecha: "Lunes 27/09/2022",
                },
                {
                    enviar: "Andres Garrido B",
                    asunto: "Re: Seguimiento",
                    fecha: "Jueves 01/09/2022",
                },
                {
                    enviar: "Ernesto A Lopez",
                    asunto: "Cambio fecha de entrega",
                    fecha: "Martes 23/08/20222",
                },
                {
                    enviar: "Carmen Gutierrez Aros",
                    asunto: "Becas",
                    fecha: "Viernes 17/08/2022",
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.fecha {
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
    margin-top: 20px;
    font-size: small;

}

.titulos {
    display: flex;
    justify-content: space-between;
    margin: 30px 20px 0 20px;
    margin-bottom: 100px;

    h2 {
        font-weight: bold;
    }

    img {
        margin-left: 10px;
        height: 20px;
    }

    .descripcion {
        margin-top: 40px;

        input {
            border: none;
            background: rgb(208, 205, 205);
            outline: none;
            border-radius: 1px;
            padding: 5px;
            width: 250px;
        }
    }
}

.barra-superior {
    align-items: center;

    .boton {
        padding: 20px;

        .mensaje {
            background: linear-gradient(to right, #60A4FF, #7DEBF2);
            height: 50px;
            border-radius: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: large;
            font-weight: 600;
        }
    }

    .botones-selecionadores {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .selecionadores {
            display: flex;
            flex-direction: column;
            align-items: center;

            .cuadro-imagen {
                background: lightgray;
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

        }
    }

    .pagina {
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
    }
}

.parte-abajo {
    margin-top: 50px;
    padding-left: 20px;

    .recibidos {

        height: 50px;
        width: 70%;
        border-radius: 3px;
        font-size: large;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        margin-bottom: 20px;

        &:first-child {
            background: linear-gradient(to right, #60A4FF, #7DEBF2);
        }

    }

    .mensajes-recibidos {
        .informacion-email {
            margin-bottom: 15px;
            border-bottom: 1px lightgray solid;
            padding-bottom: 15px;
            display: flex;
            align-items: center;

            &:last-child {
                border-bottom: none;
            }

            .boton-check {
                width: 3%;
            }

            span {
                display: inline-block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            span:nth-child(2) {
                width: 47%;
            }

            span:nth-child(3) {
                width: 30%;
            }

            span:nth-child(4) {
                width: 20%;
            }

        }

    }
}

.botones-siguente-pagina {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;

    img {
        margin-right: 10px;
    }
}

.mensajeria {
    footer {
        margin-top: 0;
    }
}
</style>