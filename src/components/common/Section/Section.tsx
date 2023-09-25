import { ReactNode } from "react";
import { MDBView } from "mdbreact";
import marked from "marked";
import "./Section.css";

const createMarkup = (markup: string) => {
    return { __html: marked(markup) };
};

interface SectionProps {
    content: string;
    zoom: boolean;
    waves: boolean;
    imageLeft?: boolean;
    children?: ReactNode | ReactNode[];
}

const Section = (props: SectionProps) => {
    const { content, zoom, waves, imageLeft, children } = props;

    return (
        <div className='section grid-container'>
            <div className={`grid-item grid-item-text-box ${imageLeft && 'grid-item2'}`}>
                <div dangerouslySetInnerHTML={createMarkup(content)}></div>
            </div>
            <div className={`grid-item grid-item-image-box ${imageLeft && 'grid-item1'}`}>
                <MDBView hover zoom={zoom} waves={waves} id='grid-item-overlay'>
                    {children}
                </MDBView>
            </div>
        </div>
    );
};

export default Section;