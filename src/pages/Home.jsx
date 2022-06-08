import Main from '../components/Main';
import Row from '../components/Row';
import Requests from '../Requests.js';

const Home = () => {
  return (
    <>
      <Main />
      <Row id="popular" title="Popular" fetchURL={Requests.reqPopular} />
      <Row id="top-rated" title="Top Rated" fetchURL={Requests.reqTop} />
      <Row id="trending" title="Trending" fetchURL={Requests.reqTrend} />
      <Row id="action" title="Action" fetchURL={Requests.reqAction} />
      <Row id="adventure" title="Adventure" fetchURL={Requests.reqAdventure} />
      <Row id="comedy" title="Comedy" fetchURL={Requests.reqComedy} />
      <Row id="horror" title="Horror" fetchURL={Requests.reqHorror} />
      <Row id="romance" title="Romance" fetchURL={Requests.reqRomance} />
      <Row
        id="documentary"
        title="Documentary"
        fetchURL={Requests.reqDocumentary}
      />
    </>
  );
};

export default Home;
