<template>
  <div>
    <router-link to="/">
      <b-button variant="danger" class="mb-4">Voltar</b-button>
    </router-link>
    <b-card header-tag="header" border-variant="light">
      <template v-if="this.$route.params.player !== 'create' && form.id === undefined">
        <div id="spinner" class="d-flex justify-content-center">
          <b-spinner></b-spinner>
        </div>
      </template>
      <template #header>
        <h3>{{ changeTitle }}</h3>
      </template>
      <b-form @submit.prevent="setSubmit" class="needs-validation">
        <b-form-group
          id="input-group-1"
          label="Nome:"
          label-for="input-1"
          class="mb-2"
        >
          <b-form-input
            id="input-1"
            type="text"
            placeholder="Digite seu nome"
            class="mt-2"
            v-model="form.name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Endereço:"
          label-for="input-2"
          class="mb-3"
        >
          <b-form-input
            id="input-2"
            placeholder="Digite seu endereço"
            class="mt-2"
            v-model="form.address"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Nome da mãe:"
          label-for="input-3"
          class="mb-3"
        >
          <b-form-input
            id="input-3"
            placeholder="Digite o nome da mãe"
            class="mt-2"
            v-model="form.mother"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Nome do pai:"
          label-for="input-4"
          class="mb-3"
        >
          <b-form-input
            id="input-4"
            placeholder="Digite o nome da pai"
            class="mt-2"
            v-model="form.father"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Idade:"
          label-for="input-5"
          class="mb-3"
        >
          <b-form-input
            id="input-5"
            placeholder="Idade do aluno"
            class="mt-2"
            v-model="form.age"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import api from '../../services/api';

export default {
  name: "CreatePlayer",
  data() {
    return {
      form: {
        name: null,
        address: null,
        mother: null,
        father: null,
        age: null,
      },
    };
  },
  mounted() {
    if(this.$route.params.player !== "create") {
      this.listar()
    }
  },
  computed: {
    changeTitle() {
      var title = this.$route.params.player === "create" ? "Cadastrar" : "Editar"
      return title
    },
  },
  methods: {
    cadastrar() {
      api.post('students', this.form)
      this.form = {}
    },
    listar() {
      var id = this.$route.params.player
      api.get(`students/${id}`).then(response => {
        this.form = response.data
      })
    },
    editar() {
      var id = this.$route.params.player
      api.put(`students/${id}`, this.form)
      window.history.go(-1)
    },
    setSubmit() {
      if(this.$route.params.player === "create") {
        this.cadastrar()
      } else {
        this.editar()
      }
    }
  },
};
</script>

<style scoped>
#spinner {
  position: absolute;
  background-color: white;
  width: 97.5%;
  opacity: 0.8;
  height: 68vh;
  padding-top: 15%;
}
</style>