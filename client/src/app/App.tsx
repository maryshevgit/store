import { Suspense } from "react";
import {Route, Routes} from "react-router-dom";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import './styles/index.scss'

interface AppProps {
    className?: string
}

export const App = ({className}: AppProps) => {
    return (
        <div className={'app'}>
            <Suspense fallback={<div>loading..</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};