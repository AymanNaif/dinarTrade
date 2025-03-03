import {useQuery} from '@tanstack/react-query';
import {fetchItems} from '../api/items';
import {Item} from '../types/items';

export const useItems = () => {
  return useQuery<Item[], Error>({
    queryKey: ['items'],
    queryFn: fetchItems,
  });
};
