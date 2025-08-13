import styles from './ErrorFeedback.module.css';

export function Error({ message }) {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>⚠️ {message}</p>
    </div>
  );
}