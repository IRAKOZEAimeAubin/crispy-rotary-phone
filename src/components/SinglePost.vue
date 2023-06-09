<template>
    <div class="flex flex-col items-center justify-center mt-4">
        <router-link :to="{ name: 'Details', params: { id: post.id } }">
            <h3 class="font-serif text-slate-900 text-xl font-bold m-2">{{ post.title }}</h3>
        </router-link>
        <p class="text-justify font-medium">{{ snippet }}</p>
        <div class="flex gap-2 mt-1">
            <span v-for="tag in post.tags" :key="tag" class="bg-blue-200 font-semibold text-sm py-[2px] px-1 rounded-xl">#{{ tag }}</span>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: "SinglePost",
    props: [ "post" ],
    setup ( props ) {
        const snippet = computed( () => {
            return `${ props.post.body.substring( 0, 100 ) }...`
        } )
        
        return {
            snippet
        }
    }
}
</script>