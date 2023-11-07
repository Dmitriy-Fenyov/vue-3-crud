import axios from "axios"

export async function loadPosts(page, loadCount) {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: {
      _page: page,
      _limit: loadCount
    }
  })
  return response.data
}
