<template>
    <div class="gui-card" v-on:click="ficarMaior()" v-on:mouseout="removerEfeito()" v-bind:style="estilo">
        <div class="gui-card__media">
            <img class="gui-card__img" v-bind:src="imagem" alt=""  />
        </div>
        <div class="gui-card__details">
            <div class="gui-card__title">
            {{ titulo }}
            </div>
        </div>
    </div>
</template>

<<script>
export default {
    name: 'filme',
    props: ['titulo', 'imagem'],
    data() {
        return{
            estilo: null,
        }
    },
    methods: {
        ficarMaior: function() {
            this.estilo = '-webkit-transform: scale(1.9); margin-right: 110px;'
        },
        removerEfeito: function() {
            this.estilo = null;
        }
    }
}
</script>

<style lang="scss">
    
</style>