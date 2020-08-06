import React, {useState} from 'react'
import InputForm from '../components/InputForm'


const PostProducts = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [subcategory, setSubcategory] = useState("")
    const [price, setPrice] = useState("")
    const [type, setType] = useState("")
    const [unit, setUnit] = useState("")


    return (
       <>
            <InputForm/>
       </> 
    )
}

export default PostProducts
