"use client";
import { useState } from "react";
import styles from "./faq.module.css";
import Image from "next/image";
import expandIcon from "./images/add-circle-line.png";
import collapseIcon from "./images/indeterminate-circle-line.png";
import Button from "@/ui/components/Button";
import CtaLink from "@/ui/components/CtaLink";

type TFaqItem = {
  id: number;
  hasVis: boolean;
  header: string;
  content: string;
};

const faqData = [
  {
    id: 1,
    hasVis: false,
    header: `What types of images are available on your platform?`,
    content: `Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.`,
  },
  {
    id: 2,
    hasVis: false,
    header: `How can I access and download images from your platform?`,
    content: `Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks.`,
  },
  {
    id: 3,
    hasVis: false,
    header: `Do you offer free images, or is there a subscription required?`,
    content: `We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs.`,
  },
  {
    id: 4,
    hasVis: false,
    header: `What payment methods do you accept for subscriptions?`,
    content: `We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our
users.`,
  },
  {
    id: 5,
    hasVis: false,
    header: `Can I cancel or modify my subscription at any time?`,
    content: `Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences.`,
  },
  {
    id: 6,
    hasVis: false,
    header: `How frequently do you update your image collection?`,
    content: `We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform`,
  },
];

export default function Page() {
  const [data, setData] = useState<TFaqItem[]>(faqData);

  const handleClick = (id: number) => {
    setData((prevData) => {
      return prevData.map((item) =>
        item.id === id ? { ...item, hasVis: !item.hasVis } : item
      );
    });
  };

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.faq}>
            <div className={styles.faqHeader}>
              <h1>Frequently asked questions</h1>
              <p>Choose any questions you need</p>
            </div>
            <div className={styles.faqContent}>
              <ul>
                {data.length > 0 &&
                  data.map((item, index) => (
                    <li key={item.id}>
                      <div className={styles.contentRow}>
                        {/* <h3>{item.header}</h3> */}
                        <div className={styles.rowWords}>
                          <h3 onClick={() => handleClick(item.id)}>
                            {item.header}
                          </h3>
                          {item.hasVis && <p>{item.content}</p>}
                        </div>
                        <div
                          className={styles.controls}
                          // onClick={() => handleClick(item.id)}
                        >
                          <Image
                            className={styles.expandIcon}
                            aria-label={`Click to ${
                              item.hasVis ? "collapse" : "expand"
                            } this FAQ item.`}
                            src={item.hasVis ? collapseIcon : expandIcon}
                            alt={`Accordion controls to ${
                              item.hasVis ? "collapse" : "expand"
                            } this FAQ item.`}
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                      {index < data.length - 1 ? (
                        <div className={styles.divider}>
                          <div className={styles.dividerLine}></div>
                        </div>
                      ) : (
                        <div className={styles.halfDivider}></div>
                      )}
                    </li>
                  ))}
              </ul>
              <div className={styles.contact}>
                <div className={styles.support}>
                  <h4>{`Can't find the answer you're looking for?`}</h4>
                  <CtaLink>{`Reach out to our customer support team.`}</CtaLink>
                </div>
                <div>
                  <Button fullWidth={true}>{"Get in touch"}</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
