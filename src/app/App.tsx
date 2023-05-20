import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import {
    Suspense, useEffect,
} from 'react';
import { getUserMounted, userActions } from 'entities/User';
import { useWindowDimensions } from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions';

import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import { articlesPageActions } from 'pages/ActiclesPage/model/slice/articlesPageSlice';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const mounted = useSelector(getUserMounted);
    // const { height } = useWindowDimensions();

    // const onChangeHeight = useThrottle(() => {
    //     dispatch(articlesPageActions.setWindowHeight(height));
    //     console.log(height);
    // }, 500);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    // useEffect(() => {
    //     onChangeHeight();
    // }, [onChangeHeight]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <Sidebar />
                    { mounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
