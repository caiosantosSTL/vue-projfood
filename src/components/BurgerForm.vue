<template>
  <div>
    <Message :msg="msg" v-show="msg"/>
    <div>
      <form id="burger-form" @submit="createBurger">
        <div class="input-container">
          <label for="nome">Nome cliente</label>
          <input
            type="text"
            name="name"
            id="nomeId"
            v-model="nomex"
            placeholder="Digite o nome"
          />
        </div>
        <div class="input-container">
          <label for="nome">Escolha o pao</label>
          <select name="pao" id="paoId" v-model="paox">
            <option value="">Selecione o pao</option>
            <option v-for="pao in paos" :key="pao.id" :value="pao.tipo">{{pao.tipo}}</option>
          </select>
        </div>
        <div class="input-container">
          <label for="carne">Escolha a carne</label>
          <select name="carne" id="carneId" v-model="carnex">
            <option value="">Selecione a carne</option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{carne.tipo}}</option>
          </select>
        </div>
        <div class="input-container" id="opcionais-container">
          <label id="opcionais-titles" for="opcionais"
            >Escolha os opcionais</label
          >
          <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
            <input type="checkbox" name="opcionais" v-model="opcionaisx" :value="opcional.tipo"/>
            <span>{{opcional.tipo}}</span>
          </div>
        </div>
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar meu sanduba" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Message from "../components/Message.vue";
export default {
  components: {Message},
  name: "BurgerForm",
  data() {
    return {
      paos: null,
      carnes: null,
      opcionaisdata: null,

      nome: null,
      pao: null,
      carne: null,
      opcionaisx: [],
      status: "Solicitado",
      msg: null
    };
  },
  methods: {
      async getIngredientes(){ // nao usa axios
          const req = await fetch("http://localhost:3000/ingredientes")
          const data = await req.json()

          this.paos = data.paes
          this.carnes = data.carnes
          this.opcionaisdata = data.opcionais

           console.log(data);
      },
      async createBurger(e){
        e.preventDefault()
        //console.log("Fez o hambirger");

        //pega data desde v-model
        const data = {
          nome: this.nomex,
          carne: this.carnex,
          pao: this.paox,
          opcionais: Array.from(this.opcionaisx),
          status: "Solicitado"
        }
        //console.log(data);
        

        //envia ao servidor dados desde o form, com fomrato json
        const dataJson = JSON.stringify(data)
        const req = await fetch("http://localhost:3000/burgers", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: dataJson
        })

        const res = await req.json()
        console.log(res);
        //msg sistema
        this.msg = `Pedido realizado, numero pedido ${res.id}`

        //limpar msg depois de 3s
        setTimeout(() => this.msg = "", 3000);

        //limpar campos
        this.nome = ""
        this.carne = ""
        this.pao = ""
        this.opcionais = ""
      }
  },
  mounted(){ // aka onload
      this.getIngredientes()
  }

};
</script>

<style scoped>
#burger-form {
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.input-container {
  display: flex;
  flex-direction: column;
}
label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}

input,
select {
  padding: 5px 10px;
  width: 300px;
}

#opcionais-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#opcionais-titles {
  widows: 100%;
}
.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
}
.checkbox-container span,
.checkbox-container input {
  width: auto;
}
.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}
.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}
.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>