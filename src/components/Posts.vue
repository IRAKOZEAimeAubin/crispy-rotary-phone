<template>
    <div v-for=" post  in  posts " key="post.id">
        <SinglePost :post=" post " />
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import SinglePost from './SinglePost.vue';

export default {
    name: "Posts",
    components: { SinglePost },
    props: [ "posts" ],
    setup ( props ) {
        onMounted( () => {
            console.log( "component mounted" )
        } )
        onUnmounted( () => {
            console.log( "component unmounted" )
        } )
        onUpdated( () => {
            console.log( "component updated" )
        } )
    }
};
</script>