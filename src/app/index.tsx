import { Routing } from 'pages';
import { withProviders } from './providers';
import './styles/index.css';
import './styles/vars.css';
import './styles/_nulling-styles.css';
import './styles/iconfonts.css';
import TrailerPlayer from 'widgets/TrailerPlayer';
import ActorsCreatorsModal from 'widgets/ActorsCreatorsModal';

function App() {
  return (
    <>
      <Routing />
      <TrailerPlayer />
      <ActorsCreatorsModal />
    </>
  );
}

export default withProviders(App);
