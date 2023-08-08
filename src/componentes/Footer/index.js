import "./Footer.css"
const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://www.linkedin.com/in/robinzondeveloper/' target="_blank">
            <img src="/img/linkedin.png" alt='Facebook'/>
        </a>
        <a href='https://github.com/robinfdezz' target="_blank">
            <img src="/img/github.png" alt='twitter' />
        </a>
        <a href='https://www.instagram.com/robinfdezz/' target="_blank">
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por Robin</strong>
</footer>
}

export default Footer;