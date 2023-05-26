import { BASE_URL } from '@/lib/data/constant'
import axios from 'axios'

export async function getLinks() {
  const res = await axios.get(`${BASE_URL}/api/links`)

  return res.data
}

export async function deleteLink(id: string) {
  const res = await axios.delete(`${BASE_URL}/api/links/${id}`)

  return res.data
}

interface CreateLinkParams {
  label: string
  content: string
  type: string
}

export async function createLink({ label, content, type }: CreateLinkParams) {
  const res = await axios.post(`${BASE_URL}/api/links`, {
    label,
    content,
    type,
  })

  return res.data
}

interface UpdateLinkParams {
  id: string
  label?: string
  content?: string
  active?: boolean
}

export async function updateLink({
  id,
  label,
  content,
  active,
}: UpdateLinkParams) {
  const res = await axios.patch(`${BASE_URL}/api/links/${id}`, {
    label,
    content,
    active,
  })

  return res.data
}
