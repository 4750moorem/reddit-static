import {Post} from "../../data/Post";
import styles from "../../styles/Static.module.css"
import {GetStaticProps} from "next";
import {StaticSubredditsName, staticSubredditsName, subRedditRecords} from "../../data/subReddit";
import {getSubRedditPost} from "../../effect/reddit-api";


export type StaticSubRedditProps = {
    title : string,
    posts : Post[]
}
export const StaticSubRedditPage = ({title, posts} : StaticSubRedditProps) => {
    return (
        <div className={styles.list}>
            {posts.map(p => {
                return (
                    <div className={styles.postRow}>
                        {p.title}
                    </div>
                )
                })
            }
        </div>
    )

}

export const getStaticProps : GetStaticProps = async (ctx) => {
    const slug = ctx.params?.slug as StaticSubredditsName

    const posts = await getSubRedditPost(slug, 5)

    return { props: { posts, title : subRedditRecords[slug].displayName } }

}

export async function getStaticPaths() {
    const paths =  staticSubredditsName.map(name => ({
        params : {slug : subRedditRecords[name].slug}
    }))

    return {
        fallback : false,
        paths
    }
}

export default StaticSubRedditPage
