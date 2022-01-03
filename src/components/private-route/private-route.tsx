import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts/consts';
import { State } from '../../types/state';
import { History } from 'history';
import { useSelector } from 'react-redux';

type RenderFuncProps = {
    history: History<unknown>;
}

type PrivateRouteProps = RouteProps & {
    render: (props: RenderFuncProps) => JSX.Element;
}



function PrivateRoute(props: PrivateRouteProps): JSX.Element {
    const { exact, path, render } = props;

    const status = useSelector<State, string>((state) => state.authorizationStatus);
    return (
        <Route
            exact={exact}
            path={path}
            render={(routeProps) => (
                status === AuthorizationStatus.Auth
                    ? render(routeProps)
                    : <Redirect to={AppRoute.Login} />
            )}
        />
    );
}

export default PrivateRoute;

