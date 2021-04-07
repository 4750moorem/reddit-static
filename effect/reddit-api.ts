import {apiToPost} from "../data/Post";

export const getSubRedditPost = async (name : string, limit : number, after ?: string) => {
    try {
        const afterParam = after ? `&after=${after}` : ""
        const res = await fetch(`https://www.reddit.com/r/${name}.json?limit=${limit}${afterParam}`)

        const body = await res.json()
        console.log(body.data.children.map((post: { data: any }) => post.data))
        const postsFromBody = body.data.children.map((post: { data: any }) => post.data)
        return postsFromBody.map((p: any) => apiToPost(p))
    } catch (ex) {
        console.log("OHH NOOOO")
    }
}
