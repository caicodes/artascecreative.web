<script setup>
import { ref, onMounted } from 'vue'
import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore";


const todos = ref([])

// get invoices (or whatever)
onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "todos"));
  let fbTodos = []
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data())
    const todo = {
      id: doc.id,
      content: doc.data().content,
      done: doc.data().done
    }
    fbTodos.push(todo)
  })
  todos.value = fbTodos

})


defineProps({
  msg: String,
  msgTitle: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msgTitle }}</h1>
  <h2>{{ msg }}</h2>

  <h3>Firebase Project Integration</h3>
  <h4>From Firestore: </h4>

  <div v-for="todo in todos">
    <p>ID: {{ todo.id }} content: {{ todo.content }} done: {{ todo.done }} </p>
  </div>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/Welcome.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
