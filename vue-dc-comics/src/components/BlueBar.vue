<template>
    <div class="blue">
        <div class="blue-box-container">
            <div class="blue-box">
                <img src="@/assets/buy-comics-digital-comics.png" alt="">
                <span>DIGITAL COMICS</span>
            </div>

            <div class="blue-box">
                <img src="@/assets/buy-comics-merchandise.png" alt="">
                <span>DC MERCHANDISE</span>
            </div>

            <div class="blue-box">
                <img src="@/assets/buy-comics-shop-locator.png" alt="">
                <span>SUBSCRIPTION</span>
            </div>

            <div class="blue-box">
                <img src="@/assets/buy-comics-subscriptions.png" alt="">
                <span>COMICS SHOP LOCATOR</span>
            </div>

            <div class="blue-box">
                <img src="@/assets/buy-dc-power-visa.svg" alt="">
                <span>CD POWER VISA</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scope>
.blue {
    width: 100%;
    height: 100px;
    background: rgb(35, 111, 226);
    color: #fff;
    font-size: 8px;

    .blue-box-container {
        height: 100%;
        display: flex;
        justify-content: space-around;
        margin: 0 100px;
    
        .blue-box {
            margin: 10px;
            display: flex;
            align-items: center;
            cursor: pointer;
            img {
                width: 30px;
                height: 30px;
            }
            span {
                width: 100px;
                padding: 10px;
            }
        }
    }
} 
</style>