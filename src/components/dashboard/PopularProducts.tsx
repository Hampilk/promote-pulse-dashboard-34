
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  status: 'active' | 'offline';
  image: string;
}

const PopularProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: '1',
      name: 'Crypter - NFT UI Kit',
      price: 3250.00,
      status: 'active',
      image: '/placeholder.svg'
    },
    {
      id: '2',
      name: 'Bento Pro 2.0 Illustrations',
      price: 7890.00,
      status: 'active',
      image: '/placeholder.svg'
    },
    {
      id: '3',
      name: 'Fleet - travel shopping kit',
      price: 1500.00,
      status: 'offline',
      image: '/placeholder.svg'
    },
    {
      id: '4',
      name: 'SimpleSocial UI Design Kit',
      price: 9999.00,
      status: 'active',
      image: '/placeholder.svg'
    },
    {
      id: '5',
      name: 'SimpleSocial UI Design Kit',
      price: 4750.00,
      status: 'active',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm p-5 h-full">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-medium text-lg">Popular products</h2>
        <button className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
          All products
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center py-2 hover:bg-muted/50 rounded-md px-1 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-muted overflow-hidden mr-3">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex-grow mr-2">
              <h3 className="font-medium text-sm">{product.name}</h3>
              <span className={`text-xs ${product.status === 'active' 
                ? 'text-green-400 dark:text-green-400' 
                : 'text-red-400 dark:text-red-400'}`}
              >
                {product.status === 'active' ? 'Active' : 'Offline'}
              </span>
            </div>
            <div className="text-right">
              <p className="font-medium">${product.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
