<template>
  <v-layout column>
    <v-flex xs10 offset-xs1>
      <div class="white elevation-2">
        <v-toolbar flat dense class="red darken-4">
          <v-toolbar-title>Enroll</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <input
            type="email"
            name="email"
            v-model="email"
            placeholder="email" />
          <br>
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="password" />
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn
            class="red darken-4"
            @click="enroll">
            Enroll
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async enroll () {
      try {
        await AuthenticationService.enroll({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
