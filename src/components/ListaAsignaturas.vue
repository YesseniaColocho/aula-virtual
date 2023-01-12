<template>
    <div class="lista-asignaturas">
        <template v-for="asignatura in asignaturas">
            <div class="composicion">
               
                <div v-if="asignatura.noEsAsignatura">
                    <span :class="{ 'linea-color': asignaturasAbiertas.includes(asignatura.id) }">{{ asignatura.name
                    }}</span>
                </div>

                <a v-else :href="`/asignatura/${asignatura.id}`">
                    <span :class="{ 'linea-color': asignaturasAbiertas.includes(asignatura.id) }">{{ asignatura.name
                    }}</span>
                </a>

                <img class="flecha" :class="{ 'flecha-abierta': asignaturasAbiertas.includes(asignatura.id) }"
                    @click="toggleAsignatura(asignatura.id)" src="/flecha-abajo.png" />
            </div>

            <ul v-if="asignaturasAbiertas.includes(asignatura.id)" class="lista lineas-lista">
                <li v-for="modulo in asignatura.modules"> <span>{{ modulo.name }}</span></li>
            </ul>
        </template>
    </div>

</template>

<script>
export default {
    data() {
        return {
            asignaturasAbiertas: []
        };
    },
    props: {
        asignaturas: {
            type: Array,
            required: true
        }
    },
    methods: {
        toggleAsignatura(id) {
            if (this.asignaturasAbiertas.includes(id)) {
                this.asignaturasAbiertas = this.asignaturasAbiertas.filter((asignatura) => asignatura !== id);
            }
            else {
                this.asignaturasAbiertas.push(id);
            }
        }
    },
}

</script>

<style scoped lang="scss">
.lista-asignaturas {
    .flecha-abierta {
        transform: rotate(-90deg);
    }

    .flecha {
        cursor: pointer;
        transition: transform 0.1s linear;
    }

    >div {
        margin: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        >a {
            max-width: 80%;
        }
    }

    div.composicion {
        a {
            color: initial;
        }
    }

    .lista {
        li {
            list-style: none;
            margin: 10px;
        }
    }
}
</style>