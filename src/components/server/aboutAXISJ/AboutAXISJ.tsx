import { useLocale } from "next-intl";
import * as React from "react";
import styles from "./AboutAXISJ.module.scss";

interface Props {}

export function AboutAXISJ({}: Props) {
  const cl = useLocale();
  return (
    <div className={styles.section}>
      {cl === "ko" ? (
        <div className={"container"}>
          <blockquote>
            AXISJ는 열정적이고 창의적인 프로그래머들이 모여 만든 혁신적인 기술 회사입니다.
            <br />
            최신 기술 트렌드를 선도하며, 다양한 분야에서 독창적이고 효과적인 솔루션을 개발하는 데 자부심이 있습니다.
            현재는 AXBoot 프레임워크를 연구 개발하여 다양하고 혁신적인 솔루션을 기획하고 있습니다.
          </blockquote>
          <h5>AXBoot</h5>
          <p>
            AXISJ는 AXBoot 프레임워크를 통해 고객들에게 뛰어난 솔루션을 제공합니다. 우리의 개발팀은 최신 기술 동향을
            반영하며 소프트웨어 개발의 모든 측면에서 높은 전문성을 유지합니다. 고객의 요구사항에 부합하는 맞춤형
            솔루션을 개발하고 제공함으로써, AXISJ는 기술 혁신의 선두 주자로 자리매김하고 있습니다.
          </p>
          <h5>하나의 사람, 하나의 일</h5>
          <p>
            위대한 일은 {'"사람에서 시작된다"'} 라는 생각을 가지고 있습니다. 우리는 팀원, 고객, 협력사 등 모든
            인간관계를 중시하며, 함께 일함으로써 현실적이고 지속적인 가치 창출을 목표로 하고 있습니다.
          </p>
          <h5>시작한 일은 마무리 짓는다.</h5>

          <p>
            우리는 시작한 일에 대한 책임을 중요하게 생각합니다. 프로젝트가 어떤 규모이든, 작은 업무라도 우리는 그것을
            완수하기 위해 최선을 다합니다. 우리의 엔지니어들은 각각의 코드가 완벽한 이야기를 품기 위해 세심한 주의를
            기울이며, 그 결과물이 고객과 사용자에게 가치를 전달하도록 노력합니다. AXISJ와 함께라면, 혁신적인 기술과
            탁월한 팀워크가 어우러져 새로운 성공을 창출할 것입니다. 우리는 끊임없는 도전과 성장을 통해 고객과 함께
            미래를 준비하고 있습니다.
          </p>
        </div>
      ) : (
        <div className={"container"}>
          <blockquote>
            AXISJ is an innovative technology company created by passionate and creative programmers.
            <br />
            We take pride in leading the way in the latest technology trends and developing inventive and effective
            solutions across various domains. Currently, we are actively researching and developing the AXBoot framework
            for diverse solution development. Building upon AXBoot, we are creating a range of innovative solutions to
            address various challenges.
          </blockquote>
          <h5>AXBoot</h5>
          <p>
            AXISJ provides outstanding solutions to customers through the AXBoot framework. Our development team
            maintains a high level of expertise in all aspects of software development, reflecting the latest
            technological trends. By developing and delivering customized solutions that meet the requirements of our
            customers, AXISJ solidifies its position as a leading innovator in technology.
          </p>
          <h5>Each person, every task</h5>
          <p>
            Great things start with people. We prioritize all human relationships – team members, customers, partners –
            and strive to create practical and sustainable value by working together.
          </p>
          <h5>We must finish what we have started.</h5>

          <p>
            We consider responsibility for the tasks we undertake to be paramount. Regardless of the scale of the
            project or the size of the task, we strive to give our best to complete it. Our engineers pay meticulous
            attention to detail, ensuring that each line of code tells a perfect story, and they work hard to deliver
            value to our customers and users. With AXISJ, the fusion of innovative technology and excellent teamwork
            will create new successes. We are preparing for the future with our customers through constant challenges
            and growth.
          </p>
        </div>
      )}
    </div>
  );
}
