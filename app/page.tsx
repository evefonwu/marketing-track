import styles from "./page.module.css";
import Link from "next/link";

const links = [
  {
    id: 1,
    name: "Testimonial Card",
    href: "./testimonial",
  },
  {
    id: 2,
    name: "Blog Card",
    href: "./blog",
  },
];
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul>
          {links.map((item) => (
            <Link key={item.id} href={item.href}>
              {item.name}
            </Link>
          ))}
        </ul>
      </main>
    </div>
  );
}
