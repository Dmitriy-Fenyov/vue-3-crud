import axios from "axios"
import { ref, onMounted } from 'vue'

export function usePost() {
    const post =  ref([])
    const isLoaded =  ref(true)
    const fetchPost = async () => {
      try {
        isLoaded.value = false
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/` +  this.$route.params.id  )
        post.value = response.data
        isLoaded.value = true
        
      } catch (e) {
        alert('Error usePost')
        console.log(post.value)
      }
    }
  onMounted(fetchPost)

  return {
    post, isLoaded
  }    
}
