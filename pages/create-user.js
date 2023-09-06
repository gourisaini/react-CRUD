import { UserContext } from "@/context/Context";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const CreateUser = () => {
    const [users, setUsers] = useContext(UserContext);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [contact,setContact] = useState('');

    const SubmitHandler = (e) =>{
        e.preventDefault();
        if(name.trim().length === 0 || email.trim().length === 0 || contact.trim().length === 0){
            toast.error("chutiya hai kya be khali mat rakh usko");
            return;
        }

        const user = {
            id: nanoid(),
            name,
            email,
            contact,
        }
        setUsers([...users, user]);
        toast("User registered successfully!");
        setName("");
        setEmail("");
        setContact("");
    }

  return (
    <div className='container mt-5 p-5 bg-light text-center'>
          <Link className="fs-5 fw-light text-dark" href="/">Home</Link> 
            &nbsp; &nbsp;
            <Link className="fs-5 fw-light text-dark" href="/show-user">Show User</Link>
            <hr className='mt-4' />
        <h2 className=' fw-light my-3'>Register User</h2>
        <form onSubmit={SubmitHandler}>
            <input className='form-control mb-3 w-50 m-auto' type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}/>
            <input className='form-control mb-3 w-50 m-auto' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
            <input className='form-control mb-3 w-50 m-auto' type="text" placeholder='Contact' onChange={(e) => setContact(e.target.value)} value={contact}/>
            <button className="btn btn-dark w-50 mb-5">Save</button>
        </form>
    </div>
  )
}

export default CreateUser