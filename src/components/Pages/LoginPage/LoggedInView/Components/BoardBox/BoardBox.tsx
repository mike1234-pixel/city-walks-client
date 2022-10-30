import React from "react";
import { MDBCard, MDBCardTitle, MDBCardText } from "mdbreact";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import urlify from "../../../../../../functions/urlify";
import "./BoardBox.scss";

interface Props {
  boardId: string;
  name: string;
  description: string;
}

const BoardBox: React.FC<Props> = (props: Props) => {
  const { name, description } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <MDBCard className="card-body board-box">
      <MDBCardTitle className="board-box-title">{name}</MDBCardTitle>
      <MDBCardText className="board-box-desription">{description}</MDBCardText>
      <div className="flex-row">
        <Link to={"forum/" + urlify(name)} className="board-link">
          Read More...
        </Link>
      </div>
    </MDBCard>
  );
};

export default BoardBox;
