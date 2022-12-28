<template>
    <div>
        
        <div>Progreso del año escolar</div>

        <img src="/marcador.png" class="marcador" :style="`left:${progreso}%`" >

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

<script>
export default {
    name: "BarraCurso",
    props:{
        progreso:{
            type:Number, default:0
        },
        marcadores:{
            type:Array, default:[]
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
    background: $gradiente-azul;
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
        transform: translate(-50%, 0);
        text-align: center;
        font-size: small;
    }
}
.marcador{
    transform: translate(-50%, 0);
}
</style>