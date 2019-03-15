<template>
  <div class="login">

<div class="form-wrapper">
  <v-form
    class="form-login"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="Id"
      :rules="IdRules"
      label="Id"
      required
    ></v-text-field>
    <v-text-field
      type="password"
      v-model="password"
      :rules="passwordRules"
      label="Password"
      required
    ></v-text-field>
    <v-btn
      :disabled="!valid"
      color="success"
      @click="validate"
    >
    Validate
    </v-btn>
  </v-form>

</div>


  </div>
</template>

<script>
export default {
  name: 'Login',

  data () {
    return {
      valid: true,
      Id: '',
      IdRules: [
        v => !!v || 'Id is required',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'password is required',
      ]
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  background-color: grey;
  height: 100%;
  display: flex;
  align-items: center;
}
.form-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>