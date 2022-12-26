import { BrowserRouter } from "react-router-dom"
// import styled from 'styled-components'
// import Home from './pages/Home'
import Pages from './pages/Pages'


function App() {
  return (
    <div className="container">
      <BrowserRouter>
          <Pages />
      </BrowserRouter>
    </div>
  );
}


// const Logo = styled.div`
//     text-decoration: none;
//     font-size: 1.5rem;
//     font-weight: 400;
//     font-family: 'Lobster Two', cursive;

//     a {
//         text-decoration: none;
//         color: white;
//     }
// `

// const Nav = styled.div`
//     display: flex;
//     align-items; center;
//     padding: 4rem 0rem;
//     justify-content: flex-start;

//     svg {
//         font-size: 2rem;
//     }
// `


export default App;
