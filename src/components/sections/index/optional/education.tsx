// Section structure
import Section from "../../../structure/section";
import Container from "../../../structure/container";

// Section general blocks
import SectionTitle from "../../../blocks/section.title";

// Career scss
import career from "../../../../styles/scss/sections/index/career.module.scss";

export default function Education() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Education"
          preTitle="Formal"
          subTitle="I studied computer science at the Chandigarh Group of Colleges, Jhanjeri, Mohali."
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Chandigarh Group of Colleges</h3>
                <h5>Jhanjeri, Mohali</h5>
              </span>
              <p>
                I pursued my Bachelor&apos;s degree in Computer Science and
                Engineering at Chandigarh Group of Colleges. This four-year
                program offered a comprehensive curriculum that covered various
                aspects of computer science and its applications.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
        </section>
      </Container>
    </Section>
  );
}
