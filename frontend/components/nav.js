import Link from 'next/link'

const Nav = () => (

    <div >
        <nav className="navbar navbar-expand-lg bg-dark px-2 ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand text-white " href="#">Navbar</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/"><a className="nav-link active text-white " aria-current="page" href="#">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="about"><a className="nav-link text-white " href="#">Abot</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="service"><a className="nav-link  text-white ">Service</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>

)


export default Nav