import './header.css';

const fechaHoraActual = () => {

    let currentdate = new Date();
    let datetime = currentdate.getDate() + "/"

    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + "-"
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

    return datetime;
}

export const Header = () => {

    return <div className= "unir-header">
    <p><b>nada</b></p>
    <b>{fechaHoraActual()}</b>
    </div>
};