import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <div>
            <Link to={'/'}>
                <img className="w-9 md:w-16 xl:w-20" src="/logo1.png" alt="" />
            </Link>
        </div>
    )
}

export default Logo