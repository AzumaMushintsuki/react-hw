import {useEffect, useState} from "react";
import {postService} from "../../servises/api.services.ts";
import {IPost} from "../../models/IPost.ts";
import PostCard from "./PostCard.tsx";

const PostCardList = () => {
    const [posts, setPosts]=useState<IPost[]>([])
    useEffect(()=>{
        postService.getPosts().then(apiPosts=>setPosts(apiPosts))
    },[])
    return (
        <div>
            {posts.map(post=><PostCard key = {post.id} post={post}/>)}
        </div>
    );
};

export default PostCardList;