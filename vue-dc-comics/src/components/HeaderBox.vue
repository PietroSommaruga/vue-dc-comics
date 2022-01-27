<template>
    <header>
      <div class="logo">
          <img src="@/assets/dc-logo.png" alt="">
      </div>

      <nav>
          <ul>
              <li>CHARACTERS</li>
              <li>COMICS</li>
              <li>MOVIES</li>
              <li>TV</li>
              <li>GAMES</li>
              <li>COLLECTIBLES</li>
              <li>VIDEOS</li>
              <li>FANS</li>
              <li>NEWS</li>
              <li>SHOP</li>
          </ul>
      </nav>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
header {
    margin: 0 auto;
    width: 100%;
    height: 100px;
    text-align: center;
    display: flex;
    align-items: center;
    color: black;
    font-weight: 800;
    
}

.logo {
    width: 30%;
    img{
        width: 50px;
    }
}

ul {
    width: 50%;
    display: flex;
    

    li {
        list-style: none;
        padding: 40px 15px;
        font-size: 10px;
        cursor: pointer;

        &:hover {
            border-bottom: 2px solid rgb(35, 111, 226);
            color: rgb(35, 111, 226);
        }
    }
}


</style>