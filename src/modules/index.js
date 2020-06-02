import OrganizationRoutes from './Organization/organization.routes';
// import '../config/database';s

export default (app) => {
  app.get('/health', function (req, res) {
    return res.status(200).json('server is running');
  });
  app.use('/organization', OrganizationRoutes);
};
