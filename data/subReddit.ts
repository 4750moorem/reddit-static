export const staticSubredditsName = ["programminghumor", "webdev", "Frontend", "Kotlin"] as const
export type StaticSubredditsName = typeof staticSubredditsName[number];

export type subRedditObj = {
    displayName : string
    slug        : StaticSubredditsName
}

export type SubRedditRecord = Record<StaticSubredditsName, subRedditObj>

export const subRedditRecords : SubRedditRecord = {
    "programminghumor"  : {displayName : "Programming Humor", slug: "programminghumor" },
    "webdev"            : {displayName : "Programming Humor", slug: "webdev" },
    "Frontend"          : {displayName : "Programming Humor", slug: "Frontend" },
    "Kotlin"            : {displayName : "Programming Humor", slug: "Kotlin" }
}
