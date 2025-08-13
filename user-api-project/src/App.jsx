import { useState } from 'react';
import { useUsers } from './hooks/useUsers';
import { UserCard } from './components/UserCard/UserCard';
import { UserDetailsModal } from './components/UserDetailsModal/UserDetailsModal';
import { Loading } from './components/Loading/Loading';
import { Error } from './components/ErrorFeedback/ErrorFeedback';
import styles from './App.module.css';

function App() {
  const { users, loading, error } = useUsers();
  const [selectedUser, setSelectedUser] = useState(null);

  const handleViewDetails = (user) => setSelectedUser(user);
  const handleCloseModal = () => setSelectedUser(null);

  return (
    <div className={styles.app}>
      <header className={styles.title}>
        <h1>Lista de Usuários</h1>
      </header>

      {loading && <Loading />}

      {error && <Error message={error} />}

      {!loading && !error && (
        <main>
          <div className={styles.usersGrid}>
            {users.map((user) => (
              <UserCard key={user.id} user={user} onViewDetails={handleViewDetails} />
            ))}
          </div>
        </main>
      )}

      {selectedUser && (
        <UserDetailsModal user={selectedUser} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
