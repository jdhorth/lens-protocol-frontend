import { css } from '@emotion/css'
import { PINK } from '../theme'

const Footer = () => {
    return (
        <nav>
            <div className={footerStyle}>
                <h3>👨‍💻 nader.lens repo x hotlips.lens 👨‍💻</h3>
            </div>
        </nav>
    );
}

export default Footer;

const footerStyle = css`
border: none;
outline: none;
margin-top: 15px;
color: #340036;
padding: 10px;
border-radius: 50px;
cursor: help;
font-size: 14px;
text-align: center;
font-weight: 500;
background-color: rgb(${PINK});
&:hover {
  background-color: rgba(${PINK}, .55);
}
`
