import { FC, PropsWithChildren } from 'react'
import {AiOutlineClose} from 'react-icons/ai'

export interface propsModal {
    children: any
    modal: Boolean,
    setModal:React.Dispatch<Boolean>
}

export const Modal: FC<propsModal> = ({children,modal,setModal})  => {

  return (
    <>  {modal&&
        <div className='overlay'>
            <div className='container-modal'>
                <button className='close' onClick={() => setModal(false)}>
                    <AiOutlineClose/>
                </button>
                {children}
            </div>
        </div>}
    </>
  )
}
