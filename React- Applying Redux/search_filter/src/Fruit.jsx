import React, { useState } from 'react'

function Fruit() {

    const fruitlist = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon",
        "Grapes",
        "Strawberry",
        "Pomegrenate",
        "Cherry",
        "Dragon Fruit",
        "Pear"
    ]

    const [filterFruit, setFilterFruit] = useState(fruitlist);

    const onchange = (event) => {
        if(event.target.value === "") {
            setFilterFruit(fruitlist)
            return;
        }
        const filteredValues = fruitlist.filter(
            (item) =>
              item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
          );
          setFilterFruit(filteredValues);
    }

    

  return (
    <div className='app'>
        <form>
            <label><b>Search:</b></label>
            <input type="text" onChange={onchange}/>
        </form>
        {
            filterFruit &&
            filterFruit.map((item,index)=> (
                <div key={index}>{item}</div>
            ))
        }
    </div>
  )
}

export default Fruit