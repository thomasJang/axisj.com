export interface SampleDto {
  id: number;
  name: string;
}

export interface GetSampleRequest {}

export interface GetSampleResponse {
  ds: SampleDto[];
}

export abstract class SampleRepositoryInterface {
  abstract get(params: GetSampleRequest): Promise<GetSampleResponse>;
}
