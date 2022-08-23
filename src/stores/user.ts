import { defineStore } from "pinia";
import { auth, usersCollection } from "@/includes/firebase";

export default defineStore("user", {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values: {
      email: string;
      password: string;
      name: string;
      age: number;
      role: string;
      country: string;
    }) {
      await auth.createUserWithEmailAndPassword(values.email, values.password);

      await usersCollection.add({
        name: values.name,
        email: values.email,
        age: values.age,
        role: values.role,
        country: values.country,
      });

      this.userLoggedIn = true;
    },
  },
});
