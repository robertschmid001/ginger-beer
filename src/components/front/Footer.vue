<template>
  <div id="footer" dark>

          <v-flex xs12 sm12 md6 dark class="left-wrapper-footer">
            <form dark color="brown darken-4" class="form-wrapper" action="https://getsimpleform.com/messages?form_api_token=018b48548472bbfe16f32354053ebbb4" method="post">
              <!-- the redirect_to is optional, the form will redirect to the referrer on submission --> 
              <!-- <input type='hidden' name='redirect_to' value='<http://localhost:8080>' /> -->
              <!-- all your input fields here.... -->
              <v-flex dark xs12 sm12 md12 class="name-wrapper no-padding">
                <v-flex xs12 sm6 md6 class="no-padding ">
                  <v-text-field dark class="no-padding top-inputs" color="white" type="text" name="fname" v-model="form.name" :rules="FnRules" label="Your Name" required ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6 class="no-padding">
                  <v-text-field dark class="no-padding top-inputs" color="white" type="email" name="email" v-model="form.email" :rules="EmailRules" label="Your E-mail" required ></v-text-field>
                </v-flex>
              </v-flex>
              <v-flex md12>
                <v-textarea color="white" class="top-inputs" box dark name="message" label="Your Message" :value="form.text" ></v-textarea>
              </v-flex>
              <v-flex md12 class="button-wrap" v-if="valid">
                <button type="submit" value='Submit' class="footer-butn">Get in Touch</button>
              </v-flex>
            </form>
          </v-flex>
          <v-flex xs12 sm12 md6 class="right-bot-wrapper" >
            <div>
              <h2>Septimus Spyder</h2>
              <div>@: Spyder.septimus@gmail.com</div>
              <div>Address: 54, Yew Tree Avenue</div>
              <div>Lichfield, Staffordshire, WS14 9UA </div>
              <div>United Kingdom</div>
            </div>
          </v-flex>
          
   </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      validated: false,
      form: {
        name:'',
        company:'',
        tel: '',
        email: '',
        text: ''
      },
      valid: true,
      FnRules: [
        v => !!v || 'Your name is required',
      ],
      EmailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  props: {
  },
  computed: {
    sendForm () {
      return console.log('not sent')
    }
  },
  methods: {
    clickThis () {
      return console.log('no')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#footer {
  background-color: #1F1E20 ;
  display: flex;
  flex-wrap: wrap;
}
.top-inputs {
}
.left-wrapper-footer {
  padding: 50px 30px;
}
.button-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-butn {
  background-color: none;
  color: #c1c1c1;
  border: 1.5px #c1c1c1 solid;
  padding: 12px 35px;
  max-width: 200px;
  border-radius: 5px;
  font-size: 16px;
}
.footer-butn:hover {
  color: white;
  border: 1.5px white solid;
}
.bottom-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
}
.app-modif {
  
height:100px;  
}
.right-bot-wrapper {
  padding: 50px 30px;
  color: white;
  line-height: 30px;
}
.no-padding {
  padding: 0px!important;
}
.form-background {
  width: contain;
  height: auto;
}
.name-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.input-email {
  width: 100%;
}
.input-name {
  width: 100%;
}
.input-tel {
  width: 100%;
}
.form-wrapper {
  display: flex;
  flex-direction:column;
}
</style>
