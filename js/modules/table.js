import getTable from './getTable';
import deleteTable from './deleteTable';
import createTable from './createTable';
import updateTable from './updateTable';

const table = async () => {
    await getTable()
    deleteTable()
    createTable()
    updateTable()
}

export default table