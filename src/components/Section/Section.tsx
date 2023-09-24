import { MDBView } from "mdbreact";
import marked from "marked";
import "./Section.css";

interface SectionProps {
    content: string;
    img: string;
    alt: string;
    zoom: boolean;
    waves: boolean;
    imageLeft?: boolean;
}

const Section = (props: SectionProps) => {
    const { content, img, alt, zoom, waves, imageLeft } = props;

    const createMarkup = (markup: string) => {
        return { __html: marked(markup) };
    };

    return (
        <div className='section grid-container'>
            <div className={`grid-item grid-item-text-box ${imageLeft && 'grid-item2'}`}>
                <div dangerouslySetInnerHTML={createMarkup(content)}></div>
            </div>
            <div className={`grid-item grid-item-image-box ${imageLeft && 'grid-item1'}`}>
                <MDBView hover zoom={zoom} waves={waves} id='grid-item-overlay'>
                    <img className='grid-item-img' src={img} alt={alt} />
                </MDBView>
            </div>
        </div>
    );
};

export default Section;