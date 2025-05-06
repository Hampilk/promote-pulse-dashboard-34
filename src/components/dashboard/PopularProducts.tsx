
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { RoundedBadge } from '@/components/ui/rounded-badge';

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
  ];

  return (
    <Card className="border shadow-sm h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <h3 className="font-medium text-lg">Popular Products</h3>
        <button className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
          All products
          <ChevronRight className="h-4 w-4" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="flex items-center py-2 hover:bg-muted/50 rounded-md px-2 transition-colors cursor-pointer">
              <div className="h-10 w-10 rounded-lg bg-muted overflow-hidden mr-3 flex-shrink-0">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex-grow mr-2">
                <h3 className="font-medium text-sm">{product.name}</h3>
                <p className="text-sm font-medium">${product.price.toLocaleString()}</p>
              </div>
              <RoundedBadge variant={product.status === 'active' ? 'success' : 'warning'}>
                {product.status === 'active' ? 'Active' : 'Offline'}
              </RoundedBadge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PopularProducts;
