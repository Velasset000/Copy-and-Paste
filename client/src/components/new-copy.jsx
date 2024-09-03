import '../App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function NewCopy({templates, setTemplates}){

    const [title, setTitle] = useState(null);
    const [temp, setTemp] = useState(null);

    const titleHandler = (e)=> {
        setTitle(e.target.value)
    }    
    const tempHandler = (e)=> {
        setTemp(e.target.value)
    }    

    const  addNewTemp = () =>{
        console.log(title);
        console.log(temp);
        setTemplates([
            ...templates,
            {title: title, template: temp, key: templates.length + 1}
        ]);
        fetch("api/createTemplate", {
            body: JSON.stringify({title: title, template: temp, key: templates.length + 1}),
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
        })
          .then((response) => response.json())
          .then((data) => {
                console.log(data)
            })
          .catch((error) => console.error("Something went wrong"));
    }


    return(
        <div className='new-temp-container'>
            <TextField
                className='new-temp-input'
                id="outlined-required"
                label="Title"
                onChange={titleHandler}
            />
            <TextField
                className='new-temp-input'
                id="outlined-multiline-flexible"
                label="New Template"
                multiline
                onChange={tempHandler}
            />
             <Button 
                variant="outlined"
                onClick={addNewTemp}
             >Submit</Button>
        </div>
    )
}