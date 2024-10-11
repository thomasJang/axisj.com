import { apiWrapper } from "@/services/apiWrapper";
import {
  GetSampleRequest,
  GetSampleResponse,
  SampleRepositoryInterface,
} from "@/services/sample/SampleRepositoryInterface";
import { delay } from "@/utils/thread";

export class SampleRepository implements SampleRepositoryInterface {
  async get(params: GetSampleRequest): Promise<GetSampleResponse> {
    await delay(1000);

    return {
      ds: [
        {
          id: 1,
          name: "sample2",
        },
        {
          id: 2,
          name: "sample3",
        },
      ],
    };

    //
    // const { data } = await apiWrapper<GetSampleResponse>("get", "/api/sample", params);
    // return data;
  }
}
