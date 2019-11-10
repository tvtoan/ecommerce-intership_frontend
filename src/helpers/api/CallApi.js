import _ from "lodash/lang";
import { getToken } from "helpers/auth/StorageMethods";

export default (
  endpoint,
  searchParams = {},
  method = "GET",
  body = null,
  isRequestToken = false,
  headerOptions = {}
) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...headerOptions
  };
  if (isRequestToken) {
    const accessToken = getToken() || null;
    if (accessToken !== null) {
      headers["Authorization"] = `Bearer ${accessToken}`;
    }
  }
  let options = {
    method,
    headers: headers
  };
  if (body !== null) {
    options.body = JSON.stringify(body);
  }
  // URL
  let url = new URL(`${process.env.REACT_APP_API_URL}/${endpoint}`);
  if (!_.isEmpty(searchParams)) {
    url.search = new URLSearchParams(searchParams).toString();
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
