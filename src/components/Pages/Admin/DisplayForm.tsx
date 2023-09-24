import AddBlogPostForm from "./AddBlogPostForm/AddBlogPostForm";
import AddCityForm from "./AddCityForm/AddCityForm";
import AddWalkForm from "./AddWalkForm/AddWalkForm";
import DeleteBlogPostForm from "./DeleteBlogPostForm/DeleteBlogPostForm";
import DeleteBoardForm from "./DeleteBoardForm/DeleteBoardForm";
import DeleteCityForm from "./DeleteCityForm/DeleteCityForm";
import DeleteWalkForm from "./DeleteWalkForm/DeleteWalkForm";
import SetFeaturedWalkForm from "./SetFeaturedWalkForm/SetFeaturedWalkForm";

interface DisplayFormProps {
  form: string;
}

const DisplayForm = (props: DisplayFormProps) => {
  const { form } = props;

  switch (form) {
    case "addWalk":
      return <AddWalkForm />;
    case "addCity":
      return <AddCityForm />;
    case "setFeaturedWalk":
      return <SetFeaturedWalkForm />;
    case "deleteWalk":
      return <DeleteWalkForm />;
    case "deleteCity":
      return <DeleteCityForm />;
    case "addBoard":
      return <DeleteBoardForm />;
    case "deleteBoard":
      return <DeleteBoardForm />;
    case "addBlogPost":
      return <AddBlogPostForm />;
    case "deleteBlogPost":
      return <DeleteBlogPostForm />;
    default:
      return <p>error: could not find form</p>;
  }
};

export default DisplayForm;
