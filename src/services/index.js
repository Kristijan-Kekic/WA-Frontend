import axios from 'axios'

//vezan za backend
let Service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000
})

//ruta za prikaz ocjena
let Ocjene = {
    async getAll() {
        let response = await Service.get('/ocjene')
        let data = response.data
        data = data.map(element => {
            return { 
                id: element.id,
                prof: element.profesor,
                ocj: element.ocjena,
                kom: element.komentar
            };
        });
        return data
    }
}

export { Service, Ocjene }