import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

const customers = [
   {
       "dni": "30242306",
       "name": "Fernando Gomez de Paz.",
       "age": 35
   },
   {
       "dni": "32154789",
       "name": "Juan Perez.",
       "age": 39
   },
   {
       "dni": "30109942",
       "name": "Analía Baigorria.",
       "age": 36
   }
]

export const fetchCustomers = createAction(FETCH_CUSTOMERS);