import './App.css';
import {ServicemanPage} from "./pages/servicemanPage/servicemanPage";
import {ClientPage} from "./pages/clientPage/clientPage";
import {Route, Routes} from "react-router-dom";
import {Navigation} from "./components/navigation/navigation";




function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Navigation />}>
                    <Route path="/" element={<ClientPage />}/>
                    <Route path="/servicemanPage" element={<ServicemanPage />}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;