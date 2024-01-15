import { ProductSorterByPlayers } from '@/shared/ui/product-sorter-by-players/index';
import { ProductSorterByAvailability } from '@/shared/ui/product-sorter-by-availability/index';
import { ProductSorterByAge } from '@/shared/ui/product-sorter-by-age/index';
import { ProductSorterByPrice } from '@/shared/ui/product-sorter-by-price/index';
import { ProductSorterByCategory } from "@/shared/ui/product-sorter-by-category";

export const components: {[componentTitle: string]: React.FC} = { 
  ProductSorterByCategory,
  ProductSorterByPrice,
  ProductSorterByAge,
  ProductSorterByAvailability,
  ProductSorterByPlayers,
 }