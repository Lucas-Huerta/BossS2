var Biographie = Vue.component('Biographie',{
template:`

<div class="container-fluid">
    <div class="col-12">
        <div class="row">
            <h1 class="texteCentre titres">
                Sa biographie
            </h1>
        </div>

        <div class="row rowAlbum" v-for="biographie in biographies" :key="biographie.id" >
            <div class="col-6">
                <img class="imgAlbum" :src=biographie.Image alt="imageBio">
            </div>
            <div class="col-5" >
                <p>
                    {{biographie.Texte}}
                </p>
            </div>

        </div>
    `,
    data(){
        return{
            biographies:[]
        }
    },
    mounted(){
        // Appel Ajax via axios liste des villageois
        axios.get('Json/Biographie.json')
            .then((response) => {
                this.biographies = response.data;
                console.log(this.biographies);
            })
            .catch(error =>{
                console.log("Erreur : ", error);
            })
    },
    methods:{

    }
})

