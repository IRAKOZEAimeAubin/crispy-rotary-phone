import { ref } from "vue";

const getOnePost = ( id ) => {
    const post = ref( null )
    const err = ref( null )

    const load = async () => {
        try {
            let data = await fetch( `http://localhost:3000/posts/${ id }` )
            if ( !data.ok ) throw Error( "Post does not exist." )
            post.value = await data.json()
        } catch ( error ) {
            err.value = error.message
        }
    }

    return { post, err, load }
}

export default getOnePost