import axios from 'axios'

// todo: помилка
const API_URL: string = 'https://jsonplaceholder.typicode.com/users'

export const fetchData = async (id: number) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data
  } catch (error) {
    throw new Error('Error fetching data')
  }
}


// export const fetchData = async () => {
//   try {
//     const response = await fetch(API_URL)
//
//     if (!response.ok) {
//       throw new Error('Error fetching data')
//     }
//
//     const data = await response.json()
//
//     return data
//   } catch (error) {
//     throw new Error('Error fetching data')
//   }
// }
