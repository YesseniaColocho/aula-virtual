<template>
    <footer>

        <div class="footer">
            <div class="imagenes">
                <img src="/tweeter.png" />
                <img src="/facerbook.png" />
                <img src="/instagram.png" />
            </div>
            <div class="links">
                <span>Servicio de atención</span>
                <span>Accesividad</span>
                <span>Políticas</span>
            </div>
        </div>

    </footer>
</template>

<script setup>

</script>

<style scoped lang="scss">
footer {
    background: linear-gradient(to right, #7DEBF2, #60A4FF);
    padding-top: 2px;
    margin-top: 50px;

    .footer {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        background: #F4F4F4;

        .imagenes {
            margin-left: 30px;
            margin-bottom: 10px;

            img {
                margin-right: 10px;
            }
        }

        .links {
            margin-right: 30px;
            margin-bottom: 10px;

            span {
                margin-left: 20px;
            }
        }
    }

}
</style>