
<template>

    <div class="alumno-foto">

        <div class="foto-wrapper">
            <div class="circulo-foto">
                <img src="/alumno.png" />
            </div>

            <div class="circulo-estado">
                <span></span>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.alumno-foto {
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;

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
</style>