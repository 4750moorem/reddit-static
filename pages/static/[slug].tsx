import {Post} from "../../data/Post";
import styles from "../../styles/Static.module.css"
import {GetStaticProps} from "next";
import {StaticSubredditsName, staticSubredditsName, subRedditRecords} from "../../data/SubReddit";
import {getSubRedditPost} from "../../effect/reddit-api";
import PostRow from "../../components/Post";


export type StaticSubRedditProps = {
    title : string,
    posts : Post[]
}
export const StaticSubRedditPage = ({title, posts} : StaticSubRedditProps) => {
    return (
        <>
            <header className={styles.subRedditHeader}>
                <h2> /r/{ title } </h2>
            </header>
            <div className={styles.list}>
                {posts.map(p => {
                    return (
                        <PostRow key={p.title} post={p}></PostRow>
                    )
                    })
                }
            </div>
        </>
    )

}

export const getStaticProps : GetStaticProps = async (ctx) => {
    const slug = ctx.params?.slug as StaticSubredditsName

    const posts = await getSubRedditPost(slug,)

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
