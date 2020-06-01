import Organization from './organization.model';
import httpStatus from 'http-status';

export async function getOrganizationDetails(req, res) {
  return res.status(HTTPStatus.OK).send({
    status: 200,
    message: 'Organization Details Retrieved Succesfuly',
    data: product,
  });
}
