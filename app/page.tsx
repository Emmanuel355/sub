import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "@/components/navbar";
import Table from "@/components/table";
import AddForm from "@/components/AddForm";

export default function Home() {
  return (
    <main className={styles.main}>

        <Table/>

    </main>
  )
}
