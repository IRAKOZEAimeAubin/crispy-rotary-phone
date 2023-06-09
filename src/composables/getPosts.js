import { ref } from "vue"

const getPosts = () => {
    const posts = ref( [] )
    const err = ref( null )

    const load = async () => {
        try {
            let data = await fetch( "http://localhost:3000/posts" )
            if ( !data.ok ) throw Error( "Data not available." )
            posts.value = await data.json()
        } catch ( error ) {
            err.value = error.message
        }
    }

    return { posts, err, load }
};

export default getPosts