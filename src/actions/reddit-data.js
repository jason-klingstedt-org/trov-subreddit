export const SET_ARTICLES = 'SET_ARTICLES'

export const setArticles = (articles, currentSub, afterPage, paging) => ({
    type: SET_ARTICLES,
    payload: {
        articles,
        currentSub,
        afterPage,
        paging
    }
})
