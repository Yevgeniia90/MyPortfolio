import "./style.css"

const BtnFigma = ({ link }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img alt="" /> Figma: </a>
    );
}

export default BtnFigma;