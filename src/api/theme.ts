import { BASE_URL } from '@/lib/data/constant'
import axios from 'axios'

export async function getTheme() {
  const res = await axios.get(`${BASE_URL}/api/theme`)

  return res.data
}
