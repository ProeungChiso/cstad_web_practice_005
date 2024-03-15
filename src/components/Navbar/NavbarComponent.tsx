import { Button, Navbar } from 'flowbite-react';

function NavbarComponent() {
  return (
    <Navbar className='container mx-auto'>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="./assets/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"><span className='text-blue-800'>Among</span>-Shop</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Login</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent
