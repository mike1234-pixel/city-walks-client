import Reply from './Reply'

export default interface Thread {
    content: string;
    replies: Array<Reply>;
    submittedOn: string;
    title: string;
    userFirstName: string;
    userId: string;
    _id: string;
}