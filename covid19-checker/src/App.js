import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {fetchStatics} from './redux/statics/statics.action';
import {AnalyticsCounts} from './analytics';
import Loader from 'react-loader-spinner';
import './App.css';

function App() {

  const statics = useSelector(state => state.statics);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
          <h1>Coronavirus analytics</h1>
          <button
            onClick={() => dispatch(fetchStatics())}
          >
            Fetch
          </button>
          <AnalyticsCounts
            recovered={statics.recovered}
            deaths={statics.deaths}
            confirmed={statics.confirmed}
          />
      </header>
    </div>
  );
}

export default App;
