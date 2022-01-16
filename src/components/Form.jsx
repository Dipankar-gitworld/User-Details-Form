import { useState } from "react";
import "./Form.css";

function Form({getData}){
    const [formData, setFormData] = useState({
        name:"",
        age:0,
        address:"",
        department:"",
        salary:0,
        maraitalStartus:""
    })
    const handleChange = (e)=>{
        const {name, value} = e.target;
        
        formData[name] =value;
        setFormData(formData);

        

    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch("http://localhost:3004/employee-details",{
            method: "POST",
            body: JSON.stringify(formData),
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(res=> res.json())
        .then(data=>{
            getData(data);
            e.target.reset();
        })
        .catch(err=>{
            console.log("error", err);
        });

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" name="name" placeholder="name" onChange={handleChange}/>
                <input type="number" name="age" placeholder="age"  onChange={handleChange}/>
                <input type="text" name="address" placeholder="address"  onChange={handleChange}/>
                <select name="department" id=""  onChange={handleChange} >
                    <option value="">select department</option>
                    <option value="Finance">Finance</option>
                    <option value="IT">IT</option>
                </select>
                <input type="number" name="salary" placeholder="salary"  onChange={handleChange}/>
                <label htmlFor="">married</label>
                <input type="checkbox" name="maraitalStartus" value="married" id="" onChange={handleChange}/>
                <label htmlFor="">unmarried</label>
                <input type="checkbox" name="maraitalStartus" value="unmarried" id="" onChange={handleChange}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;