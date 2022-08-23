import {
    RETRIEVE_HOSPITALS,
    ADD_HOSPITAL,
    UPDATE_HOSPITAL
} from "../actions/types";
const initialState = [];
function hospitalReducer(hospitals = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_HOSPITAL:
      return [...hospitals, payload];
    case RETRIEVE_HOSPITALS:
      return payload;
    case UPDATE_HOSPITAL:
      return hospitals.map((hospital) => {
        if (hospital.id === payload.id) {
          return {
            ...hospital,
            ...payload,
          };
        } else {
          return hospital;
        }
      });
    default:
      return hospitals;
  }
};
export default hospitalReducer;