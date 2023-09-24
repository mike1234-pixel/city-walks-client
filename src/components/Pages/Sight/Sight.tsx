import React, { ReactNode, useEffect, useState } from "react";
import toTitleCase from "../../../functions/toTitleCase";
import {
  MDBContainer,
} from "mdbreact";
import marked from "marked";
import LoadingBar from "../../LoadingBar/LoadingBar";
import RootState from "../../../types/State/Root/State";
import SightI from "../../../types/Sights/Sight";
import { History } from "history";
import { connect } from "react-redux";
import "./Sight.css";

interface SightProps {
  history: History;
  sights: Array<SightI>;
}

const Sight = (props: SightProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { sights } = props;

  const blogTitle: string = toTitleCase(
    props.history.location.pathname.replace("/sights/", "").replace(/-/g, " ")
  );

  let post: string | ReactNode = <LoadingBar />;

  if (sights.length) {
    let selectedBlogPost: SightI | undefined = sights.find(
      (post: SightI) => post.title === blogTitle
    );

    if (selectedBlogPost) {
      const createMarkup: (markup: string) => { __html: string; } = (markup) => {
        return { __html: marked(markup, { breaks: true }) };
      };

      return (
        <MDBContainer>
          <div>
            <div className='blog-post-container'>
              <div>
                <h1 className='page-heading'>{selectedBlogPost.title}</h1>
                <h2 className='blog-subtitle page-subheading'>
                  {selectedBlogPost.subtitle}
                </h2>
              </div>
              <img className='blog-post-img' src={selectedBlogPost.img} alt={selectedBlogPost.title} />
              <div
                className='blog-post-content'
                dangerouslySetInnerHTML={createMarkup(selectedBlogPost.content)}
              />
            </div>
          </div>
        </MDBContainer>
      );
    } else {
      return <MDBContainer><p>Sight not found</p></MDBContainer>;
    }
  }

  return <LoadingBar />;
};


const mapStateToProps: (state: RootState) => void = (state) => ({
  sights: state.sightsState.sights,
});

export default connect(mapStateToProps, null)(Sight);
