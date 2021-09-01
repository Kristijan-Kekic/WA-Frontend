import axios from 'axios'

//vezan za backend
let Service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
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
    async getOneGrade(id) {
        let response = await Service.get(`/ocjene/${id}`)
        let data = response.data
        return data
    },

    async modifyGrade(id, profesor, ocjena, komentar) {
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
    async getJedan() {
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

    async getDva() {
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