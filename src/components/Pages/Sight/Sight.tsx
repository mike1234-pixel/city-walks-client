import { useEffect } from "react";
import toTitleCase from "../../../utils/toTitleCase";
import {
  MDBContainer,
} from "mdbreact";
import marked from "marked";
import RootState from "../../../types/State/Root/State";
import SightI from "../../../types/Sights/Sight";
import { History } from "history";
import { connect } from "react-redux";
import "./Sight.css";
import LoadingBar from "../../common/LoadingBar/LoadingBar";

const createMarkup: (markup: string) => { __html: string; } = (markup) => {
  return { __html: marked(markup, { breaks: true }) };
};

interface SightProps {
  history: History;
  sights: Array<SightI>;
}

const Sight = (props: SightProps) => {

  const { sights } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title = toTitleCase(
    props.history.location.pathname.replace("/sights/", "").replace(/-/g, " ")
  );

  let selectedSight = sights.find(
    (post: SightI) => post.title === title
  );

  if (!sights.length) {
    return <MDBContainer><LoadingBar /></MDBContainer>;
  }

  if (selectedSight) {
    return (
      <MDBContainer>
        <div>
          <div className='blog-post-container'>
            <div>
              <h1 className='page-heading'>{selectedSight.title}</h1>
              <h2 className='blog-subtitle page-subheading'>
                {selectedSight.subtitle}
              </h2>
            </div>
            <img className='blog-post-img' src={selectedSight.img} alt={selectedSight.title} />
            <div
              className='blog-post-content'
              dangerouslySetInnerHTML={createMarkup(selectedSight.content)}
            />
          </div>
        </div>
      </MDBContainer>
    );
  } else {
    return <MDBContainer><p>Sight not found</p></MDBContainer>;
  }
};

const mapStateToProps: (state: RootState) => void = (state) => ({
  sights: state.sightsState.sights,
});

export default connect(mapStateToProps, null)(Sight);
