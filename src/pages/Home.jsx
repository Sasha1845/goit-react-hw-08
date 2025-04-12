import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook App</h1>
      <p className={styles.description}>
        Welcome to your personal phonebook application. Here you can store and
        manage your contacts securely.
      </p>
    </div>
  );
};

export default Home;
