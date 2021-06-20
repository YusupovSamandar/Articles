import { useEffect } from 'react';
import './App.css';
import { fetchData, handleFilter } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './containers/sidebar/sidebar';
import axios from 'axios';

function App() {
  const currentArticle = useSelector(state => state.currentArticle);
  const dispatch = useDispatch();
  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const load = async () => {
    const { data: articles } = await axios.get("http://localhost:4000/data");
    dispatch(fetchData(articles));
  }
  return (
    <div className="App">
      <Sidebar article={currentArticle} />
    </div>
  );
}

export default App;
