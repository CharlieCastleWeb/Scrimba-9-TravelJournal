
import './App.css';
import Blogpost from './components/Blogpost';
import Header from './components/Header';
import data from './data';

function App() {
  const blogPosts = data.map(item => {
    return(
      <Blogpost 
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <main>
        {blogPosts}
      </main>
    </div>
  );
}

export default App;
