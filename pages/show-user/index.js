import { UserContext } from '@/context/Context';
import Link from 'next/link'
import React, { useContext } from 'react'

const index = () => {

  const [users,setUsers] = useContext(UserContext);


  const DeleteHandler = (id) => {
      let fu = users.filter((u) => u.id !== id);
      setUsers(fu);
  };

  let renderUsers = "No users found";


  if (users.length > 0) {
      renderUsers = users.map((u) => (
          <li
              key={u.id}
              className=" d-flex justify-content-between  align-items-center list-group-item">
              <p className="m-0">{u.name}</p>
              <p className="m-0">
                  <Link href={`/show-users/edit/${u.id}`}>✏️</Link>{" "}
                  &nbsp;&nbsp;
                  <span onClick={() => DeleteHandler(u.id)}>❌</span>
              </p>
          </li>
      ));
  }

  return (
    <div className='container mt-5 p-5 bg-light text-center'>
          <Link className="fs-5 fw-light text-dark" href="/">Home</Link> 
            &nbsp; &nbsp;
            <Link className="fs-5 fw-light text-dark" href="/create-user">Create User</Link>
            <hr className='mt-4' />
        <h2 className=' fw-light my-3'>Users</h2>
        <ul className="w-50 m-auto list-group">{renderUsers}</ul>
    </div>
  )
}

export default index