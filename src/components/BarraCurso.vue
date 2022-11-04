<template>
    <div>
        
        <div>Progreso del año escolar</div>

        <img src="public/marcador.png" class="marcador" :style="`left:${progreso}%`" >

        <div class="barra">
            <div class="progreso" :style="`width: ${progreso}%`">

            </div>

            <div class="marcadores">
                <span v-for="marker in marcadores" :style="`left:${marker.porcentaje}%`"></span>
            </div>
        </div>

        <div class="trimestres">
            <span v-for="trimestre in marcadores" :style="`left:${trimestre.porcentaje}%`">{{trimestre.texto}}</span>
        </div>


    </div>
</template>

<script setup>

</script>

<script>
export default {
    name: "BarraCurso",
    data() {
        return {
            progreso: 10,
            marcadores: [{
                texto: "1r trimestre",
                porcentaje: 20
            },
            {
                texto: "2o trimestre",
                porcentaje: 40
            },
            {
                texto: "3r trimestre",
                porcentaje: 60
            },
            {
                texto: "Examenes finales",
                porcentaje: 90
            }]
        }
    }
}
</script>

<style scoped lang="scss">
.barra {
    background: lightgrey;
    width: 100%;
    height: 50px;
    overflow: hidden;
    margin-top: 10px;
    border-radius: 30px;
}

.progreso {
    background: linear-gradient(to right, #60A4FF,#7DEBF2);
    height: 100%;
}

.marcadores {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    span {
        position: absolute;
        width: 0.1rem;
        height: 100%;
        background: white;
    }
}
.trimestres{
    width: 100%;
    span{
        position: absolute;
    }
}
.marcador{
    transform: translate(-50%, 0);
}
</style>