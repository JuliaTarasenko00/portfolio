interface IRouter {
  home: string;
  projects: string;
  admin: string;
  login: string;
}

export const routers: IRouter = {
  home: '/',
  projects: 'projects',
  admin: '/admin',
  login: '/login',
};
