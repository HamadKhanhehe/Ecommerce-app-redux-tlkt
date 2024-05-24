import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';

const Headers = () => {
const {carts} = useSelector((state)=>state.allCart);
// const cartData = useSelector((state) => state)
// console.log(cartData)

    return (
        <>
          <Navbar style={{height:"60px", background:'#334', color: 'white'}}>
        <Container>
        
       <Link to={'/'}> <h3 className='text-light relative right-40 ml-10'>PIZZARIO & FAST FOOD</h3> </Link>
        <Link to={'/cart'} className='relative left-40 mr-10'>
        <div id='ex4'>
            <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                {/* <i style={{'font-size': '30px'}} class="fa-solid fa-cart-shopping"></i> */}
                <i style={{color: 'grey'}} class="fa-solid fa-cart-plus"></i>
                </span>
        </div>
        </Link>
        </Container>
      </Navbar>
        </>
    )
}

export default Headers