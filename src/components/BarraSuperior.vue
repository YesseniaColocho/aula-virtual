<template>
    <div class="fondo-barra">
        <div class="barra">
            <div class="primera-imagen">
                <a href="/">
                    <img src="/figma.png" />
                </a>
            </div>

            <div class="imagenes">
                <span>
                    <img src="/ayuda.png" />
                </span>
                <a href="/calendario">
                    <img src="/calendario.png" />
                </a>
                <a href="/mensajeria">
                    <img src="/avion.png" />
                </a>
                <a href="/areapersonal">
                    <img src="/group3.png" />
                </a>

            </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped lang="scss">
.fondo-barra {
    background: $gradiente-azul;
    padding-bottom: 2px;
    margin-bottom: 20px;

    .barra {
        background: #F4F4F4;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        height: 99%;

        .primera-imagen {
            margin-left: 20px;
            a{
                min-width: 50px;
                img{
                    width: 100%;
                }
            }
        }
    }

    .imagenes {
        display: flex;
        align-items: center;

        >* {
            margin-left: 30px;
            width: 25%;
            img{
                width: 100%;
            }
        }

        >*:last-child {
            margin-right: 30px;
        }
    }
}
</style>