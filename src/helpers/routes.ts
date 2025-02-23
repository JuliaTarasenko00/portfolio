interface IRouter {
  home: string;
  admin: string;
  login: string;
}

export const routers: IRouter = {
  home: '/',
  admin: '/admin',
  login: '/login',
};

export const siteRoute = {
  main: 'main',
  about: 'about_me',
  work: 'work',
  education: 'education',
  projects: 'projects',
};
