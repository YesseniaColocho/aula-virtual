<template>
    <div>
        Fecha: {{ fecha }}
    </div>
</template>

<script>
export default {
    name: "Fecha",
    computed: {
        fecha() {
            return new Date().toLocaleDateString()
        }
    }
}
</script>
