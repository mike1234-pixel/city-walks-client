import React from "react";
import BoardBox from "./Components/BoardBox/BoardBox";
import UserPortalNav from "../UserPortalNav";
import LoadingBar from "../../../LoadingBar/LoadingBar";
import { MDBContainer } from "mdbreact";
import { connect } from "react-redux";
import Board from "../../../../types/Boards/Board";
import RootState from "../../../../types/State/Root/State";
import "./Boards.scss";

interface Props {
  boards: Array<Board>;
  userFirstName: string;
}

const Boards: React.FC<Props> = (props: Props) => {
  const { boards, userFirstName } = props;

  return (
    <div>
      <div className="page-heading-container">
        <UserPortalNav loggedIn={false} />
        <MDBContainer>
          <h1 className="page-heading">Forum</h1>
          <h2 className="login-heading">Welcome back {userFirstName}</h2>
          <p>
            Here you can join in the discussion and put forward your own
            recomendations. Discussions are subdivided by category:
          </p>
        </MDBContainer>
      </div>
      <MDBContainer>
        {boards.length ? (
          <div className="boards-container">
            {boards.map((board) => {
              return (
                <BoardBox
                  boardId={board._id}
                  name={board.name}
                  description={board.description}
                />
              );
            })}
          </div>
        ) : (
          <LoadingBar />
        )}
      </MDBContainer>
    </div>
  );
};

const mapStateToProps: (state: RootState) => void = (state) => ({
  boards: state.boardsState.boards,
  userFirstName: state.loginState.userFirstName,
});

export default connect(mapStateToProps, null)(Boards);
