// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import { Platform } from "react-native";
// import { baseUrl, refreshtokenApi } from "../constants/apiPaths";
// import constants from "../constants/constants";

// // Flag to check if refresh token is in progress
// let isRefreshing = false;
// let refreshSubscribers: any = [];


// const getRefreshtoken = async () => {

//   try {
//     const res = await axios.post(refreshtokenApi(clientName), {
//       withCredentials: true,
//     });
//     console.log('REFRESH TOKEN RES ==>', res?.data);
//     AsyncStorage.setItem("refreshToken", res?.data?.serviceResult)
//     return res?.data?.serviceResult;
//   } catch (error) {
//     console.log('ERROR WHILE REFRESHING TOKEN ==>', error);
//     throw error;
//   }
// }


// // **Updated useAxios function (No Need to Change API Calls)**
// const useAxios = async () => {
//   const refreshTokenValue = await AsyncStorage.getItem("refreshToken");
//   const userData : any = await AsyncStorage.getItem(constants.userLoginData);

//   const axiosCreate = axios.create({
//     baseURL: baseUrl,
//     headers: {
//       "Authorization": `${refreshTokenValue}`,
//       "Content-Type": "application/json",
//       "OrgId" : `${JSON.parse(userData)?.organizationID || ''}`
//     },
//   });

//   // **Attach token dynamically before each request**
//   axiosCreate.interceptors.request.use(
//     async (config) => {
//       const token = await AsyncStorage.getItem("accessToken");
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );

//   // **Handle expired token & refresh logic**
//   axiosCreate.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       const originalRequest = error.config;

//       if (error.response?.status === 401 && !originalRequest._retry) {
//         if (isRefreshing) {
//           return new Promise((resolve) => {
//             refreshSubscribers.push((token: string) => {
//               originalRequest.headers.Authorization = `Bearer ${token}`;
//               resolve(axiosCreate(originalRequest));
//             });
//           });
//         }

//         originalRequest._retry = true;
//         isRefreshing = true;

//         try {
//           const newToken = await getRefreshtoken();
//           isRefreshing = false;

//           // Retry the original request with the new token
//           originalRequest.headers.Authorization = `Bearer ${newToken}`;
//           return axiosCreate(originalRequest);
//         } catch (err) {
//           isRefreshing = false;
//           console.error("Failed to refresh token", err);
//           return Promise.reject(err);
//         }
//       }

//       return Promise.reject(error);
//     }
//   );

//   return axiosCreate;
// };

// export default useAxios;
