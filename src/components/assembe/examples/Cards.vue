<template>
  <v-card max-width="800" class="mx-auto">
    <v-card-title>Users on website</v-card-title>
    <v-card-subtitle>If you want to block list of users, change <code>list</code> permissions for <code>_user</code> resource :)</v-card-subtitle>
    <v-container>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card color="green" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.name"
                ></v-card-title>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  import sdk from "../../../api/sdk";

  export default {
    name: 'CardsExample',
    data() {
      return {
        items:[]
      }
    },
    mounted() {
      this.getItems()
    },
    methods: {
      getItems() {
        sdk.get('/api/_user').then((response) => {
          this.items = response.data.items;
        })
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
    text-align: center;
  }

</style>
