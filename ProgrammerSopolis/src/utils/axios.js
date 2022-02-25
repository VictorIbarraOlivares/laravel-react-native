import React from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Constants } from "expo-constants";

const axiosInstance = axios.create({
    baseURL: Constants.manifest.extra.api_url + "/",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
    }
});

export default axiosInstance;