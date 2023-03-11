import { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Header } from 'widgets/Header';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>loading..</div>}>
                <Header />
                <AppRouter />
            </Suspense>
        </div>
    );
}

export default App;
