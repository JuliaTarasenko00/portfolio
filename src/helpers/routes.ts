interface IRouter {
  home: string;
  resume: string;
  projects: string;
  admin: string;
  login: string;
}

export const routers: IRouter = {
  home: '/',
  resume: 'resume',
  projects: 'projects',
  admin: '/admin',
  login: '/login',
};
