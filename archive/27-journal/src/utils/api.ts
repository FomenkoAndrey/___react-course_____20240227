import axios from 'axios'
import { ArticleInterface } from '../types/Article.interface.ts'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchArticles = async (sortField: string | null) => {
  try {
    const params: Record<string, number | string> = {
      _start: 0,
      _limit: 100
    }

    if (sortField !== null) {
      const sortOrder: 'desc' | 'asc' = sortField.startsWith('-') ? 'desc' : 'asc'
      params['_sort'] = sortField.startsWith('-') ? sortField.slice(1) : sortField
      params['_order'] = sortOrder
      console.log(sortOrder)
    }

    console.log(params)

    const response = await axios.get(API_URL, { params })
    const data: ArticleInterface[] = (response.data as ArticleInterface[]).map((article: ArticleInterface) => ({
      ...article,
      slug: article.title.toLowerCase().replace(/\s+/g, '-')
    }))
    return data
  } catch (error: unknown) {
    throw new Error('Error fetching articles')
  }
}

export const fetchSingleArticle = async (id: number | string) => {
  try {
    const response = await axios.get(API_URL + `/${id}`)
    const data: ArticleInterface = response.data

    if (data) {
      const article: ArticleInterface = {
        ...data,
        slug: data.title.toLowerCase().replace(/\s+/g, '-')
      }
      return article
    }
  } catch (error: unknown) {
    throw new Error('Error fetching articles')
  }
}
