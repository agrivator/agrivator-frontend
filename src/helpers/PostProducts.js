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

    const handleChange = (e) => {
        if(e.target.name == 'name'){
            setName(e.target.value);
        }else if(e.target.name == 'description'){
            setDescription(e.target.value);
        }else if(e.target.name == 'category'){
            setCategory(e.target.value);
        }else if(e.target.name == 'subcategory'){
            setSubcategory(e.target.value);
        }else if(e.target.name == 'price'){
            setPrice(e.target.value);
        }else if(e.target.name == 'type'){
            setType(e.target.value);
        }else if(e.target.name == 'unit'){
            setUnit(e.target.value);
        }else{
            //pass
        }
    }

    // TODO : add @post logic

    return (
       <>
            <InputForm/>
       </> 
    )
}

export default PostProducts
