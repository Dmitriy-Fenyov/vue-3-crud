import axios from "axios"
import { ref, onMounted } from 'vue'

export function usePosts(limit) {
    const posts =  ref([])
    const isLoaded =  ref(true)
    const fetchPosts = async () => {
      try {
        isLoaded.value = false
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: 1,
            _limit: limit
          }
        } )
        posts.value = response.data
        isLoaded.value = true
        
      } catch (e) {
        alert('Error usePosts')
      }
    }
  onMounted(fetchPosts)
  return {
    posts, isLoaded
  }    
}

     



