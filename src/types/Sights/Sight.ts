import Comment from "./Comment";

export default interface Sight {
    author: string;
    comments?: Array<Comment>;
    content: string;
    img: string;
    submittedOn: string;
    subtitle: string;
    title: string;
    __v: number;
    _id: string;
}