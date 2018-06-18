import uuidv1 from 'uuid/v1';

export const addIdToObj = obj => ({ id: uuidv1(), ...obj });
