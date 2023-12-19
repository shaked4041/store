
import { useState } from "react"


export default function     Search(props) {
    const [query, setQuery] = useState("")


    function handleSearch(e) {
        const filtered = props.fruits.filter((f) => {
            if (f.name.toLowerCase().includes(query.toLowerCase())) return true
        })
        props.setResults(filtered)
        // console.log(filtered);
    }

    return (
        <div>
            <input type='text' className="myInput" onInput={(e) => { setQuery(e.target.value) }} />
            <button className="search" onClick={handleSearch}>search</button>
        </div>
    )
}
