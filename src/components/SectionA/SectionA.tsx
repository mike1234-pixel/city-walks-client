import React from 'react'
import { MDBView } from "mdbreact"
import marked from "marked"
import "./SectionA.scss"

interface Props {
  content: string;
  img: string;
  alt: string;
  zoom: boolean;
  waves: boolean;
}

const SectionA: React.FC<Props> = (props: Props) => {

  const { content, img, alt, zoom, waves } = props

  const createMarkup = (markup: string) => {
    return { __html: marked(markup) }
  }

  return (
    <div className='section-a grid-container-a'>
      <div className='grid-item-a grid-item-a-text-box'>
        <div dangerouslySetInnerHTML={createMarkup(content)}></div>
      </div>
      <div className='grid-item-a grid-item-a-image-box'>
        <MDBView hover zoom={zoom} waves={waves} id="grid-item-overlay">
          <img className="grid-item-a-img" src={img} alt={alt} />
        </MDBView>
      </div>
    </div>
  );
};

export default SectionA

// content: no more than 570 characters