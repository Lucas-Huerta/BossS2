var CreateAlbum = Vue.component('CreateAlbum',{
    template:`

        <div class="container-fluid">
           
            <div style="margin-top: 5vh ">
                <h5>Création d'un album</h5>
            </div>
                 
            <form @submit="submit" >
                  <div class="card-body">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">User</span>
                        </div>
                        <input 
                            type="text" 
                            class="form-control" 
                            maxlength="32" 
                            id="User" 
                            v-model="album.User"
                            required 
                            placeholder="Nom de l'utilisateur" />
                    </div>
                    <br/>
                <div class="card-body">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Nom</span>
                        </div>
                        <input 
                            type="text" 
                            class="form-control" 
                            maxlength="32" 
                            id="nom" 
                            v-model="album.Nom"
                            required 
                            placeholder="Nom de l'album" />
                    </div>
                    <br/>
                    <div class="input-group"> 
                        <div class="input-group-prepend">
                            <span class="input-group-text">Description</span>
                        </div>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="description" 
                            id="description"  
                            v-model="album.Description"
                            required 
                            placeholder="Entrez une description de l'album"
                        />
                    </div>
                    <br/>
                </div>
                <div class="card-footer">
                    <button type="button" 
                        class="btn btn-default float-left" 
                        id="cancel">
                        <router-link to="albums">
                            Cancel
                        </router-link>
                    </button>         
                    <button type="submit" class="btn btn-primary float-right">Valider</button> 
                </div>
            </form>
        </div>
    `,
    data() {
        return{
            album:{ // Bataille à créer
                User: null,
                Nom:null,
                Description: null
            },
            albums:[] // Alimentation liste des lieux
        }
    },
    methods: {
        submit:function(){

            // Objet FormData pour passage de paramètres
            let params = new FormData();
            // Ajout des paramètres de la batailles
            params.append("User",        this.album.User);
            params.append("Nom",         this.album.Nom);
            params.append("Description", this.album.Description);

            // Appel Ajax via axios création de la bataille
            axios.post('https://boss.jmfino.fr/create.php', params)
                // Réponse et récupération des données
                .then(response => {
                    // Récupérer les données
                    console.log("retour de la promesse : ",response);

                })
                // Cas d'erreur
                .catch(error =>{
                    console.log("Erreur : ", error);
                });
        }

    }
})