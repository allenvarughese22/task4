import "./style.css";

function App() {
  return (
    <>
      <section className="intro">
        <h1 className="title">Welcome to React</h1>
        <p className="description">
          Are you ready to dive into the world of React.js?
        </p>
        <p className="description">
          React is a fantastic library for creating modern web applications.
        </p>
        <ul className="features">
          <li>It allows you to build user interfaces efficiently.</li>
          <li>It's component-based, making it highly reusable.</li>
          <li>React encourages a declarative style of programming.</li>
          <li>You can easily manage the state of your application.</li>
        </ul>
        <p className="conclusion">
          Whether you're a beginner or an experienced developer, React is a
          great choice for your next project.
        </p>
      </section>
    </>
  );
}

export default App;
