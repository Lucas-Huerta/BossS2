var Albums = Vue.component('Albums',{
    template:`

<div class="container-fluid">
    <div class="col-12">
        <div class="row">
            <h1 class="texteCentre titres">
                Ses albums
            </h1>
        </div>

        <div class="col-6">
            <button type="button" class="btn btn-dark">
                <router-link :to="{name:'CreateAlbum'}">
                    Ajouter
                </router-link>
            </button>
        </div>
        
        <div class="row rowAlbum" v-for="album in albums" :key="album.id" >
            <div class="col-6">
                <img class="imgAlbum" :src=album.Image alt="imageMariah">
            </div>
            <div class="col-3" >
                    <h3>
                        {{album.Nom}} | {{album.DateSortie}}
                    </h3>
                    <p>
                        {{album.Description}}
                    </p>
            </div>
           
        </div>
    </div>
</div>


        <!--
        <div class="row">
            <div class="col-6">
                <img class="imgAlbum" src="img/Albums/16467.jpg" alt="image serie freestyles Y">
            </div>
            <div class="col-3">
                <h3>
                Série de freestyles ¥
            </h3>
                <p>
                    Cette série de freestyles à débuté en 2018 et s'est terminer en 2019 par le 11 volume.
                    Ce qui fait un total de 11 freestyles délivré en un peu plus d'un an. Ces freestyles
                    sont commun de Luv Resval.
                </p>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-6">
                <img class="imgAlbum" src="img/Albums/mpc1.jpg" alt="image MPC">
            </div>
            <div class="col-3">
                <h3>
                    MPC | 2019
                </h3>
                <p>
                    Le freestyle MPC est un des freestyle qui fera connaître Luv Resval. C'est un freestyle mélangeant rap
                    et chant avec des paroles travaillées qui sauront séduire les auditeurs.
                </p>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-6">
                <img class="imgAlbum" src="img/Albums/mpc.png" alt="image MPC part 2">
            </div>
            <div class="col-3">
                <h3>
                    MPC part II | 2021
                </h3>
                <p>
                    MPC part II est la continuité du premier MPC. Tout autant travaillé au niveau des paroles et singulier
                    au niveau de l'instrumentale présente derrière Luv Resval.
                    Ce freestyle servira de plus à annoncer la sortie de son album Étoile Noire tant attendu.
                </p>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-6">
                <img class="imgAlbum" src="img/Albums/etoileNoir.jpg" alt="image etoile noire">
            </div>
            <div class="col-3">
                <h3>
                    Étoile Noire | 2021
                </h3>
                <p>
                    Étoile Noire est l'album de Luv Resval qui va sortir sur les plateformes de
                    streaming le vendredi 4 Juin. Cet album est beaucoup attendu de ses auditeurs.
                    En effet Luv Resval avait donner beaucoup d'extraits sur les réseaux sociaux qui
                    ont attiser l'attente des auditeurs.
                </p>
            </div>
        </div>
    </div>
</div>
-->
`,
    data(){
        return{
            albums:[]
        }
    },
    mounted(){
        // Appel Ajax via axios liste des villageois
        axios.get('Json/Album.json')
            .then((response) => {
            this.albums = response.data;
            console.log(this.albums);
        })
            .catch(error =>{
                console.log("Erreur : ", error);
            })

    },
    methods:{

    }
})

