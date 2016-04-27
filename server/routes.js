var User        = require('./controllers/user.server.controller'),
    Contact     = require('./controllers/contact.server.controller'),
    Newsletter  = require('./controllers/newsletter.server.controller'),
    Project     = require('./controllers/project.server.controller'),
    Tutorial    = require('./controllers/tutorial.server.controller'),
    Job         = require('./controllers/job.server.controller'),
    jwt         = require('jsonwebtoken'),
    secrets     = require('../config/secrets'),
    verifyToken = require('../config/tokenMiddleware'),
    passport    = require('passport');

module.exports = function(app) {

  app.get('/api', verifyToken,  User.welcome);

  app.post('/api/login',    User.authenticateUserByEmail);
  app.post('/api/register', User.registerUser);

  app.get('/api/users',            User.getAllUsers);
  app.get('/api/user/:user_id',    User.getEachUserDetails);
  app.get('/api/users/:username',  User.getEachUserByUsername);
  app.put('/api/user/:user_id',    User.updateEachUserDetails);
  app.delete('/api/user/:user_id', User.deleteEachUserDetails);

  app.post('/api/file/upload', User.postPhoto);
  app.post('/api/contact',     Contact.sendMessage);
  app.post('/api/newsletter',  Newsletter.subscribe);
  app.post('/api/password',    User.resetUserPassword);

  app.post('/api/jobs/create', Job.create);
  app.get('/api/jobs', Job.getAllJobs);

  app.post('/api/project', Project.shareProject);
  app.get('/api/project',  Project.getAllProjects);
  app.get('/api/projects/:projectSlug', Project.getEachProjectDetail);
  app.delete('/api/project/:id', verifyToken, Project.deleteEachProject);

  app.post('/api/tutorials/create', verifyToken, Tutorial.create);
  app.get('/api/tutorials', Tutorial.getAllTutorials);
  app.get('/api/tutorials/:slug', Tutorial.getEachTutorialDetails);
};
