import styles from './UserCard.module.css';

export function UserCard({ user, onViewDetails }) {
  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.name}>{user.name}</h3>
        <p className={styles.email}>📧 {user.email}</p>
        <p className={styles.address}>
        🏠 {user.address.street}, {user.address.suite}, {user.address.city}
      </p>
      </div>
      <button 
        className={styles.detailsButton} 
        onClick={() => onViewDetails(user)}
      >
        Ver detalhes
      </button>
    </div>
  );
}