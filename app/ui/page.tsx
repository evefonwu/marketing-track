import Button from "@/ui/components/Button";
import styles from "./styles.module.css";
import CtaLink from "@/app/ui/components/CtaLink";

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        <h3>Call-to-action Link</h3>
        <CtaLink>Learn more</CtaLink>
        <hr />
        <h3>xlarge buttons</h3>
        <Button>Build Components</Button>
        <Button variant={"secondary"}>Build Components</Button>
        <Button disabled={true}>Build Components</Button>
        <hr />
        <h4>large buttons</h4>
        <Button size={"large"}>Build Components</Button>
        <Button size={"large"} variant={"secondary"}>
          Build Components
        </Button>
        <hr />
        <h4>medium buttons</h4>
        <Button size={"medium"}>Build Components</Button>
        <Button size={"medium"} variant={"secondary"}>
          Build Components
        </Button>
        <hr />
      </div>
    </div>
  );
}
