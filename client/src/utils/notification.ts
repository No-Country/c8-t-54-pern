import Swal from "sweetalert2";

export const Error = (title:string) => {

    const toast = Swal.mixin({
    showConfirmButton: false,
    timer: 3000,
  })
  
  toast.fire({
    icon: 'error',
    title: title,
    
  })
}

export const Success = (title: string, text:string) => {

    const toast = Swal.mixin({
    showConfirmButton: false,
    timer: 2000,
    iconColor: '#13C296'
    
  })
  
  toast.fire({
    icon: 'success',
    title: title,
    text: text,
  })
}