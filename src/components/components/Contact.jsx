import React from "react";
import { styles } from "../../style";
import { SectionWrapper } from "../../hoc";

const Contact = () => {
  return (
    <>
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>
      <p
        style={{
          fontSize: "20px",
          textAlign: "center",
          lineHeight: "3",
          marginTop: "100px",
        }}
      >
        If you appreciate my work or would like to discuss potential
        opportunities, please feel free to reach out via email at{" "}
        <a
          href="mailto:shumancheng@gmail.com"
          style={{ color: "inherit", textDecoration: "underline" }}
        >
          shumancheng0119@gmail.com
        </a>{" "}
        or connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/shu-man-cheng-045741177/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "underline" }}
        >
          LinkedIn
        </a>
        .
      </p>
      <div style={{ marginBottom: "300px" }}></div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
