import React from 'react'
import { MDBView } from "mdbreact"
import marked from "marked"
import "./SectionB.scss"

interface Props {
  content: string;
  img: string;
  alt: string;
  zoom: boolean;
  waves: boolean;
}

const SectionB: React.FC<Props> = (props: Props) => {

  const { content, img, alt, zoom, waves } = props

  const createMarkup = (markup: string) => {
    return { __html: marked(markup) }
  }

  return (
    <div className='section-b grid-container-b'>
      <div className='grid-item-b grid-item-b-image-box'>
        <MDBView hover zoom={zoom} waves={waves} id="grid-item-overlay">
          <img className="grid-item-b-img" src={img} alt={alt} />
        </MDBView>
      </div>
      <div className='grid-item-b grid-item-b-text-box'>
        <div dangerouslySetInnerHTML={createMarkup(content)}></div>
      </div>
    </div>
  );
};

export default SectionB