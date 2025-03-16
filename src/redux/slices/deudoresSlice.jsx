import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { getHeaders } from "../../services/utils";

const initialState = {
    deudores: null,
    loading: false,
    error: null,
};

const deudoresSlice = createSlice({
    name: "deudores",
    initialState,
    reducers: {
        // Set Data
        setDeudores: (state, action) => {
            state.deudores = action.payload;
        },

        // Loadings
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        // Errores
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const fetchDeudores = () => async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
        const url = `${
            import.meta.env.VITE_API_URL
        }/gdd/api/deudores`;
        const response = await axios.get(url);
        // const response = await axios.get(url, getHeaders(getState));
        console.log('axios',response.data.data);
        dispatch(setDeudores(response.data.data));
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setError(error.message));
        dispatch(setLoading(false));
    }
};

// export const updateCenter = (data) => async (dispatch) => {
//     dispatch(setLocations(data));
// };

export default deudoresSlice.reducer;

export const { setDeudores, setLoading, setError } =
    deudoresSlice.actions;
