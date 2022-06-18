import { IAffiliation } from "../interfaces/affiliation.interface";
import { IAuthor } from "../interfaces/author.interface";

export const deleteDuplicatesFromArray = (arr: IAffiliation[]): IAffiliation[] => {
    return arr.reduce((unique: IAffiliation[], o) => {
        if (!unique.some((obj: IAffiliation) => obj.id === o.id)) {
            unique.push(o);
        }
        return unique;
    }, []);
};
