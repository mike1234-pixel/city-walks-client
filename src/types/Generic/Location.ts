export default interface Location {
    hash: string;
    key?: string;
    pathname: string;
    search: string;
    state: string | undefined | null;
}