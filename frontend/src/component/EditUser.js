import React, {useState, useEffect} from 'react';
import axios from 'axios';
import{useNavigate, useParams} from "react-router-dom";

const EditUser = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [gender, setGender] = useState("Male");
const navigate =useNavigate();
const {id} = useParams();

useEffect(() => {
    getUserById();
},);

const saveUser =async (e) =>{
    e.preventDefault();
    try {
        await axios.post("http://localhost:5000/users",{
            name,
            email,
            gender
    });
        navigate("/");
    } catch (error) {
        console.log(error);
    }
}
const getUserById = async ()=> {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName((response).data.name);
    setEmail((response).data.email);
    setGender((response).data.gender);
}
return (
    <div className="column mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveUser}>
                <div className="field">
                    <label  className="name">Name</label>
                    <div className="control">
                        <input 
                        type="text" 
                        className="input" 
                        value={name} 
                        onChange ={(e) => setName(e.target.value)}
                        placeholder="name" />
                        
                    </div>
                </div>
                <div className="field">
                    <label  className="email">Email</label>
                    <div className="control">
                        <input 
                        type="text" className="input" 
                        value={email} 
                        onChange ={(e) => setEmail(e.target.value)}
                        placeholder="email" />
                    </div>
                </div>
                
                <div className="field">
                    <label  className="gender">Gender</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select 
                            value={gender} 
                            onChange ={(e) => setGender(e.target.value)}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className='button is-success'>Update</button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default EditUser;