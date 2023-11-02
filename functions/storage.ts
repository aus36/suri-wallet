import * as SecureStore from 'expo-secure-store';

async function getItem() {
    try {
      const value = await SecureStore.getItemAsync('users');
      if (value !== null) {
        console.log(value);
      }
      else {
        console.log("no data");
      }
    } catch (error) {
        console.log("error loading data");
    }
  }

async function setItem() {
    try {
      await SecureStore.setItemAsync('users', 'test');
    } catch (error) {
        console.log("error saving data");
    }
  }

  async function removeItem() {
      try {
        await SecureStore.deleteItemAsync('users');
      } catch (error) {
          console.log("error removing data");
      }
    }

export { getItem, setItem, removeItem };