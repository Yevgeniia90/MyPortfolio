import Header from "../components/header/header"



const Home = () => {
    return (
        <>
            <Header/>

            <main className="section">
                <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, ReactJS, Webpack, Angular, HTML, CSS, BootStrap</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>NodeJS, MySQL, PHP, Laravel, OpenCart, WordPress</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">SEO и Design (Figma)</h2>
                        </li>
                    </ul>

                </div>
            </main>
        </>
    );
}

export default Home;