import { Box } from "@chakra-ui/react";

const Comment = ({episodeId ,commentId, comment, commentDate}) => {

    return (
        <>
            <Box backgroundColor={"#ffffff"} margin={"10px"} padding={"10px"} borderRadius={"5px"}>
                {episodeId}
                {comment}
                {commentDate}

            </Box>
        </>
    )

}

export default Comment;