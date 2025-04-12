import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default Layout;
