import axios from 'axios'
//import $router from '@/router'

//vezan za backend
let Service = axios.create({
    baseURL: 'https://wa-backend2-2a6lt7ozx-kristijan-kekic.vercel.app:3000',
    timeout: 5000
})

// prije svakog poslanog requesta na backend izvrši:
Service.interceptors.request.use((request) => {
    try {
        request.headers['Authorization'] = 'Bearer ' + Auth.getToken();
    } catch (e) {
        console.error(e);
    }
    return request;
});

Service.interceptors.response.use((response) => response, (error) => {
    if(error.response.status == 401 || error.response.status == 401) {
        Auth.logout()
        //$router.go()
    }
})

//ruta za prikaz ocjena
let Ocjene = {
    addNewInput(ocjena) {
        return Service.post("/ocjene", ocjena)
    },
    async getAllDefault() {
        let response = await Service.get('/ocjene')
        let data = response.data
        data = data.map(element => {
            return { 
                id: element._id,
                prof: element.profesor,
                ocj: element.ocjena,
                kom: element.komentar,
            };
        });
        return data
    },

    async getAllEdit() {
        let response = await Service.post('/ocjeneedit',{username: Auth.getUser().username})
        let data = response.data
        data = data.map(element => {
            return { 
                id: element._id,
                prof: element.profesor,
                ocj: element.ocjena,
                kom: element.komentar,
            };
        });
        return data
    },

    async getOneGrade(id) { // izvlaci se id sta je poslan
        let response = await Service.get(`/ocjene/${id}`) //$ predstavlja da je dinamican
        let data = response.data //sta mu vrati backend
        return data
    },

    async modifyGrade(id, profesor, ocjena, komentar) { //izvlaci se poslani id, prof...
        let response = await Service.put(`/ocjene/${id}`, {profesor, ocjena, komentar})
        let data = response.data
        return data
    },

    async deleteGrade(id) {
        await Service.delete(`/ocjene/${id}`)
    },

    async getAllMin() {
        let response = await Service.get('/ocjenemin')
        let data = response.data
        data = data.map(element => {
            return { 
                id: element._id,
                prof: element.profesor,
                ocj: element.ocjena,
                kom: element.komentar
            };
        });
        return data
    },

    async getAllMax() {
        let response = await Service.get('/ocjenemax')
        let data = response.data
        data = data.map(element => {
            return { 
                id: element._id,
                prof: element.profesor,
                ocj: element.ocjena,
                kom: element.komentar
            };
        });
        return data
    },
    async getOcjeneJedan() {
        let response = await Service.get('/ocjenejedan')
        let data = response.data
        data = data.map(element => {
            return { 
                id: element._id,
                prof: element.profesor,
                ocj: element.ocjena,
                kom: element.komentar
            };
        });
        return data
    },

    async getOcjeneDva() {
        let response = await Service.get('/ocjenedva')
        let data = response.data
        data = data.map(element => {
            return { 
                id: element._id,
                prof: element.profesor,
                ocj: element.ocjena,
                kom: element.komentar
            };
        });
        return data
    },

    async getOcjeneTri() {
        let response = await Service.get('/ocjenetri')
        let data = response.data
        data = data.map(element => {
            return { 
                id: element._id,
                prof: element.profesor,
                ocj: element.ocjena,
                kom: element.komentar
            };
        });
        return data
    },

    async getOcjeneCetiri() {
        let response = await Service.get('/ocjenecetiri')
        let data = response.data
        data = data.map(element => {
            return { 
                id: element._id,
                prof: element.profesor,
                ocj: element.ocjena,
                kom: element.komentar
            };
        });
        return data
    },

    async getOcjenePet() {
        let response = await Service.get('/ocjenepet')
        let data = response.data
        data = data.map(element => {
            return { 
                id: element._id,
                prof: element.profesor,
                ocj: element.ocjena,
                kom: element.komentar
            };
        });
        return data
    },

    async getAllAvg() {
        let response = await Service.get('/ocjeneavg')
        let data = response.data
        data = data.map(element => {
            return { 
                prof: element._id,
                ocj: element.avgOcjena
            };
        });
        return data
    }
}

let Auth = {
    async login (username, password){

        try {
            let response = await Service.post("/auth", {
                username: username,
                password: password
            });
    
            let user = response.data
    
            localStorage.setItem("user", JSON.stringify(user));
        return true;
        } catch (error) {
            return false
        }

        
    },
    async register (username, password){
        let response = await Service.post("/users", {
            username,
            password
        })
        let user = response.data

        localStorage.setItem("user", JSON.stringify(user));

        return true;
    },
    logout(){
        localStorage.removeItem('user');
    },
    getUser(){
        return JSON.parse(localStorage.getItem('user'))
    },
    getToken(){
        let user = Auth.getUser();
        if (user && user.token){
            return user.token;
        }
    },
    authenticated(){
        let user = Auth.getUser()
        if(user && user.token){
            return true
        }
        return false
    },
    state: {
        get authenticated(){
            return Auth.authenticated();
        },
    },
}

export { Service, Ocjene, Auth }