
import './App.css';
import greet from './Greet';



let arr=[{link:'https://d3vn5rg72hh8yg.cloudfront.net/cdn/imagesource/previews/7823/8367b6f32eea7b00aa69603419d0c66f/0/cbca743c0c6473de05c9515d2b0ef5c1/2346779.jpg',sname:'this is image1',},
        {link:'https://d3vn5rg72hh8yg.cloudfront.net/cdn/imagesource/previews/291/5f661b2dac2d846a58eae14e81cf05bf/0/245bf9f58478e813f9207d5e1a09023c/87274.jpg', sname:'this is image2'},
        {link:'https://d3vn5rg72hh8yg.cloudfront.net/cdn/imagesource/thumbs//7823/3/8165d5dccb01f54603db305d1d19735d.jpg',sname:'this is image3'},
        {link:'https://d3vn5rg72hh8yg.cloudfront.net/cdn/imagesource/thumbs//7808/3/52fa5d7fbbbd2105e903eebe6bd9df76.jpg',sname:'this is image4'},
        {link:'https://d3vn5rg72hh8yg.cloudfront.net/cdn/imagesource/thumbs//7808/3/52fa5d7fbbbd2105e903eebe6bd9df76.jpg',sname:'this is image4'},
        {link:'https://d3vn5rg72hh8yg.cloudfront.net/cdn/imagesource/previews/7823/8367b6f32eea7b00aa69603419d0c66f/0/cbca743c0c6473de05c9515d2b0ef5c1/2346779.jpg',sname:'this is image1',},]
function App(props) {
  
  return (
   <div className='card'>
       <div className='cards'>
          <div>
             <img src={props.link} className='card_img'/>
          </div> 
          <div>{props.sname}</div> 
       </div>
    </div>
  );
  
}

export default App;
export {arr}
