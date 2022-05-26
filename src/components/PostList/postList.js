import PostListItem from "../PostListItem";
import "./postList.css";

const PostList = ({ posts, onDelete, onImportant, onLiked }) => {
  const elements = posts.map((element) => {
    const { id, ...itemProps } = element;
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          {...itemProps}
          deletedPost={() => onDelete(id)}
          onImportant={() => onImportant(id)}
          onLiked={() => onLiked(id)}
        />
      </li>
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};
export default PostList;
