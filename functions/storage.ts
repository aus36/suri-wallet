import * as SecureStore from 'expo-secure-store';

async function getItem(query:string) {
    try {
      const value = await SecureStore.getItemAsync(query);
      if (value !== null) {
        console.log(value);
        return value;
      }
      else {
        console.log("no data");
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

  async function removeItem(query:string) {
      try {
        await SecureStore.deleteItemAsync(query);
      } catch (error) {
          console.log("error removing data from secure device storage");
      }
    }

export { getItem, setItem, removeItem };