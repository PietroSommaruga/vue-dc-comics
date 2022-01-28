<template>
    <header>
      <div class="logo">
          <img src="@/assets/dc-logo.png" alt="">
      </div>

      <nav>
          <ul>
              <li v-for="nav in header" :key="nav.id">{{nav.label}}</li>
          </ul>
      </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            header:[
                {
                    id: '1',
                    label: 'CHARACTERS',
                },

                {
                    id: '2',
                    label: 'COMICS',
                },

                {
                    id: '3',
                    label: 'MOVIES',
                },

                {
                    id: '4',
                    label: 'TV',
                },

                {
                    id: '5',
                    label: 'GAMES',
                },

                {
                    id: '6',
                    label: 'COLLECTIBLES',
                },

                {
                    id: '7',
                    label: 'VIDEOS',
                },

                {
                    id: '8',
                    label: 'FANS',
                },

                {
                    id: '9',
                    label: 'NEWS',
                },

                {
                    id: '10',
                    label: 'SHOP',
                },
            ]
        }
    }
    
}
</script>

<style lang="scss" scoped>
header {
    margin: 0 auto;
    width: 1200px;
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
        padding: 0 15px;
        font-size: 10px;
        cursor: pointer;
        height: 100px;
        line-height: 100px;

        &:hover {
            border-bottom: 3px solid rgb(35, 111, 226);
            color: rgb(35, 111, 226);
        }
    }
}


</style>