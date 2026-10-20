import './book.css';
export function Book({ title, author, likes, isAvailable }){

const isPopular = likes > 100;
let cardClassName = 'book-card';
  if (isPopular) {
    cardClassName += ' popular';
  }
  if (!isAvailable) {
    cardClassName += ' unavailable';
  }
    return (
      <div>
      <li>
        <h3>Title: {title}</h3>
        <h3>Author: {author}</h3>
        <h3>Likes: {likes}</h3>
        <h3>isAvailable: {String(isAvailable)}</h3>
      </li>
      </div>
    
  );


}
  
    
