import './App.css';
import {Navigation} from "./components/navigation";
import {ServicemanPage} from "./pages/servicemanPage";
import {ClientPage} from "./pages/clientPage";
import {Route, Routes} from "react-router-dom";



function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route path="/" element={<ClientPage />}/>
                    <Route path="/servicemanPage" element={<ServicemanPage />}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
