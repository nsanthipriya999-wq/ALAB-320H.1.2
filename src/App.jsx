
import Header from "./components/Header.jsx";
import Article from "./components/Article.jsx";
import Footer from "./components/Footer.jsx";
import "../style.css";
import image1 from "./assets/blog-image-1.jpg"
import image2 from "./assets/blog-image-2.jpg"


export default function App(){

  return(

    <>
    <Header />
    <main>
    <Article
      date="2020-11-12"
      title="On the Street in Brooklyn"
      image={image1}
      alt= "On the Street in Brooklyln" 
      text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo soluta id distinctio laborum, omnis
          voluptas? Architecto nemo minima officiis eligendi libero quos, culpa ea a quia iure, enim nulla vero"    
      links="brooklyn.html"
    
    
    
    
    
    />
    <Article
      date="2020-11-11"
      title="Vintage in Vogue"
      image={image2}  
      alt= "Vintage in Vogue" 
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate error adipisci iste qui maiores
          quibusdam! Repudiandae aliquam corporis reiciendis aperiam eum repellat quod eaque ipsa perspiciatis!
          Voluptas, vero cupiditate."  
      links="vintage.html"
    
    
    
    />
    </main>
    <Footer />
    
    
    
    
    
    </>
  );


}