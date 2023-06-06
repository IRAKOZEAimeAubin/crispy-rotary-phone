<template>
  <div class="flex flex-col gap-2 items-center justify-center">
    <p ref="p" class="font-bold text-center">My name is {{ name }} and I am {{ age }} years old.</p>
    <button class="bg-yellow-100 font-bold p-2 rounded-lg uppercase" @click="handleClick">Click Me</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "Home",
  setup () {
    let name = "Luigi"
    let age = 30

    const p = ref( null )

    const handleClick = () => {
      console.log( p.value )
      p.value.classList.add( "text-red-600" )
      p.value.textContent = "Hello"
    }

    return {
      name,
      age,
      handleClick,
      p
    }
  }
}
</script>