import * as React from "react";
import styled from "@emotion/styled";
import { PageContainer } from "@/styles/Layouts";
import { mediaMax } from "@/styles/media";

interface Props {}

export function AboutAXISJ({}: Props) {
  return (
    <Div>
      <Container>
        <p>
          AXISJ는 열정적이고 창의적인 프로그래머들이 모여 만든 혁신적인 기술
          회사입니다. 우리는 최신 기술 트렌드를 선도하며, 다양한 분야에서
          독창적이고 효과적인 솔루션을 개발하는 데 자부심을 가지고 있습니다.
          현재는 다양한 솔루션 개발을 위해 AXFrame 프레임워크를 연구 개발하고
          그를 기반으로 다양하고 혁신적인 솔루션들을 개발하고 있습니다.
        </p>
        <h5>AXFrame</h5>
        <p>
          AXISJ는 AXFrame 프레임워크를 통해 고객들에게 뛰어난 솔루션을
          제공합니다. 우리의 개발팀은 최신 기술 동향을 반영하며 소프트웨어
          개발의 모든 측면에서 높은 전문성을 유지합니다. 고객의 요구사항에
          부합하는 맞춤형 솔루션을 개발하고 제공함으로써, AXISJ는 기술 혁신의
          선두주자로 자리매김하고 있습니다.
        </p>
        <h5>하나의 사람, 하나의 일</h5>
        <p>
          위대한일은 "사람에서 시작된다" 라는 생각을 가지고 있습니다. 우리는
          팀원, 고객, 협력사 등 모든 인간관계를 중시하며, 함께 일함으로써
          현실적이고 지속적인 가치 창출을 목표로 하고 있습니다.
        </p>
        <h5>시작한 일은 마무리 짓는다.</h5>

        <p>
          우리는 시작한 일에 대한 책임을 중요하게 생각합니다. 프로젝트가 어떤
          규모이든, 작은 업무라도 우리는 그것을 완수하기 위해 최선을 다합니다.
          우리의 엔지니어들은 각각의 코드가 완벽한 이야기를 품기 위해 세심한
          주의를 기울이며, 그 결과물이 고객과 사용자에게 가치를 전달하도록
          노력합니다. AXISJ와 함께라면, 혁신적인 기술과 탁월한 팀워크가 어우러져
          새로운 성공을 창출할 것입니다. 우리는 끊임없는 도전과 성장을 통해
          고객과 함께 미래를 준비하고 있습니다.
        </p>
      </Container>
    </Div>
  );
}

const Container = styled(PageContainer)``;
const Div = styled.div`
  padding: 60px 0;
  color: var(--txt-body);

  line-height: 1.8;
  p {
    margin: 1em 0;
  }
  h5 {
    color: var(--txt-display);
  }

  ${mediaMax.md} {
    padding: 3rem 2rem;
  }
`;