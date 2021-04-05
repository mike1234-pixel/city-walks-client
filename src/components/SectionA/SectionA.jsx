import { MDBView, MDBContainer } from "mdbreact"
import marked from "marked"
import "./SectionA.css"

const SectionA = (props) => {

    const {content, img, alt} = props

    const createMarkup = (markup) => {
      return {__html: marked(markup)}
    }

  return (
    <MDBContainer>
      <div className='section-a grid-container-a'>
          <div className='grid-item-a grid-item-a-text-box'>
              <div dangerouslySetInnerHTML={createMarkup(content)}></div> 
          </div>
          <div className='grid-item-a grid-item-a-image-box'>
            <MDBView hover zoom id="grid-item-overlay">
              <img className="grid-item-a-img" src={img} alt={alt}></img>
            </MDBView>
          </div>
      </div>
    </MDBContainer>
  );
};

export default SectionA

// content: no more than 570 characters