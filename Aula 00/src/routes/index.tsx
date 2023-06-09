import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Dashboard } from '../pages';

export const RoutesConfig = () => {
    return (
        <Router>
            <Routes>
                <Route path="/pagina-inicial" element={<Dashboard/>} />
                <Route path='*' element={<Dashboard/>}/>
            </Routes>
        </Router>
    );
}