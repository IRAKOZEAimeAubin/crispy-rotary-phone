<template>
  <div class="flex flex-col gap-2 items-center justify-center">
    <p ref="p" class="font-bold text-center">My name is {{ name }} and I am {{ age }} years old.</p>
    <button class="bg-yellow-100 font-bold p-2 rounded-lg uppercase" @click="handleClick">Click Me</button>
    <button class="bg-amber-100 font-bold p-2 rounded-lg uppercase" @click="age++">Increase Age</button>
    <input type="text" v-model="name" class="border-[2px] border-slate-200 p-1 rounded-md outline-none">
  </div>
  <div class="flex flex-col gap-2 items-center justify-center">
    <h2 class="font-bebas text-xl tracking-wide text-blue-950 font-semibold">Using Refs</h2>
    <p>{{ shinobiOne.name }} - {{ shinobiOne.age }}</p>
    <button class="bg-fuchsia-200 font-bold p-2 rounded-lg uppercase" @click="updateShinobiOne">Update Shinobi One</button>
    <h2 class="font-bebas text-xl tracking-wide text-blue-950 font-bold">Using Reactive</h2>
    <p>{{ shinobiTwo.name }} - {{ shinobiTwo.age }}</p>
    <button class="bg-stone-200 font-bold p-2 rounded-lg uppercase" @click="updateShinobiTwo">Update Shinobi Two</button>
  </div>
  <div class="flex flex-col gap-2 items-center justify-center">
    <h2 class="font-bebas text-xl tracking-wide text-blue-950 font-semibold">Computed Values</h2>
    <input type="text" class="border-[2px] border-slate-200 p-1 rounded-md outline-none" v-model="search" placeholder="Search...">
    <div class="grid grid-cols-4 gap-2 mt-1">
      <span v-for="name in matchingNames" :key="name" class="bg-gray-200 p-1 rounded uppercase font-bold text-center">{{ name }}</span >
    </div>
    <button class="bg-red-200 font-bold p-2 rounded-lg uppercase" @click=" stopWatching ">Stop Watching</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue';

export default {
  name: "Home",
  setup () {
    let name = ref( "Luigi" )
    let age = ref( 30 )

    const p = ref( null )

    const handleClick = () => {
      console.log( p.value )

      name.value = "Mario"
      age.value = 35
      
      // p.value.classList.add( "text-red-600" )
      // p.value.textContent = "Hello"
    }

    // Using ref
    const shinobiOne = ref(
      {
        name: "Minato Namikaze",
        age: 24
      }
    )

    const updateShinobiOne = () => {
      shinobiOne.value.age = 10
    }

    // Using reactive
    const shinobiTwo = reactive(
      {
        name: "Jiraiya",
        age: 72
      }
    )

    const updateShinobiTwo = () => {
      shinobiTwo.age = 6
    }

    // computed values
    const search = ref( "" )
    const names = ref( [ "luffy", "zoro", "sanji", "nami", "robin", "jinbe", "usopp", "brook", "chopper", "franky" ] )
    const matchingNames = computed( () => {
      return names.value.filter( ( n ) => n.includes( search.value ) )
    } )

    // watch & watchEffect
    const stopWatch = watch( search, () => {
      console.log( "watch function ran" )
    } )
    
    const stopWatchEffect = watchEffect( () => {
      console.log( "watchEffect function ran", search.value )
    } )

    const stopWatching = () => {
      stopWatch()
      stopWatchEffect()
    }

    return {
      name,
      age,
      handleClick,
      p,
      shinobiOne,
      shinobiTwo,
      updateShinobiOne,
      updateShinobiTwo,
      names,
      search,
      matchingNames,
      stopWatching
    }
  }
}
</script>