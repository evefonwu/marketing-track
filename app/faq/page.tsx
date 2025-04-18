"use client";
import { useId, useState } from "react";
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
    hasVis: true,
    header: `What types of images are available on your platform?`,
    content: `Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.`,
  },
  {
    id: 2,
    hasVis: true,
    header: `How can I access and download images from your platform?`,
    content: `Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks.`,
  },
  {
    id: 3,
    hasVis: true,
    header: `Do you offer free images, or is there a subscription required?`,
    content: `We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs.`,
  },
  {
    id: 4,
    hasVis: true,
    header: `What payment methods do you accept for subscriptions?`,
    content: `We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our
users.`,
  },
  {
    id: 5,
    hasVis: true,
    header: `Can I cancel or modify my subscription at any time?`,
    content: `Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences.`,
  },
  {
    id: 6,
    hasVis: true,
    header: `How frequently do you update your image collection?`,
    content: `We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform`,
  },
];

export default function Page() {
  const [data, setData] = useState<TFaqItem[]>(faqData);
  const faqAccordionId = useId(); // useId can generate unique Id for the accordion

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
                  data.map((item, index) => {
                    // ids to link header to its content, content to its header for assistive technologies
                    const headerId = `${faqAccordionId}-header-${item.id}`;
                    const panelId = `${faqAccordionId}-panel-${item.id}`;

                    return (
                      <li key={item.id}>
                        <div className={styles.contentRow}>
                          <div className={styles.rowWords}>
                            {/* clickable item header is contained in a <button> element with aria state and properties */}
                            <button
                              type="button"
                              onClick={() => handleClick(item.id)}
                              id={headerId}
                              aria-controls={panelId}
                              aria-expanded={item.hasVis}
                            >
                              {item.header}
                            </button>
                            <p
                              id={panelId}
                              aria-labelledby={headerId}
                              role="region"
                              hidden={!item.hasVis}
                            >
                              {item.content}
                            </p>
                          </div>
                          <Image
                            aria-hidden={true}
                            className={styles.expandIcon}
                            src={item.hasVis ? collapseIcon : expandIcon}
                            alt="icon for accordion state"
                            width={24}
                            height={24}
                          />
                        </div>
                        {index < data.length - 1 ? (
                          <div className={styles.divider}>
                            <div className={styles.dividerLine}></div>
                          </div>
                        ) : (
                          <div className={styles.halfDivider}></div>
                        )}
                      </li>
                    );
                  })}
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
