import axios from 'axios'

//vezan za backend
let Service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000
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
    },
    async getAllSpec() {
        let response = await Service.get('/ocjenespec')
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

export { Service, Ocjene }