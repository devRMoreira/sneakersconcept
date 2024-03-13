import { ObjectId } from "mongodb";

export function setFilterId(id) {

    return { _id: new ObjectId(id) }
}