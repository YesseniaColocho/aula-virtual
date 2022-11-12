<template>
    <div class="fondo-barra">
        <div class="barra">
            <div class="primera-imagen">
                <img src="/figma.png" />
            </div>

            <div class="imagenes">
                <img src="/ayuda.png" />
                <img src="/avion.png" />
                <img src="/group3.png" />
            </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped lang="scss">
.fondo-barra {
    background: linear-gradient(to right, #7DEBF2, #60A4FF);
    padding-bottom: 2px;

    .barra {
        background: #F4F4F4;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        height: 99%;

        .primera-imagen {
            margin-left: 20px;
        }
    }

    .imagenes {
        display: flex;
        align-items: center;

        img {
            margin-left: 30px;

        }

        img:last-child {
            margin-right: 30px;
        }
    }
}
</style>