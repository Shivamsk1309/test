import loginRoutes from '../modules/loginSignUp/routes/loginSignUp.routes'

const router = (app: any) => {
  app.use('/login', loginRoutes);
};

export default router;
