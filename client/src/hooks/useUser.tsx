import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { postRequest } from '../services/httpRequest'
import { Success, Error } from '../utils/notification'
import {useState} from 'react'
// import { login } from "../app/state/authSlice"

// const createUserFn = (user:{}) => createUser(user, '/users/')
const createUserFn = (user:{}) => postRequest(user, '/api/register')
const loginFn = (data:{}) => postRequest(data, '/users/login')
// const dispatch = useDispatch();

export const useCreateUser = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
  
    return useMutation(createUserFn, {
      onSuccess: (res) => {
        // registerSuccess(navigate('/login'))
        Success('¡Felicitaciones!', 'Tu cuenta ha sido creada con éxito.')
        // queryClient.invalidateQueries('users')
        console.log(res)
        // notification('success', res.message, 'light')
        // navigate('/login')
        setTimeout(() => {
            navigate('/login')
        }, 2100);
      },
      onError: (error) => {
        Error('Error al crear la cuenta')
        console.log(error)
        // notification('error', `${error.response.data.message}`)
      },
    })
  }

  export const useLogin = (action: void) => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const [fulfilled, setFulfilled] = useState(false)
  
    return useMutation(loginFn, {
      onSuccess: (res) => {
        // Success(navigate('/login'))
        // Success()
        setFulfilled(true)
        // dispatch(login(res))
        // queryClient.invalidateQueries('users')
        action
        console.log(res)
        // notification('success', res.message, 'light')
        // navigate('/login')
        setTimeout(() => {
            navigate('/')
        }, 2100);
      },
      onError: (error) => {
        // Error()
        console.log(error)
        // notification('error', `${error.response.data.message}`)
      },
    })
  }