import { BASE_URL } from '@/lib/data/constant'
import axios from 'axios'

export async function getProfile() {
  const res = await axios.get(`${BASE_URL}/api/user`)

  return res.data
}
