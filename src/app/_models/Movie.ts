import { Contributor } from './Contributor';

export interface Movie {
    title: string;
    name: string;
    description: string;
    // For having problems with the EF i will keep it as a string for now
    //contributors?: Contributor[];
    contributorName?: string;

}
