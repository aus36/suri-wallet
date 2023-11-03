import * as SecureStore from 'expo-secure-store';

async function getItem(query:string) {
    try {
      const value = await SecureStore.getItemAsync(query);
      if (value !== null) {
        console.log("found "+value);
        return value;
      }
      else {
        console.log("no data found for query: " + query);
        return null;
      }
    } catch (error) {
        console.log("error loading data from secure device storage");
    }
  }

async function setItem(key:string, value:Object) {
    try {
      await SecureStore.setItemAsync(key, JSON.stringify(value)); // values are stored as strings, we will be passing in objects, so make sure to JSON.parse them when pulling them back out
    } catch (error) {
        console.log("error saving data to secure device storage");
    }
  }

async function removeItem(item:string) {
    try {
      await SecureStore.deleteItemAsync(item);
    } catch (error) {
        console.log("error removing data from secure device storage");
    }
  }

async function removeUser(displayName:string) { // ok, pretty sure this works now
  const users = await getItem("users");

  if (users !== null && users !== undefined) {
    const usersObject = JSON.parse(users);
    const index = usersObject.findIndex((user:any) => user.displayName === displayName);

    if (index !== -1) {
      usersObject.splice(index, 1);
      setItem("users", usersObject);
    }
  }
}

export { getItem, setItem, removeItem, removeUser };