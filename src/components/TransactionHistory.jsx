import { TransactionHistoryItem } from "./TransactionHistoryItem";
import styles from "./TransactionHistory.module.css";

export function TransactionHistory({ items }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Завдання 3 - Історія транзакцій</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <TransactionHistoryItem {...item} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
