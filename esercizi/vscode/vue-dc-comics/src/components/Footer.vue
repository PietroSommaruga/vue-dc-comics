<template>
    <footer>
        <div class="link-footer-container">
            <div class="link-footer">
                <strong>
                    DC COMICS
                </strong>
                <ul>
                        <li>Characters</li>
                        <li>Comics</li>
                        <li>Movies</li>
                        <li>Tv</li>
                        <li>Games</li>
                    </ul>
                    <strong>
                    DC COMICS
                    </strong>
                    <ul>
                        <li>Characters</li>
                        <li>Comics</li>
                        <li>Movies</li>
                        <li>Tv</li>
                        <li>Games</li>
                    </ul>
            </div>

            <div class="link-footer">
                <strong>
                    DC
                </strong>
                <ul>
                        <li>Characters</li>
                        <li>Comics</li>
                        <li>Movies</li>
                        <li>Tv</li>
                        <li>Games</li>
                        <li>Characters</li>
                        <li>Comics</li>
                        <li>Movies</li>
                        <li>Tv</li>
                        <li>Games</li>
                    </ul>
            </div>

            <div class="link-footer">
                <strong>
                    SITIES
                </strong>
                <ul>
                        <li>Characters</li>
                        <li>Comics</li>
                        <li>Movies</li>
                        <li>Tv</li>
                        <li>Games</li>
                    </ul>
            </div>
           
        </div>
        <div class="footer-logo-container">
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scope>
body {
    color: #fff;
}
footer {
    width: 100%;
    height: 300px;
    background: url('../assets/footer-bg.jpg');
    display: flex;
    
    
    ul {
        padding: 0;
        cursor: pointer;
    }
    li {
        list-style: none;
        font-size: 10px;
        color: rgba(182, 182, 182, 0.767);
        padding: 2px 0;

        &:hover {
            text-decoration: underline;
            color: rgba(228, 228, 228, 0.767);
        }
    }

    .link-footer-container, .footer-logo-container{
        width: 50%;
        height: 100%;
        display: flex;
    }

    .link-footer-container {
        display: flex;
        justify-content: center;
    }

    .link-footer{
        display: flex;
        flex-direction: column;
        padding: 20px;
    }

    .footer-logo-container {
        display: flex;
        align-items: center;
        background: url('../assets/dc-logo-bg.png');
        background-repeat: no-repeat;
        background-position: center;
    }

    
}
</style>