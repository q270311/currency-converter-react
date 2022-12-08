import { P } from "./styled";

const Footer = ({ value }) => (
    <footer>
        <P>Kursy walut pobierane są z Europejsiego Banku Centralnego</P>
        <P>Aktualne na dzień: <strong>{value}</strong></P>
    </footer>
);

export default Footer;