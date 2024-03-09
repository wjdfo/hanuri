import "./Menubar.css";

function Menubar(){
    const width = window.innerWidth / 20;
    const height = window.innerHegiht / 70;

    return (
        <div id = "image">
            <a href = "hanuri22.com">
                <img src = '/Images/하누리.png' alt = '로고' width = {width} height = {height} />
            </a>
        </div>
    )
}

export default Menubar;