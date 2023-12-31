import axios from "axios"
import { ref, onMounted } from 'vue'

export function usePost(id) {
    const post =  ref([])
    const isLoaded =  ref(true)
    const fetchPost = async () => {
      try {
        isLoaded.value = false
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        post.value = response.data
        isLoaded.value = true
      } catch (e) {
        alert('Error usePost')
      }
    }
  onMounted(fetchPost)
  return {
    post, isLoaded
  }    
}
