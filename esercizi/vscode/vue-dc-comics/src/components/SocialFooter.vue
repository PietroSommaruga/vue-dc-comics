<template>
    <div class="container">
        <div class="sing-up-container">
            <strong class="sing-up">SING UP NOW</strong>
        </div>
        <div class="social-link-container">
            <strong class="follow-us">FOLLOW-US:</strong>
            <img src="@/assets/footer-facebook.png" alt="">
            <img src="@/assets/footer-twitter.png" alt="">
            <img src="@/assets/footer-periscope.png" alt="">
            <img src="@/assets/footer-pinterest.png" alt="">
            <img src="@/assets/footer-youtube.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scope>

body {
    margin: 0 auto;
    color: #fff;
}
.container {
    width: 100%;
    height: 100px;
    background: black;
    display: flex;
}

.sing-up-container, .social-link-container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sing-up{
    padding: 6px;
    border: 2px solid rgb(168, 168, 168);
    cursor: pointer;

    &:hover{
        border: 3px solid rgb(35, 111, 226);
    }
}

.social-link-container{
    img {
        width: 20px;
        padding: 0 6px;
    }
}

.follow-us {
    color: rgb(35, 111, 226);
}

</style>
