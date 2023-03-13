import { Header } from "./components/Header"
import { Form } from "./components/Form";
import { Table } from "./components/Table";

import styles from "./app.module.css";

export function App() { 
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Form />
        <Table/>
      </div>
    </>
  );
}
