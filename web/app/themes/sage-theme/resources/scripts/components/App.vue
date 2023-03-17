<script setup>
  import { ref, onMounted } from 'vue'

  const props = defineProps({
    msg: {
      type: String,
    }
  })

  // reactive state
  const count = ref(0)

  // functions that mutate state and trigger updates
  function increment() {
    count.value++
  }

  // lifecycle hooks
  onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
  })
</script>

<template>
  <h3>Here is the message prop: {{ props.msg }}</h3>
  <button @click="increment" class="bg-blue-400 px-10 py-3">Count is: {{ count }}</button>
</template>
