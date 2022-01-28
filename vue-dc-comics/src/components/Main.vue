<template>
    <main>
        <div class="card-container">
            
                <!-- <div class="card" v-for="card in main" :key="card.id">{{card.label}}</div> -->
                <div class="card" v-for="(pasta, index) in paste" :key="index">
                    <img :src="pasta.thumb" alt="">
                    <span>{{pasta.series}}</span>
                </div>
            
        </div>
    </main>
</template>

<script>
export default {
    props: {
        paste: Array,
    }
}
</script>

<style lang="scss" scope>
body{
    color: #fff;
    font-size: 12px;
}

main {
    margin: 0 auto;
    width: 1200px;
    background: black;
}
.card-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px 0;
    
}



.card {
    width: 150px;
    padding: 15px;
    

    img {
        width: 100%;
        height: 180px;
    }
}
</style>