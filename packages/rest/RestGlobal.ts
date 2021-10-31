import { BodyRest } from './Rest';

export interface RestInterfaceGlobal {

};


export interface RequestInterface {
  endpoint: string;
  request: BodyRest[]
};

export interface BucketInterface {
  bucket_id: string;
  bucket_limit: number;
  reset: number;

};

export const requests_global: BucketInterface[] = [];