import React, { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { serviceItem } from "../../utils/itemData";
import Image from "next/image";
import ScrollForMore from "../../components/scroolForMore";
import Head from "next/head";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
const name = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};
const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

function ServiceDetail({ service }) {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);
  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);
  return (
    <div className={"App container page"}>
      <Head>
        <title>Ashley salon: {service.subtitle}</title>
      </Head>
      <motion.main
        onAnimationComplete={() => setCanScroll(true)}
        className={"single"}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="container-show-case fluid">
          <div className="row-show-case top-row">
            <div className="top">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1.2, ...transition },
                }}
                className={"details-show-case"}
              >
                <div className="location">
                  <span>{service.price}</span>
                </div>
                <div className="mua">Facebook: @ashley-salon</div>
              </motion.div>
              <motion.div className="model">
                <motion.span className="first" variants={name}>
                  {[...service.subtitle].map((el, key) => (
                    <motion.span key={key}>{el}</motion.span>
                  ))}
                </motion.span>
              </motion.div>
            </div>
          </div>
          <div className="row-show-case  bottom-row">
            <div className="bottom-show-case">
              <motion.div className="image-container-single">
                <motion.div
                  initial={{
                    y: "50%",
                    width: 524,
                    height: 650,
                  }}
                  animate={{
                    y: 0,
                    width: "100%",
                    height: 400,
                    transition: { delay: 0.2, ...transition },
                  }}
                  className="thumbnail-single"
                >
                  <motion.div
                    className="frame-single"
                    whileHover="hover"
                    transition={transition}
                  >
                    <motion.div
                      style={{ scale: scale }}
                      initial={{ scale: 1.0 }}
                      animate={{
                        transition: { delay: 0.2, ...transition },
                        y: -200,
                      }}
                    >
                      <Image
                        src={require(`../../public/assets/ullistration/${service.image}.jpg`)}
                        alt="an image"
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            <ScrollForMore />
          </div>
        </div>
        <div className="detailed-information">
          <div className="container">
            <div className="row">
              <h2 className="title">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const service = serviceItem.find((service) => service.slug === slug);
  return {
    props: { service },
  };
}
export async function getStaticPaths(context) {
  const slugs = serviceItem.map((service) => service.slug);
  const params = slugs.map((slug) => ({
    params: { slug },
  }));
  return {
    paths: params,
    fallback: false,
  };
}

export default ServiceDetail;
