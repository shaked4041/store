import { useState } from 'react'

export default function Item(props) {

  const [count, setCount] = useState(0)

  function handleAdd() {
    props.addToCart(props.item)
    setCount(count + 1)
  }

  function handleRemove() {
    props.removeFromCart(props.item)
    const newCount = count - 1
    setCount(newCount < 0 ? 0 : newCount)
  }

  return (
    <div id="item">
      <div>{props.item.name}</div>
      <div>{`${props.item.price}`}</div>
      <div>{props.item.emoji}</div>
      {props.showActions && ((props.count == 0) ? <button className='add' onClick={handleAdd}>Add To Cart</button> : <div><button className='cartButtons' onClick={handleAdd}>+</button>
        <span>{props.count}</span>
        {props.showActions && (<button  className='cartButtons' onClick={handleRemove}>-</button>)}
      </div>)}
    </div>
  )
}


// (props.count==0)?<button>Add To Cart</button>:<button>+</button>

// {props.showActions && (<button onClick={handleAdd}>+</button>)}
