import styles from "./FriendListItem.module.css";

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.friendAvatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
