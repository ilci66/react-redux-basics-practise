import logo from './logo.svg';
import './App.css';
//connect is used for reaching states directly from any component
import { connect } from 'react-redux'

//you need to pass to props whatever you specified to take from redux store
function App({ posts }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      </header>
    </div>
  );
}

//mapStateToProps determines what state from our store we want to pull into our component.
const mapStateToProps = state => {
  return { posts: state.posts }
}

export default connect(mapStateToProps)(App);
