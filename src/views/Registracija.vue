<template>
<div class="container login-container">
    <div class="br"><br></div>
            <div class="row">
              <div class="col-3"></div>
                <div class="col-md-6 login-form-1">
                    <h3>Registracija</h3>
                    <form>
                        <div class="form-group">
                            <input type="email" v-model="username" class="form-control" placeholder="Email *" value="" />
                        </div>
                        <div class="br"><br></div>
                        <div class="form-group">
                            <input type="password" v-model="password"  class="form-control" placeholder="Lozinka *" value="" />
                        </div>
                        <div class="br"><br></div>
                        <div class="form-group">
                            <input type="button" @click="signup" class="btnSubmit" value="Registriraj se" />
                        </div>
                        <div class="br"><br></div>
                        <div class="br"><br></div>
                    </form>
                </div>
                <div class="col-3"></div>
            </div>
        </div>
</template>

<script>

import {Auth} from '@/services'

export default {
    name: 'registracija',
    data (){
        return {
            username:"",
            password:""
        }
    },
    methods: {
        async signup(){
            if (this.username === '' || this.username === null || this.username.value === 0){
                 return alert("Unesite Vaš e-mail!");
            }
            else if (this.password === '' || this.password === null){
                return alert("Unesite Vašu lozinku!");
            }
            await Auth.register(this.username, this.password)
            this.$router.replace("/")
        }
    },
};
</script>

<style scoped>
.login-container{
    margin-top: 5%;
    margin-bottom: 5%;
}
.login-form-1{
    padding: 5%;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-1 h3{
    text-align: center;
    color: #333;
}

.login-container form{
    padding: 10%;
}
.btnSubmit
{
    width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    border: none;
    cursor: pointer;
}
.login-form-1 .btnSubmit{
    font-weight: 600;
    color: #fff;
    background-color: #0062cc;
}

</style>