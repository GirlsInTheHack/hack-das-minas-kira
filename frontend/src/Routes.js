import { BrowserRouter, Routes as RoutesWrapper, Route } from 'react-router-dom';
import Conteudo from './pages/conteudo';
import Forum from './pages/forum';
import Footer from './components/Footer'
import Navbar from './components/Navbar';


function Routes() {
    return (
        <BrowserRouter>
            <Navbar/>
            <RoutesWrapper>
                <Route path='/' element={<Conteudo />} />
                <Route path='/conteudo' element={<Conteudo />} />
                <Route path='/forum' element={<Forum />} />
            </RoutesWrapper> 
            <Footer /> 
        </BrowserRouter>
    )
}

export default Routes;