const KEY_TOKEN = "KEY_TOKEN";
const KEY_INFO_USER = "KEY_INFO_USER";

if (!("indexedDB" in window)) {
  console.log("This browser doesn't support IndexedDB");
}
/**
 * database name: test-db1
 * version: 1
 * upgradeCallback
 */
// let dbPromise;
// let openDbRequest = window.indexedDB.open("test-db1", 1);
// openDbRequest.onerror = function(event) {
//   console.error("Database error: " + event.target.errorCode);
// };
// openDbRequest.onsuccess = function(event) {
//   console.log("onSuccess");
//   dbPromise = event.target.result;
// };
// // creating object stores
// openDbRequest.onupgradeneeded = function(event) {
//   // Save the IDBDatabase interface
//   let upgradeDb = event.target.result;
//   // Create an objectStore for this database
//   if (!upgradeDb.objectStoreNames.contains("auth")) {
//     upgradeDb.createObjectStore("auth", { keyPath: "nameKey" });
//   }
//   if (!upgradeDb.objectStoreNames.contains("cart")) {
//     upgradeDb.createObjectStore("cart", { keyPath: "id", autoIncrement: true });
//   }
// };

let db;
let dbNamespace;
function setupDB(namespace = "eco") {
  // console.log("setupDB");
  return new Promise((resolve, reject) => {
    if (namespace !== dbNamespace) {
      db = null;
    }
    dbNamespace = namespace;
    // If setupDB has already been run and the database was set up, no need to
    // open the database again; just run our callback and return!
    if (db) {
      resolve(db);
      return;
    }

    let dbReq = indexedDB.open(namespace, 1);

    // Fires when the version of the database goes up, or the database is created
    // for the first time
    dbReq.onupgradeneeded = function(event) {
      // Save the IDBDatabase interface
      let upgradeDb = event.target.result;
      // Create an objectStore for this database
      if (!upgradeDb.objectStoreNames.contains("auth")) {
        upgradeDb.createObjectStore("auth", { keyPath: "nameKey" });
      }
      if (!upgradeDb.objectStoreNames.contains("cart")) {
        upgradeDb.createObjectStore("cart", {
          keyPath: "id",
          autoIncrement: true
        });
      }
    };
    dbReq.onsuccess = function(event) {
      db = event.target.result;
      resolve(db);
    };
    dbReq.onerror = function(event) {
      reject(`error opening database ${event.target.errorCode}`);
    };
  });
}

export const addToken = (token, nameKey = KEY_TOKEN) => {
  return new Promise((resolve, reject) => {
    let tx = db.transaction("auth", "readwrite");
    let store = tx.objectStore("auth");
    let data = {
      nameKey: nameKey,
      token: token
    };
    store.add(data);
    tx.oncomplete = resolve;
    tx.onerror = function(event) {
      reject(`error storing note ${event.target.errorCode}`);
    };
  });
};

export const getToken = (db, nameKey = KEY_TOKEN) => {
  return new Promise((resolve, reject) => {
    let tx = db.transaction("auth", "readonly");
    let store = tx.objectStore("auth");
    let request = store.get(nameKey);
    request.onsuccess = function(event) {
      resolve(request.result ? request.result.token : request.result);
    };
    request.onerror = function(event) {
      reject(`error storing note ${event.target.errorCode}`);
    };
  });
};

export const removeToken = (nameKey = KEY_TOKEN) => {
  return new Promise((resolve, reject) => {
    let tx = db.transaction("auth", "readwrite");
    let store = tx.objectStore("auth");
    let request = store.delete(nameKey);
    request.onsuccess = resolve;
    request.onerror = function(event) {
      reject(`error storing note ${event.target.errorCode}`);
    };
  });
};

// user
export const addUser = (user, nameKey = KEY_INFO_USER) => {
  return new Promise((resolve, reject) => {
    let tx = db.transaction("auth", "readwrite");
    let store = tx.objectStore("auth");
    let data = {
      nameKey: nameKey,
      user: user
    };
    store.add(data);
    tx.oncomplete = resolve;
    tx.onerror = function(event) {
      reject(`error storing note ${event.target.errorCode}`);
    };
  });
};
export const getUser = (db, nameKey = KEY_INFO_USER) => {
  return new Promise((resolve, reject) => {
    let tx = db.transaction("auth", "readonly");
    let store = tx.objectStore("auth");
    let request = store.get(nameKey);
    request.onsuccess = function(event) {
      resolve(request.result ? request.result.user : request.result);
    };
    request.onerror = function(event) {
      reject(`error storing note ${event.target.errorCode}`);
    };
  });
};
export const removeUser = (nameKey = KEY_INFO_USER) => {
  return new Promise((resolve, reject) => {
    let tx = db.transaction("auth", "readwrite");
    let store = tx.objectStore("auth");
    let request = store.delete(nameKey);
    request.onsuccess = resolve;
    request.onerror = function(event) {
      reject(`error storing note ${event.target.errorCode}`);
    };
  });
};

// cart
export const addItemCart = itemCart => {
  return new Promise((resolve, reject) => {
    let tx = db.transaction("cart", "readwrite");
    let store = tx.objectStore("cart");
    let data = {
      ...itemCart
    };
    store.add(data);
    tx.oncomplete = resolve;
    tx.onerror = function(event) {
      reject(`error add item cart: ${event.target.errorCode}`);
    };
  });
};
export const updateItemCart = (itemCart, nameKey) => {
  return new Promise((resolve, reject) => {
    let tx = db.transaction("cart", "readwrite");
    let store = tx.objectStore("cart");
    let request = store.get(nameKey);
    request.onsuccess = function(event) {
      let data = event.target.result;
      data.product = itemCart;
      let requestUpdate = store.put(data);
      requestUpdate.onerror = function(event) {
        reject(`error update item cart: ${event.target.errorCode}`);
      };
      requestUpdate.onsuccess = resolve;
    };
    request.onerror = function(event) {
      reject(`error update item cart: ${event.target.errorCode}`);
    };
  });
};
export const removeItemCart = nameKey => {
  return new Promise((resolve, reject) => {
    let tx = db.transaction("cart", "readwrite");
    let store = tx.objectStore("cart");
    let request = store.delete(nameKey);
    request.onsuccess = resolve;
    request.onerror = function(event) {
      reject(`error remove item cart: ${event.target.errorCode}`);
    };
  });
};
export const getItemCart = (db, nameKey) => {
  return new Promise((resolve, reject) => {
    let tx = db.transaction("cart", "readonly");
    let store = tx.objectStore("cart");
    let request = store.get(nameKey);
    request.onsuccess = function(event) {
      resolve(request.result ? request.result.user : request.result);
    };
    request.onerror = function(event) {
      reject(`error get item cart: ${event.target.errorCode}`);
    };
  });
};
export const getCart = db => {
  return new Promise((resolve, reject) => {
    let tx = db.transaction("cart", "readonly");
    let store = tx.objectStore("cart");
    let request = store.getAll();
    request.onsuccess = function(event) {
      resolve(event.target.result ? event.target.result : null);
    };
    request.onerror = function(event) {
      reject(`error get all cart: ${event.target.errorCode}`);
    };
  });
};

export default setupDB;
