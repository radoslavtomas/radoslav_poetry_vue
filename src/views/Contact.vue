<template>
  <section class="contact full-height">
    <HeroImg image="/assets/img/contact.jpg" :title="$t('contact.title')"/>

    <form
      action="https://formspree.io/radoslav.tomas@gmail.com"
      method="POST"
      class="container"
      ref="contactForm"
    >
      <input
        id="name"
        type="text"
        @blur="validateName"
        name="name"
        :placeholder="$t('contact.name')"
        v-model="name"
        :class="{ 'error-border':nameError }"
      >
      <div v-if="nameError" class="error">
        <small>{{ $t('contact.name_error') }}</small>
      </div>
      <input
        id="email"
        data-vv-as="email"
        type="email"
        name="_replyto"
        @blur="validateEmail"
        :placeholder="$t('contact.email')"
        v-model="email"
        :class="{ 'error-border':emailError }"
      >
      <div v-if="emailError" class="error">
        <small>{{ $t('contact.email_error') }}</small>
      </div>
      <div v-if="emailError2" class="error">
        <small>{{ $t('contact.email_error_2') }}</small>
      </div>
      <textarea
        id="message"
        name="message"
        :placeholder="$t('contact.message')"
        v-model="message"
        @blur="validateMessage"
        :class="{ 'error-border':messageError }"
      ></textarea>
      <div v-if="messageError" class="error">
        <small>{{ $t('contact.message_error') }}</small>
      </div>
      <input type="hidden" name="eel" v-model="eel">
      <button id="formBtn" class="btn" @click.prevent="submitForm">Send</button>
    </form>
  </section>
</template>

<i18n>
{
  "en": {
    "contact": {
      "title": "Contact",
      "name": "Your name",
      "name_error": "Hey, what's your name?",
      "email": "Your email",
      "email_error": "C'mon, how would I be able to reply to you?",
      "email_error_2": "Hmm, this doesn't look like a valid email",
      "message": "Your message",
      "message_error": "Say what you need to say"
    }
  },
  "sk": {
    "contact": {
      "title": "Kontakt",
      "name": "Tvoje meno",
      "name_error": "Hej, ako sa voláš?",
      "email": "Tvoj email",
      "email_error": "Ale no, ako inak ti odpíšem?",
      "email_error_2": "Hmm, toto nevyzerá ako platný email",
      "message": "Tvoj mesidž",
      "message_error": "Povedz, čo máš na srdiečku..."
    }
  }
}
</i18n>

<script>
import HeroImg from "@/components/HeroImg.vue";

export default {
  data() {
    return {
      name: "",
      nameError: false,
      email: "",
      emailError: false,
      emailError2: false,
      message: "",
      messageError: false,
      eel: ""
    };
  },
  methods: {
    validateName() {
      if (this.name.length == 0) {
        this.nameError = true;
        return false;
      } else {
        this.nameError = false;
        return true;
      }
    },
    validateMessage() {
      if (this.message.length == 0) {
        this.messageError = true;
        return false;
      } else {
        this.messageError = false;
        return true;
      }
    },
    validateEmail() {
      if (this.email.length == 0) {
        this.emailError = true;
        this.emailError2 = false;
        return false;
      } else {
        this.emailError = false;
      }

      const regex = /^([a-zA-Z0-9_\-\.\+]+)@((\[[0-2]{1}[0-5]{1}[0-5]{1}\.[0-2]{1}[0-5]{1}[0-5]{1}\.[0-2]{1}[0-5]{1}[0-5]{1}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-2]{1}[0-5]{1}[0-5]{1})(\]?)$/i;
      if (!regex.test(this.email.toLowerCase())) {
        this.emailError2 = true;
        return false;
      } else {
        this.emailError2 = false;
        return true;
      }
    },
    validateHoneycomb() {
      if (this.eel.length > 0) {
        return false;
      } else {
        return true;
      }
    },
    submitForm() {
      const name = this.validateName();
      const email = this.validateEmail();
      const message = this.validateMessage();
      const honeycomb = this.validateHoneycomb();

      if (name && email && message && honeycomb) {
        // console.log(this.$refs.contactForm);
        this.$refs.contactForm.submit();
      } else {
        return false;
      }
    }
  },
  computed: {
    validName() {
      return this.name.length != 0;
    }
  },
  components: {
    HeroImg
  }
};
</script>

<style scoped lang="scss">
.contact {
  background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10h10v10H0V10zM10 0h10v10H10V0z' fill='%23aeaeae' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E");
}

form {
  margin-top: 40px;

  input,
  textarea {
    display: block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    padding-left: 10px;
    margin-top: 25px;
    font-family: "Fira Sans", sans-serif;
    font-size: 16px;
    border: 1px solid #929292;
    box-shadow: 0 0px 11px rgba(0, 0, 0, 0.09), 0 1px 1px rgba(0, 0, 0, 0.09);
  }

  input:first-child {
    margin: 0;
  }
  .error {
    text-align: left;
    color: #d60505;
    margin: 5px 0 0 0;
  }

  .error-border {
    border: 1px solid #d60505;
  }

  textarea {
    line-height: 26px;
    height: 120px;
  }

  #formBtn {
    cursor: pointer;
    margin: 30px 0 40px 0;
    outline: none;
  }
}
</style>
