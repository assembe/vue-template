<template>
  <v-app id="assembe">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      fixed
    >
      <v-list dense>
        <router-link
          to="/"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <v-list-item link :value="isActive" :href="href" @click="navigate" to="/">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <template v-if="$store.getters.isLogged">
          <router-link
            to="/dashboard"
            v-slot="{ href, route, navigate, isActive, isExactActive }"
          >
            <v-list-item link :value="isActive" :href="href" @click="navigate" to="/dashboard">
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <v-list-item link @click="logout">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </template>
        <template v-else>
          <router-link
            to="/login"
            v-slot="{ href, route, navigate, isActive, isExactActive }"
          >
            <v-list-item link :value="isActive" :href="href" @click="navigate" to="/login">
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Login</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
          <router-link
            to="/register"
            v-slot="{ href, route, navigate, isActive, isExactActive }"
          >
            <v-list-item link :value="isActive" :href="href" @click="navigate" to="/register">
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Register</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      fixed
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Assembe Template App</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">Assembe &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
    }),
    methods: {
      logout() {
        this.$store.dispatch('logout');
        this.$router.push('/');
      }
    }
  }
</script>
