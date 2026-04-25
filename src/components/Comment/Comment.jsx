import { Box } from "@chakra-ui/react";
import { MdDeleteForever } from "react-icons/md";
import classes from "./comment.module.css";
import { useComment } from "../../context/CommentProvider";

const Comment = ({ episodeId, commentId, comment, commentDate }) => {
    const {deleteComment} = useComment();

    return (
        <>
            <Box className={classes.comment} >
            {/* <Box className={classes.comment} display={"flex"} flexDirection={"row"} backgroundColor={"#ffffff"} margin={"10px"} padding={"10px"} borderRadius={"5px"}> */}
                <div className={classes.commentSection}>
                    <p className={classes.username}>username: </p>
                    <p className={classes.text}>{comment}</p>
                    <p className={classes.postDate}>{commentDate}</p>
                </div>

                <button onClick={()=> deleteComment(episodeId, commentId)} className={classes.btn}><MdDeleteForever className={classes.deleteBtn} /></button>
            </Box>
        </>
    )

}

export default Comment;