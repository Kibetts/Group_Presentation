import React, { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase Count</button>
    </div>
  );
};

export default MyComponent;

// ****************************************

// component hierarchy

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

const MainContent = () => {
  return (
    <main>
      <Sidebar />
      <Content />
    </main>
  );
};

const Sidebar = () => {
  return (
    <aside>
      <h2>Sidebar</h2>
      <ul>
        <li>Category 1</li>
        <li>Category 2</li>
        <li>Category 3</li>
      </ul>
    </aside>
  );
};

const Content = () => {
  return (
    <article>
      <h2>Content</h2>
      <p>This is the main content area.</p>
    </article>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 My App. All rights reserved.</p>
    </footer>
  );
};

export default App;

// ***************************************
// Static Version

const ProductList = () => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </div>
  );
};

// **********************************************
// Inverse Data flow

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <ChildComponent count={count} onIncrement={handleIncrement} />
    </div>
  );
};

const ChildComponent = ({ count, onIncrement }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};
