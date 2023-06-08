<template>
    <div v-for=" post  in  posts " key="post.id">
        <SinglePost :post=" post " />
    </div>
</template>

<script>
import SinglePost from './SinglePost.vue';

export default {
    name: "Posts",
    components: { SinglePost },
    props: [ "posts" ]
};
</script>