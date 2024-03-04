import styles from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div>
      <h2 className={styles.title}>Завдання 1 - Профіль соціальної мережі</h2>
      <div className={styles.card}>
        <div>
          <img className={styles.cardAvatar} src={image} alt={name} />
          <p className={styles.cardName}>{name}</p>
          <p className={styles.cardTag}>@{tag}</p>
          <p className={styles.cardLocation}>{location}</p>
        </div>

        <ul className={styles.statsContainer}>
          <li className={styles.statsItem}>
            <span className={styles.statsItemName}>Followers </span>
            <span className={styles.statsValue}>{stats.followers}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.statsItemName}>Views </span>
            <span className={styles.statsValue}>{stats.views}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.statsItemName}>Likes </span>
            <span className={styles.statsValue}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
