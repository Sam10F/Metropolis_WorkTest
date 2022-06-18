import { IAffiliation } from "./affiliation.interface";

export interface IAuthor {
    id: number;
    fullName: string;
    role: string;
    publications: number;
    views: number;
    followers: number;
    pictureUrl: string;
    profileUrl: string;
    affiliations?: IAffiliation[];
}
