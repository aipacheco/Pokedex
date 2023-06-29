import React, { useState } from "react"
import "../../styles/register.css"
import { registerUser } from "../service/service"

export const Register = () => {
  const [form, setForm] = useState({})

  const change = (e) => {
    const { target } = e
    const { name, value } = target
    setForm((prevForm) => {
      return { ...prevForm, [name]: value }
    })
  }
  const submit = (e) => {
    e.preventDefault()
    registerUser(form)
  }

  return (
    <div className="container mt-5 scale-in-ver-center">
      <h1 className="text-center m-5 ">Register</h1>
      <form onChange={change} onSubmit={submit}>
        <div className="form-group">
          <label>eMail</label>
          <input name="email" type="email" className="form-control" />

          <label>Password</label>
          <input name="password" type="Password" className="form-control" />
          <input
            type="submit"
            value="Send"
            className="form-control mt-4 bg-success-subtle"
          />
        </div>
      </form>
    </div>
  )
}


