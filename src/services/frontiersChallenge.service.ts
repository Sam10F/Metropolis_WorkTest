import { IAffiliation } from "@/common/interfaces/affiliation.interface";
import { IAuthor } from "@/common/interfaces/author.interface";
import { deleteDuplicatesFromArray } from "@/common/utils/deleteDuplicatesFromArray";
import axios from "axios";

const FrontiersChallengeService = {
    getType(): Promise<string> {
        return axios
            .get("/data/frontiers-metropolis-challenge-L1.json")
            .then((data) => data.data.type)
            .catch((error) => {
                throw error.response.data;
            });
    },

    getTitle(): Promise<string> {
        return axios
            .get("/data/frontiers-metropolis-challenge-L1.json")
            .then((data) => data.data.title)
            .catch((error) => {
                throw error.response.data;
            });
    },

    getJournal(): Promise<string> {
        return axios
            .get("/data/frontiers-metropolis-challenge-L1.json")
            .then((data) => data.data.journal)
            .catch((error) => {
                throw error.response.data;
            });
    },

    getSection(): Promise<string> {
        return axios
            .get("/data/frontiers-metropolis-challenge-L1.json")
            .then((data) => data.data.section)
            .catch((error) => {
                throw error.response.data;
            });
    },

    getEditor(): Promise<IAuthor> {
        return axios
            .get("/data/frontiers-metropolis-challenge-L1.json")
            .then((data) => data.data.editor)
            .catch((error) => {
                throw error.response.data;
            });
    },

    getYourself(): Promise<IAuthor> {
        return axios
            .get("/data/frontiers-metropolis-challenge-L1.json")
            .then((data) => data.data.yourself)
            .catch((error) => {
                throw error.response.data;
            });
    },

    getAuthors(): Promise<IAuthor[]> {
        return axios
            .get("/data/frontiers-metropolis-challenge-L1.json")
            .then((data) => data.data.authors)
            .catch((error) => {
                throw error.response.data;
            });
    },

    getAffiliations(): Promise<IAffiliation[]> {
        return axios
            .get("/data/frontiers-metropolis-challenge-L1.json")
            .then((data) => {
                const affiliations: IAffiliation[] = [];

                affiliations.push(...data.data.editor.affiliations);
                affiliations.push(...data.data.yourself.affiliations);
                data.data.authors.map(
                    (author: IAuthor) => author.affiliations && affiliations.push(...author.affiliations),
                );

                return deleteDuplicatesFromArray(affiliations);
            })
            .catch((error) => {
                throw error.response.data;
            });
    },
};

export default FrontiersChallengeService;
