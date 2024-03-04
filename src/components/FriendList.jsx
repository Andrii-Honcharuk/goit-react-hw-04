import { FriendListItem } from "./FriendListItem";

import styles from "./FriendList.module.css";

export function FriendList({ friends }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Завдання 2 - Список друзів</h2>
      <ul className={styles.list}>
        {friends.map((friend) => {
          return (
            <li className={styles.listItem} key={friend.id}>
              <FriendListItem {...friend} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
