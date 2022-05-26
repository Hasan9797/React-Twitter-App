import "./appHeader.css"

const AppHeader = ({posts, like}) => {
    return(
        <div className="app-header d-flex">
            <h1>Hasan Sadullaev</h1>
            <h2>{posts} posts, like {like}</h2>
        </div>
    )
}

export default AppHeader