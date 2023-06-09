<template>
    <div v-if="err">{{ err }}</div>
    <div v-if="post" class="flex flex-col items-center">
        <h1 class="mb-4 font-serif font-extrabold text-2xl text-stone-950">{{ post.title }}</h1>
        <p class="text-justify px-8 text-lg tracking-wide">{{ post.body }}</p>
    </div>
</template>

<script>
import getOnePost from "../composables/getOnePost"

export default {
    name: "Details",
    props: [ "id" ],
    setup ( props ) {
        const { post, err, load } = getOnePost( props.id )

        load()

        return { post, err }
    }
}
</script>