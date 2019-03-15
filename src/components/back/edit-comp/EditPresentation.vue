<template>
  <div class="presentation-edit">

    <h1>PRESENTATION EDIT</h1>
    <div class="param-wrapper">
      Main Title: {{this.mainTitle}}
    </div>
    <v-text-field v-show="edit" dark class="no-padding top-inputs" color="white" type="text" name="fname" v-model="title" label="Main Title" required ></v-text-field>
    <v-btn color="red" @click="Edit">Edit</v-btn>
    <v-btn :disabled="!title" color="success" @click="validate">Validate</v-btn>


  </div>
</template>

<script>
export default {
  name: 'EditPresentation',
  data () {
    return {
      edit: false,
      title: "",
      mainTitle: "This is a MongoDB Title"
    }
  },
  props: {
  },
  methods: {
    Edit () {
      this.edit = !this.edit
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.presentation-edit {
  background-color: grey;
  color: white;
  height: 100%;
  width: 100%;
}
.param-wrapper {
  /* border: 1px solid rgb(59, 59, 59);
  border-radius: 5px;
  padding: 5px; */
}
</style>