import loginRoutes from '../modules/login/routes/login.routes'

const router = (app: any) => {
  app.use('/login', loginRoutes);
};

export default router;
