import { useState, useEffect } from "react";
import axios from "axios";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(response.data);
      } catch (err) {
        setError(err.message || "Ocorreu um erro ao carregar os usuários");
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return { users, loading, error };
}
