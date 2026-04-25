import { createContext, useContext, useState, useEffect } from "react";

const CommentContext = createContext();

const CommentProvider = ({ children }) => {
    const [comments, setComments] = useState(() => {
        if (localStorage.getItem("comments")){
            return JSON.parse(localStorage.getItem("comments"));
        } else {
            return {
                // episodeId: [{
                // commentID: crypto.genuuid,
                // comment: ......,
                // date: timeStamp or MM-dd-yyyy
                //}]
            }
        }
    });

    const addComment = (episodeId, newComment) => {
        const postDate = new Date();
        const created = `${postDate.getMonth() + 1}-${postDate.getDate()}-${postDate.getFullYear()}`


        const addedComment = comments[episodeId] ? [...comments[episodeId], {
            commentID: crypto.randomUUID(),
            comment: newComment,
            date: created
        }] : [{
            commentID: crypto.randomUUID(),
            comment: newComment,
            date: created
        }]

        setComments(prev => {
            return (
                { ...prev, [episodeId]: addedComment }
            )
        })

    }

    const deleteComment = (episodeId, commentId) => {
        const filteredComments = comments[episodeId].filter(comment => comment.commentID !== commentId);
        setComments(prev => {
            return ({
                ...prev, [episodeId]: filteredComments
            })
        }
        )
    }

    useEffect(() => {
        localStorage.setItem("comments", JSON.stringify(comments));
    }, [comments])

    return (
        <CommentContext value={{ comments, addComment, deleteComment }}>
            {children}
        </CommentContext>
    )
}

export default CommentProvider;

export const useComment = () => {
    return useContext(CommentContext);
}