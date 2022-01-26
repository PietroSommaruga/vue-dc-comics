
// Tramite una chiamata ad una API, stampiamo a schermo un numero casuale.

new Vue({
    el: "#app",
    data: {
        number: 0,
        sentences:[]
    },
    methods: {},
    // quando l'applicazione è stata "montata" nel browser, fai una chiamata API
    mounted() {

        for (let i = 0; i < 2; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/sentence').then((result) => {
                this.sentences.push(result.data.response)
        }
    )}}
})
        



