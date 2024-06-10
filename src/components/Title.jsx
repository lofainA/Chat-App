
function Title({ setIsLoggedIn }) {

    function handleLogout() {
        setIsLoggedIn(false);
    }

    return(
        <div className="title">
            <h2>Just a chat room</h2>
            <button className="logout"
                    onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default Title;