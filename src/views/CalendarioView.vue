<template>
    <main class="calendario">
        <BarraSuperior></BarraSuperior>

        <div class="row">
            <div class="barra-izquierda col-2">

                <div class="titulo">
                    <h2>Calendario</h2>
                </div>

                <div class="mes">
                    Mes
                    <img src="/flecha.png" />
                    Octubre
                </div>

                <div class="boton-evento">
                    <strong>Nuevo Evento</strong>
                    <img src="/cruz.png" />
                </div>

                <vue-cal class="vuecal--date-picker" xsmall hide-view-selector :time="false" :transitions="false"
                    active-view="month" :disable-views="['week']" style="height: 230px">
                </vue-cal>

                <div class="recordatorios">
                    <strong>Recordatorios</strong>
                </div>

                <div class="texto">
                    Classe de Composición a las 14:00 dia 27 de Octubre
                </div>
            </div>

            <div class="barra-derecha col-10">
                <vue-cal :disable-views="['years', 'year']" :time-from="7 * 60" :time-to="20 * 60" />
            </div>

        </div>

        <BarraInferior></BarraInferior>

    </main>

</template>

<script setup>
import BarraSuperior from '../components/BarraSuperior.vue';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import BarraInferior from '../components/BarraInferior.vue';
import Fecha from '../components/Fecha.vue';

</script>

<style lang="scss">
.barra-izquierda {
    .vuecal {
        box-shadow: none;

        &__title-bar {
            display: none;
        }

        &__cell {
            &--today {
                div.vuecal__cell-content.vuecal__flex {
                    background-color: #60A4FF;
                    color: white;
                }
            }

            &--selected {
                div.vuecal__cell-content.vuecal__flex {
                    border-color: #60A4FF;
                    background: none;
                    color: inherit;
                }
            }
        }

        .weekday-label {
            color: black;

            span {
                font-weight: bold;
            }
        }

        &__heading {
            opacity: 1;
        }
    }
}

.barra-derecha {
    .vuecal {
        box-shadow: none;

        &__cell--selected {
            background-color: #7deaf234;
        }

        &__title-bar {
            background-color: #60A4FF;
        }
    }

}
</style>

<style scoped lang="scss">
.calendario {

    .barra-izquierda {
        .titulo {
            margin-bottom: 30px;
        }

        .mes {
            img {
                margin: 0 5px;
            }
        }

        .boton-evento {
            margin-top: 30px;
            background: $gradiente-azul;
            height: 50px;
            border-radius: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 30px;

            img {
                position: absolute;
                left: 93%;
                top: 10%;
            }
        }

        .recordatorios {
            margin-top: 50px;
            background: lightgray;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }

        .texto {
            width: 80%;
            padding-left: 10px;
            font-size: small;
        }
    }

    div.barra-derecha {
        padding-left: 20px;
    }
}
</style>