import RegisterForm from "../components/RegisterForm/RegisterForm";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Registration</h2>
      <RegisterForm />
    </div>
  );
};

export default Register;
