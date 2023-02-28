export const DBConfig = {
  name: "MyDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "myData",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [],
    },
  ],
};
