const URL = "http://localhost:3001/api/user"

export const registerUser = async (user) => {
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  })
  return await response.json()
}
