import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import LoginPage from '../pages/Login/Login';
import NotFoundPage from '../pages/NotFound/NotFound';
import RegistrationPage from '../pages/Registration/Registration';
import AboutPage from '../pages/About/About';
import Boards from '../pages/Boards/Boards';
import WorkspacePage from '../pages/Workspace/Workspace';
import MeLayout from '../components/MeLayout/MeLayout';
import BoardPage from '../pages/Board/Board';
import { RoutePath } from './paths';
import MeSettingsPage from '../pages/MeSettings/MeSettings';
import { RouterId } from './ids';
import { Redirect } from './Redirect';
import WorkspaceMembersPage from '../pages/WorkspaceMembers/WorkspaceMembers';
import WorkspaceSettingsPage from '../pages/WorkspaceSettings/WorkspaceSettings';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '',
        element: <AboutPage />,
      },
      {
        path: RoutePath.ABOUT,
        element: <AboutPage />,
      },
      {
        path: RoutePath.LOGIN,
        element: <LoginPage />,
      },
      {
        path: RoutePath.REGISTRATION,
        element: <RegistrationPage />,
      },
      {
        path: RoutePath.BOARDS,
        element: <Boards />,
      },
    ],
  },
  //meLayout для авторизованных пользователей (зона авторизации)
  {
    path: RoutePath.ME,
    element: <MeLayout />,
    children: [
      {
        path: `${RoutePath.WORKSPACES}/:id`,
        element: <Redirect to={RoutePath.BOARDS} />,
      },
      {
        path: `${RoutePath.WORKSPACES}/:id/${RoutePath.BOARDS}`,
        element: <WorkspacePage />,
        id: RouterId.WORKSPACE_BOARDS,
      },
      {
        path: `${RoutePath.WORKSPACES}/:id/${RoutePath.MEMBERS}`,
        element: <WorkspaceMembersPage />,
        id: RouterId.WORKSPACE_MEMBERS,
      },
      {
        path: `${RoutePath.WORKSPACES}/:id/${RoutePath.SETTINGS}`,
        element: <WorkspaceSettingsPage />,
        id: RouterId.WORKSPACE_SETTINGS,
      },
      {
        path: `${RoutePath.WORKSPACES}/:id/${RoutePath.BOARDS}/:id`,
        element: <BoardPage />,
        id: RouterId.WORKSPACE_BOARD,
      },
      {
        path: `${RoutePath.SETTINGS}`,
        element: <MeSettingsPage />,
      },
    ],
  }
]);
