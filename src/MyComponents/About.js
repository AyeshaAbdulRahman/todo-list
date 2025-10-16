import React from 'react'

const About = () => {
  return (

    <>
    <div className="container my-5">
      <h2>About This App</h2>
      <p>
        This Todo List App is a simple React-based project created to help you
        manage your daily tasks efficiently. You can add, view, and delete your
        todos — all changes are automatically saved in your browser’s local storage,
        so your tasks remain even after refreshing the page.
      </p>

      <p>
        The app is built using modern React concepts including functional components,
        React Hooks (<code>useState</code> and <code>useEffect</code>), and React Router
        for smooth navigation between pages.
      </p>

      <p>
        This project serves as a great starting point for learning React fundamentals,
        component reusability, and state management. Future versions may include
        features like task filtering, deadlines, and user authentication.
      </p>
    </div>
    </>
  );
}


export default About
