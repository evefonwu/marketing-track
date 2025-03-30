import React, { ReactNode } from "react";
import styles from "./CtaLink.module.css";

// using Next.js Link for client-side nav (no full page refresh)
import Link from "next/link";

interface CtaLinkProps {
  href?: string;
  children: ReactNode;
}

const CtaLink = ({ href = "", children }: CtaLinkProps) => {
  return (
    <Link href={href} className={styles.ctaLink}>
      <div className={styles.ctaText}>{children}</div>
    </Link>
  );
};

export default CtaLink;
