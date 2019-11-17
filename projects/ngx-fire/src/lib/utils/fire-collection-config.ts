export interface FireCollectionOptions {
  collection: string;
}

export const DEFAULT_FIRE_COLLECTION_OPT: FireCollectionOptions = {
  collection: undefined
}

// export function FireCollectionConfig(opt: FireCollectionOptions = DEFAULT_FIRE_COLLECTION_OPT) {
//   return target => {
//     target['collection'] = opt.collection;
//     console.log('decorator', target, opt);
//   }
// }

// export function FireCollectionConfig(opt: FireCollectionOptions = DEFAULT_FIRE_COLLECTION_OPT) {
//   return function addCollectionName<T extends { new(...args: any[]): {} }>(constructor: T) {
//     return class extends constructor {
//       collection = opt.collection;
//     }
//   }
// }

export function FireCollectionConfig(options: Partial<FireCollectionOptions> = { collection: undefined }) {
  return (constructor) => {
    Object.keys(options).forEach(key => constructor[key] = options[key]);
  };
}
