import {
    RETRIEVE_HOSPITALS,
    ADD_HOSPITAL,
    UPDATE_HOSPITAL
} from "./types";

import AppDataService from "../services/data.service";
export const retrieveHospitals = () => async (dispatch) => {
  try {
    const res = await AppDataService.getAllHospitals();
    dispatch({
      type: RETRIEVE_HOSPITALS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addHospital = (name, description) => async (dispatch) => {
  try {
    const res = await AppDataService.create({ name, description });

    dispatch({
      type: ADD_HOSPITAL,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateHospital = (id, data) => async (dispatch) => {
  try {
    const res = await AppDataService.update(id, data);

    dispatch({
      type: UPDATE_HOSPITAL,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
