import { takeLatest, take, call, put, all } from "redux-saga/effects";
import axios from "axios";
import * as postgres from '../postgres';

const { database,
        addAppointment } = postgres;


/*=========== HELPER FUNCTIONS ===========*/

const fetchBowlsData = () => {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breed/hound/images"
  });
}

const fetchKnivesData = () => {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breed/hound/images"
  });
}

const fetchStatuesData = () => {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breed/hound/images"
  });
}


/*=========== WATCHER SAGAS ===========*/

export function* watchBowlsData() {
  yield takeLatest("BOWLS_API_REQUEST", bowlsSaga);
}

export function* watchKnivesData() {
  yield takeLatest("KNIVES_API_REQUEST", knivesSaga);
}

export function* watchStatueData() {
  yield takeLatest("STATUES_API_REQUEST", statuesSaga);
}

export function* watchBookAppointmentSaga(){
 yield takeLatest("BOOK_APPOINTMENT_REQUEST", bookAppointmentSaga);
}

/*=========== WORKER SAGAS ===========*/

function* bookAppointmentSaga(){
  try{
    const appointmentData = yield take('BOOK_APPOINTMENT_REQUEST'); //this line down could need editing
    database.addAppointment(appointmentData, (err) => {
       if(err){
         console.log(`Error in bookAppointmentSaga, ${err}`);
       }
     })
    yield put({ type: "BOOK_APPOINTMENT_SUCCESS", data: [ success: true ]});
  } catch(e){
    alert(e.message);
    console.log(e.message);
    yield put({ type: "BOOK_APPOINTMENT_FAILURE", error });
  }
}

function* bowlsSaga() {
  try {
    const response = yield call(fetchBowlsData);
    const data = response.data.message;

    yield put({ type: "BOWLS_API_SUCCESS", data });
  } catch (error) {

    yield put({ type: "BOWLS_API_FAILURE", error });
  }
}


function* knivesSaga() {
  try {
    const response = yield call(fetchKnivesData);
    const data = response.data.message;

    yield put({ type: "KNIVES_API_SUCCESS", data });
  } catch (error) {

    yield put({ type: "KNIVES_API_FAILURE", error });
  }
}


function* statuesSaga() {
  try {
    const response = yield call(fetchStatuesData);
    const data = response.data.message;
    yield put({ type: "STATUES_API_SUCCESS", data });

  } catch (error) {

    yield put({ type: "STATUES_API_FAILURE", error });
  }
}


export default function* rootSaga(){
  yield all([
    watchBowlsData(),
    watchKnivesData(),
    watchStatueData(),
    watchBookAppointmentSaga()
  ])
}
