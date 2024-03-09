// todo: помилка
const API_URL: string = 'https://jsonplaceholder.typicode.com/users1'

export const fetchData = async () => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      // Якщо статус відповіді не вказує на успіх, кидаємо помилку перед тим як спробувати читати JSON
      throw new Error('Error fetching data')
    }
    const data = await response.json() // Тепер це безпечно, оскільки ми знаємо, що запит був успішний
    return data
  } catch (error) {
    // Тепер будь-яка помилка, включаючи помилку мережі або помилку JSON, буде піймана тут
    throw new Error('Error fetching data')
  }
}
