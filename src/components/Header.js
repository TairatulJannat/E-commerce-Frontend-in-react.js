import { Container,Navbar,Nav, NavDropdown } from 'react-bootstrap';
import { Link , useHistory } from 'react-router-dom';
function Header(){
    // let user = localStorage.getItem('user-info')
    const history = useHistory();
    let user = JSON.parse(localStorage.getItem("user-info")) 
    function logout(){
        localStorage.clear();
        history.push('/register')
    }
    return(
       
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto navbar-warapper">
        {
            localStorage.getItem('user-info') ?
            <>
            <Link to="/">ProductList</Link>
            <Link to="/add">Add Product</Link>
             <Link to="/update">Update Product</Link>
             <Link to="/search">Search Product</Link>
            </>
            :
            <>
             <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>

            </>

        }
    </Nav>
    {localStorage.getItem('user-info') ?
        <Nav>
            <NavDropdown title={user && user.name}>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    :null}
    </Container>
  </Navbar>
 
       
    )
}
export default Header;