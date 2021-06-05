import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControls/FormControls";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Yuor post"
          name={"newPostText"}
          component={Textarea}
          validate={[requiredField, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)


const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostEl = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={c.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={c.posts}>{postsElement}</div>
    </div>
  );
};





export default MyPosts;
