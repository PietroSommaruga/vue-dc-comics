<template>

    <div class="card-container">
        <main>
            <div class="card" v-for="card in main" :key="card.id">{{card.label}}</div>
            
        </main>
    </div>
</template>

<script>
export default {
    


    data() {
        return {
            main:[
                {
                    id: '1',
                    label: 'ACTION COMICS',
                    url: '/',
                },

                {
                    id: '2',
                    label: 'AMERICAN VAMPIRE 1976',
                    url: '/',
                },

                {
                    id: '3',
                    label: 'AQUAMAN',
                    url: '/',
                },

                {
                    id: '4',
                    label: 'BATGIRL',
                    url: '/',
                },

                {
                    id: '5',
                    label: 'BATMAN',
                    url: '/',
                },

                {
                    id: '6',
                    label: 'BATMAN BEYOND',
                    url: '/',
                },

                {
                    id: '7',
                    label: 'BATMAN/SUPERMAN',
                    url: '/',
                },

                {
                    id: '8',
                    label: 'BATMAN/SUPERMAN ANNUAL',
                    url: '/',
                },

                {
                    id: '9',
                    label: 'BATMAN: THE JOKER WAR ZONE',
                    url: '/',
                },

                {
                    id: '10',
                    label: 'BATMAN: THREE JOKERS',
                    url: '/',
                },

                {
                    id: '11',
                    label: 'BATMAN: WHITE KNIGHT PRESENTS: HARLEY QUINN',
                    url: '/',
                },

                {
                    id: '12',
                    label: 'CATWOMAN',
                    url: '/',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scope>
body{
    color: #fff;
    font-size: 12px;
}

.card-container {
    margin: 0 auto;
    width: 100%;
    background: black;
}

main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px 100px;
}

.card {
    width: 120px;
    height: 120px;
    background: blue;
    margin: 10px;
}
</style>