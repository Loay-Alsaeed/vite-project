import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
        const { data, error } = await supabase.from("users").select('*');

        console.log("Fetched data:", data); // تحقق مما إذا كانت البيانات تأتي أم لا
    
        if (error) {
          console.error("Error fetching users:", error);
        } else {
          setUsers(data);
          console.log(data);
        }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
            <div key={user.id}>
                <li >{user.email}</li>
                <li >{user.password}</li>
            </div>
        ))}
      </ul>
    </div>
  );
};

export default Users;
