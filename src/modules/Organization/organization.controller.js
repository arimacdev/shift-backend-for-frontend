import Organization from './organization.model';

export async function getOrganizationDetails(req, res) {
  const workspace = req.query.workspace;
  try {
    const organization = await Organization.findOne({ workspace: workspace });
    if (!organization) {
      return res.status(401).send({
        status: 401,
        message: "Organization doesn't exist",
      });
    }
    return res.status(200).send({
      status: 200,
      message: 'Organization Retrieved Successfully',
      data: organization,
    });
  } catch (error) {
    return res.status(400).send({
      status: 400,
      message: 'Error Retrieving Organization',
      data: error,
    });
  }
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
