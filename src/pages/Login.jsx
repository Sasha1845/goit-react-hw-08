import LoginForm from "../components/LoginForm/LoginForm";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
