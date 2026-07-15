import {footerlinks} from "./data.js";
export default function Footer() {
    return (
        <footer>
            <nav aria-label="Footer Navigation" role="navigation">
                    <ul>
                      {footerlinks.map((link)=>(
            
                      <li key={link}>
            
                        <a href="#">{link}</a>
            
                      </li>
                      ))}
                 </ul>
                 </nav>
            <p>&copy; 2013 Valet Industries,Inc</p>
        </footer>

    );




}