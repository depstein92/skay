import * as actionType from './action-types';
import fireDatabase from '../firebase/index';
import axios from 'axios';

export function getItemInfo(payload){
  return {
    type: 'GET_ITEM_INFO_REQUEST',
    payload
  }
}
