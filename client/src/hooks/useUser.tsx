import {useMutation, useQueryClient} from '@tanstack/react-query'
import {useNavigate} from 'react-router-dom'
import { postRequest } from '../services/httpRequest'
import { Success, Error } from '../utils/notification'

const createUserFn = (user:{}) => postRequest(user, '/users')

export const useCreateUser = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
  
    return useMutation(createUserFn, {
      onSuccess: (res) => {
        Success('¡Felicitaciones!', 'Tu cuenta ha sido creada con éxito.')
        setTimeout(() => {
            navigate('/login')
        }, 2100);
      },
      onError: (error) => {
        Error('Error al crear la cuenta')
      },
    })
  }
