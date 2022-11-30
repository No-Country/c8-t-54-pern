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

export const deleteProduct = (title:string,text:string) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}