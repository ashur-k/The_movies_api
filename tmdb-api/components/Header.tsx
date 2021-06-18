import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>TMDB</span> Movies
            </h1>
            <p className={headerStyles.description}>
                Fetching Data from TMDB movies API
            </p>
        </div>
    )
}

export default Header