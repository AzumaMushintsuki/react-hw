import {FC} from "react";
import {IPostCardProps} from "../../models/Props.ts";

const PostCard:FC<IPostCardProps> = ({post}) => {
    return (
        <div>
            <h4>{post.id}. {post.title}</h4>
            <p>{post.body}</p>
        </div>
    );
};

export default PostCard;