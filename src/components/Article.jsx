export default function Article({date,title,image,alt,text,link}){
   return(

     <section>
      <article>
        <time> {date}</time>
        <h3>{title}</h3>
        <img src={image} alt={alt} />

        <p className="articlepara">{text}</p>
        <p className="continues">
          <a href={link} >Continues...</a>
        </p>
        
      </article>
    </section>
   






   );






}