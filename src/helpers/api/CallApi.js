import _ from "lodash/lang";
// import { getToken } from "helpers/auth/StorageMethods";
import setupDB, { getToken } from "helpers/auth/StorageIndexedDB";

export default async ({
  endpoint,
  queryParams = {},
  method = "GET",
  body = null,
  isRequestToken = true,
  headerOptions = {},
  isMultiForm = false
}) => {
  let headers = {
    Accept: "application/json",
    ...headerOptions
  };
  if (!isMultiForm) {
    headers["Content-Type"] = "application/json";
  }
  if (isRequestToken) {
    const accessToken = await setupDB().then(db => getToken(db)) || null;
    if (accessToken !== null) {
      headers["Authorization"] = `Bearer ${accessToken}`;
    }
  }
  let options = {
    method,
    headers: headers
  };
  if (body !== null) {
    options.body = isMultiForm ? body : JSON.stringify(body);
  }
  // URL
  let url = new URL(`${process.env.REACT_APP_API_URL}/${endpoint}`);
  if (!_.isEmpty(queryParams)) {
    url.search = new URLSearchParams(queryParams).toString();
  }
  return fetch(url, options)
    .then(handleResponse)
    .then(responseJson => {
      return Promise.resolve(responseJson);
    })
    .catch(error => {
      return Promise.reject(error);
    });
};

const handleResponse = response => {
  if (!response.ok) {
    throw response;
  }
  return response.json();
};
