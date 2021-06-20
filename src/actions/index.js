export const fetchData = (data) => {
    return {
        type: "DATA_LOAD",
        data
    }
}

export const handleFilter = (title) => {
    return {
        type: "RENDER_CURRENT_ARTICLE",
        title
    }
}

export const revealComment = (boolean) => {
    return {
        type: "REVEAL_COMMENT",
        boolean
    }
}