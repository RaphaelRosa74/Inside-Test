// src/components/UserDetailsModal/UserDetailsModal.jsx
import styles from './UserDetailsModal.module.css';

export function UserDetailsModal({ user, onClose }) {
  if (!user) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.modalTitle}>Detalhes do Usuário</h2>
        
        <div className={styles.detailsSection}>
          <h3>Informações Pessoais</h3>
          <p><strong>Nome:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Telefone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>
        
        <div className={styles.detailsSection}>
          <h3>Endereço</h3>
          <p><strong>Rua:</strong> {user.address.street}</p>
          <p><strong>Complemento:</strong> {user.address.suite}</p>
          <p><strong>Cidade:</strong> {user.address.city}</p>
          <p><strong>CEP:</strong> {user.address.zipcode}</p>
          <p><strong>Localização:</strong> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>
        </div>
        
        <div className={styles.detailsSection}>
          <h3>Empresa</h3>
          <p><strong>Nome:</strong> {user.company.name}</p>
          <p><strong>Slogan:</strong> {user.company.catchPhrase}</p>
          <p><strong>Negócio:</strong> {user.company.bs}</p>
        </div>
      </div>
    </div>
  );
}