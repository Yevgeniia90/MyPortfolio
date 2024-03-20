const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Kharkiv, Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">WhatsApp</h2>
                        <p><a href="tel:+380638032809">+38(063) 80-32-809</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p><a href="https://t.me/jenniks_blond" target="blank">https://t.me/jenniks_blond</a></p>
                    </li>

                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:evgeniiavania@gmail.com">evgeniiavania@gmail.com</a></p>
                    </li>
                </ul>

            </div>
        </main>
    );
}

export default Contacts;