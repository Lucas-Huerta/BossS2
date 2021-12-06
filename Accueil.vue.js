var Accueil = Vue.component('Accueil',{
    template:`
    <div>
       <!--
        Partie 1
        -->
<div class="container-fluid" id="app">
    <div class="col-12">
        <div class="row">
            <h1 class="texteCentre titres">
                Luv Resval
            </h1>
        </div>
    </div>
    <div class="col-12">
        <div class="row">
            <div class="col-5">
                <div class="centrer">
                    <img class="images" src="img/face.jpg" alt="image Luv Resval">
                </div>
            </div>

            <div class="col-2">
                <p class="paragraphes texteCentre">
                    Découvrez cet univers qui ne cesse de croître
                </p>
            </div>

            <div class="col-5">
                <div class="centrer">
                    <img class="images" src="img/mpcFaceTournee.jpg" alt="image mpc Luv Resval">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-6">
            <div class="marginTop">
                <img class="imagesPaysage" src="img/Captur2e.PNG" alt="imageBiographie">
            </div>
        </div>

        <div class="col-6">
            <div class="marginTop">
                <p class="titres">
                    Sa biographie
                </p>
                <p class="paragraphes">
                    Découvrez l'histoire de ce jeune rappeur Parisien qui n'attend qu'a réellement montrer de quoi il est capable.
                </p>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-6">
            <div class="marginTop">
                <p class="titres">
                    Ses albums
                </p>
                <p class="paragraphes">
                    Découvrez aussi les albums et singles que Luv Resval a sortit et qu'il va bientôt sortir !
                </p>
            </div>
        </div>

        <div class="col-6">
            <div class="marginTop">
                <img src="img/acceuil.png" width="100%" height="100%" alt="image discographie">
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">

        <div class="col-6">
            <div class="marginTop">
                <img src="img/reglement.jpg" class="images" alt="image discographie">
            </div>
        </div>

        <div class="col-6">
            <div class="marginTop">
                <p class="titres">
                    Son univers
                </p>
                <p class="paragraphes">
                    Prenez part finalement à son univers qui est particulier et qui change des codes actuels
                </p>
            </div>
        </div>
    </div>
</div>

    </div>
    `,
    data(){
        return{
        }
    },
    mounted(){

    },
    methods:{

    }
})