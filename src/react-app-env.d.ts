/// <reference types="react-scripts" />
declare module 'react-router-dom';
declare module 'marked';
declare module 'react-paginate';
declare module 'qs';
interface Window {
    grecaptcha: {
        ready: Function;
        execute: Function;
    }
}
