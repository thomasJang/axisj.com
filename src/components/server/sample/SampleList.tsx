// import styled from "@emotion/styled";

import { SampleService } from "@/services";

interface Props {}

export async function SampleList({}: Props) {
  const { ds } = await SampleService.get({});

  return (
    <div>
      <h2>SampleList</h2>

      <ul>
        {ds.map((d) => (
          <li key={d.id}>{d.name}</li>
        ))}
      </ul>
    </div>
  );
}

// const Div = styled.div``;
