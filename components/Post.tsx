import { Post } from "../data/Post";
import styles from "../styles/Static.module.css"

export type PostRowProps = {
    post : Post
}

export const PostRow = ({post} : PostRowProps ) => {
        return (
            <div className={styles.postRow}>
                <a>
                    <h3>{post.title}</h3>
                </a>
            </div>
        )
}

export default PostRow
