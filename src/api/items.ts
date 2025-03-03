import {Item} from '../types/items';

export const fetchItems = async (): Promise<Item[]> => {
  try {
    const response = await fetch(
      'https://dinartrade-dba52-default-rtdb.firebaseio.com/dinar.json',
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const objData = await response.json();
    const data = Object.values(objData);

    return data.map((doc: any) => ({
      id: doc.id,
      logo: doc.logo,
      name: doc.name,
      code: doc.code,
      price: doc.price,
      percentageChange: doc.percentageChange,
      absoluteChange: doc.absoluteChange,
      isFavorite: doc.isFavorite,
    }));
  } catch (error) {
    throw error;
  }
};
