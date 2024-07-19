import React,{FC} from 'react'
import { IUser } from './types'
import Productsitem from './Productsitem'
import LoadItem from './LoadItem';

interface UserListProps{
    users:IUser[];
}

const ProductsList:FC<UserListProps> = ({users}) => {
  return (
    <div className='content-products'>
        {users?.length?
        users.map(user=>(
            <Productsitem key={user.id} user={user}/>
        )):<LoadItem/>
    }
    </div>
  )
}

export default ProductsList