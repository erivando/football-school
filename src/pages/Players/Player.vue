<template>
  <b-card header-tag="header" border-variant="light">
    <template #header>
      <h3>Alunos</h3>
      <div style="float:right; margin-top: -40px">
        <router-link to="/player/create">
          <b-button>cadastrar</b-button>
        </router-link>
      </div>
    </template>
    <b-card-body>
      <b-table :items="players" :fields="fields" :busy="loading" class="mt-3" striped hover>
        <template #table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
          </div>
        </template>
        <template #cell(action)="data">
          <router-link :to="'/player/' + data.item.id">
            <b-button variant="primary" size="sm">
              <b-icon icon="pencil-square"></b-icon>
            </b-button>
          </router-link>
          <b-button @click="remove(data.item.id)" variant="danger" size="sm" style="margin-left: 4px">
            <b-icon icon="trash"></b-icon>
          </b-button>
        </template>
      </b-table>
    </b-card-body>
  </b-card>
</template>

<script>
import api from '../../services/api'

export default {
  name: 'Player',
  data() {
    return{
      fields: [
        {
          key: 'id',
          label: '#'
        },
        {
          key: 'name',
          label: 'Nome'
        },
        {
          key: 'address',
          label: 'Endereço'
        },
        {
          key: 'age',
          label: 'Idade'
        },
        {
          key: 'action',
          label: 'Ações'
        }
      ],
      players: []
    }
  },
  mounted() {
    this.listar();
  },
  computed: {
    loading() {
      return this.players.length === 0;
    }
  },
  methods: {
    listar() {
      api.get('students').then(response => {
        this.players = response.data;
      })
    },
    remove(id) {
      api.delete(`students/${id}`)
      this.listar()
    }
  }
}
</script>