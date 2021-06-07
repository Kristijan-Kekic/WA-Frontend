import axios from 'axios'

//vezan za backend
let Service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000
})

//ruta za prikaz ocjena
let Ocjene = {
    add(ocjena) {
        return Service.post("/ocjene", ocjena)
    },
    async getAll() {
        let response = await Service.get('/ocjene')
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
    }
}

export { Service, Ocjene }