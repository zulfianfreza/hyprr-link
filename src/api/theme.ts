import axios from 'axios'

export async function getTheme() {
  const res = await axios.get('http://localhost:3000/api/theme')

  return res.data
}
