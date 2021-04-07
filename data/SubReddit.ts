export const staticSubredditsName = ["programminghumor", "webdev", "Frontend", "Kotlin"] as const
export type StaticSubredditsName = typeof staticSubredditsName[number];

export type subRedditObj = {
    displayName : string
    slug        : StaticSubredditsName
}

export type SubRedditRecord = Record<StaticSubredditsName, subRedditObj>

export const subRedditRecords : SubRedditRecord = {
    "programminghumor"  : {displayName : "Programming Humor", slug: "programminghumor" },
    "webdev"            : {displayName : "Web Dev", slug: "webdev" },
    "Frontend"          : {displayName : "Front End", slug: "Frontend" },
    "Kotlin"            : {displayName : "Kotlin", slug: "Kotlin" }
}
