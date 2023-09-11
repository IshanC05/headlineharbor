import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  return (
    <div>
      <Router>
        <Navbar />
        <Routes >
          <Route exact path="/" element={<News key="general" pageSize={pageSize} apiKey={apiKey} country="in" category="general" />} />
          <Route exact path="/business" element={<News key="business" pageSize={pageSize} apiKey={apiKey} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} apiKey={apiKey} country="in" category="entertainment" />} />
          <Route exact path="/health" element={<News key="health" pageSize={pageSize} apiKey={apiKey} country="in" category="health" />} />
          <Route exact path="/science" element={<News key="science" pageSize={pageSize} apiKey={apiKey} country="in" category="science" />} />
          <Route exact path="/sports" element={<News key="sports" pageSize={pageSize} apiKey={apiKey} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News key="technology" pageSize={pageSize} apiKey={apiKey} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )

}

export default App;