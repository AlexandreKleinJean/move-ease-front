import { Url } from "url";

export interface Tvseries {
    id?: number;
    name: string;
    url: Url;
    language: string;
    summary: string;
    officialSite: Url;
  }