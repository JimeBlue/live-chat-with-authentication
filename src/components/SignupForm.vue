<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button>Sign up</button>
  </form>
</template>

<script>
import useSignup from "../composables/useSignup";
const { error, signup } = useSignup();
export default {
  data() {
    return {
      displayName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      await signup(this.email, this.password, this.displayName);
      console.log("user signed up");
    },
  },
};
</script>

<style></style>
