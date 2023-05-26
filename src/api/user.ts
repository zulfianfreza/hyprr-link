import axios from 'axios'

export async function getProfile() {
  const res = await axios.get('http://localhost:3000/api/user')

  return res.data
}
