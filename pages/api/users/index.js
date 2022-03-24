import { apiHandler, usersRepo } from '../../../src/helpers/api';
import { omit } from '../../../src/constants';

export default apiHandler({
    get: getUsers
});

async function getUsers(req, res) {
    const { data: response } = await usersRepo.getAll()
    return res.status(200).json(response.map(x => omit(x, 'hash')));
}