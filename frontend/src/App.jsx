import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Router from './routes/Router';

function App() {
    return (
        <>
            <Header />
            <Router />
        </>
    );
}

export default App;