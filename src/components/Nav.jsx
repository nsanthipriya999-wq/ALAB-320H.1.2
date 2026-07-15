import {navlinks} from "./data.js"


//const navlinks=["Women's", "Men's","On the Street", "The CatWalk", "AdWatch","About"];
export default function Nav(){
 return(
    <nav aria-label="Main Navigation" role="navigation">
        <ul>
          {navlinks.map((link)=>(

          <li key={link}>

            <a href="#">{link}</a>

          </li>


          )
        )}
        



        </ul>
        </nav>
 );



}