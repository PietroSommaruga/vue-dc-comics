<template>
    <main>
        <div class="current-series">
            <strong class="btn current">CURRENT SERIES</strong>
        </div>
        <div class="card-container">
            
                <!-- <div class="card" v-for="card in main" :key="card.id">{{card.label}}</div> -->
                <div class="card" v-for="(fumetto, index) in fumetti" :key="index">
                    <img :src="fumetto.thumb" alt="">
                    <span>{{fumetto.series}}</span>
                </div> 
        </div>
        <div class="learn-more">
            <strong class="btn ">LEARN MORE</strong>
        </div>
    </main>
</template>

<script>
export default {
    props: {
        fumetti: Array,
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
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 100px;
    padding: 20px 0;
    
}

.card {
    width: 130px;
    padding: 15px;
    

    img {
        width: 100%;
        height: 180px;
    }
}

.btn {
    background: rgb(35, 111, 226);
    padding: 5px 20px;
    cursor: pointer;
}

.current-series {
    position: absolute;
}

.current {
    font-size: 15px;
    position: relative;
    top: -5px;
    left: 150px;
}
.learn-more {
    display: flex;
    justify-content: center;
    padding: 10px 0;
}

.current-series, .learn-more {
    &:hover{
        color: black;
    }
}

</style>