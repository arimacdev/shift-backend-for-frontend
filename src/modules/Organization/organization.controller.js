import Organization from './organization.model';
import constants from '../../config/constants';
import mysql from 'mysql';

const connection = mysql.createConnection({
  host: constants.DB_HOST,
  user: constants.DB_USER,
  password: constants.DB_PASSWORD,
  database: constants.DATABASE,
});

connection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to Database');
});

export async function getOrganizationDetails(req, res) {
  const workspace = req.query.workspace;

  connection.query(
    `SELECT * FROM Organization AS O INNER JOIN Mobile AS M ON O.workspaceId = M.workspaceId WHERE O.workspace='${workspace}'`,
    (error, result) => {
      if (error) throw error;
      // result.send(result);
      console.log('Result', result);
      if (result.length === 0)
        return res.status(404).send({
          status: 404,
          message: 'Workspace Not Found',
          data: result,
        });
      let android = {};
      let ios = {};
      result.forEach((platform) => {
        if (platform.platform == 'android') {
          (android.currentVersion = platform.current_version),
            (android.latestVersion = platform.latest_version),
            (android.isForceUpdate = platform.force_update);
        } else if (platform.platform == 'ios') {
          (ios.currentVersion = platform.current_version),
            (ios.latestVersion = platform.latest_version),
            (ios.isForceUpdate = platform.force_update);
        }
      });
      let response = {
        workspaceId: result[0].workspaceId,
        workspace: result[0].workspaceId,
        organizationName: result[0].organizationName,
        company: result[0].company,
        organizationLogo: result[0].organizationLogo,
        workspaceUrl: result[0].workspaceUrl,
        android: android,
        ios: ios,
        idpEndpoints: {
          authorization: result[0].authorization,
          token: result[0].token,
        },
      };

      return res.status(200).send({
        status: 200,
        message: 'Organization Retrieved Successfully',
        data: response,
      });
    }
  );
}

export async function saveOrganizationDetails(req, res) {
  try {
    const body = req.body;
    const product = await Organization.create({
      workspace: body.workspace,
      organizationName: body.organizationName,
      company: body.company,
      organizationLogo: body.organizationLogo,
      workspaceUrl: body.workspaceUrl,
      android: body.android,
      ios: body.ios,
      idpEndpoints: body.idpEndpoints,
      notification: body.notification,
    });
    return res.status(200).send({
      status: 200,
      message: 'Organization Added Successfully',
      data: product,
    });
  } catch (error) {
    return res.status(400).send({
      status: 400,
      message: 'Error Adding Product',
      data: error,
    });
  }
}
