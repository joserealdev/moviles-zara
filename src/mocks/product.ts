import { CartProduct } from '@/types/cart';
import { ListProduct, Product } from '@/types/product';

export const mockProduct: ListProduct = {
  id: 'SMG-S24U',
  brand: 'Samsung',
  name: 'Galaxy S24 Ultra',
  basePrice: 1329,
  imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-violet.png',
};

export const getMockProductArray = (length: number): ListProduct[] =>
  Array(...Array(length)).map((_, i) => ({ ...mockProduct, id: `${mockProduct.id}_${i}` }));

export const mockFullProduct: Product = {
  id: 'SMG-S24U',
  brand: 'Samsung',
  name: 'Galaxy S24 Ultra',
  description:
    'El Samsung Galaxy S24 Ultra es un smartphone de gama alta con una pantalla Dynamic AMOLED 2X de 6.8 pulgadas, procesador Qualcomm Snapdragon 8 Gen 3 for Galaxy, y un avanzado sistema de cámara con inteligencia artificial.',
  basePrice: 1329,
  rating: 4.6,
  specs: {
    screen: '6.8" Dynamic AMOLED 2X',
    resolution: '3120 x 1440 pixels',
    processor: 'Qualcomm Snapdragon 8 Gen 3 for Galaxy Octa-Core',
    mainCamera:
      '200 MP (F1.7) Principal, OIS + 10 MP (F2.4) Zoom x3, OIS + 12 MP (F2.2) Ultra gran angular + 50 MP (F3.4) Zoom x5, OIS',
    selfieCamera: '12 MP',
    battery: '5000 mAh',
    os: 'Android 14',
    screenRefreshRate: '120 Hz',
  },
  colorOptions: [
    {
      name: 'Titanium Violet',
      hexCode: '#8E6F96',
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-violet.png',
    },
    {
      name: 'Titanium Black',
      hexCode: '#000000',
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-black.png',
    },
    {
      name: 'Titanium Gray',
      hexCode: '#808080',
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-gray.png',
    },
    {
      name: 'Titanium Yellow',
      hexCode: '#FFFF00',
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-yellow.png',
    },
  ],
  storageOptions: [
    {
      capacity: '256 GB',
      price: 1229,
    },
    {
      capacity: '512 GB',
      price: 1329,
    },
    {
      capacity: '1 TB',
      price: 1529,
    },
  ],
  similarProducts: [
    {
      id: 'XMI-RN13P5G',
      brand: 'Xiaomi',
      name: 'Redmi Note 13 Pro 5G',
      basePrice: 399,
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XMI-RN13P5G-midnight-black.png',
    },
    {
      id: 'SMG-A15',
      brand: 'Samsung',
      name: 'Galaxy A15 LTE',
      basePrice: 159,
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A15-azul.png',
    },
    {
      id: 'SMG-A25',
      brand: 'Samsung',
      name: 'Galaxy A25 5G',
      basePrice: 239,
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A25-negro.png',
    },
    {
      id: 'MTO-G24',
      brand: 'Motorola',
      name: 'g24',
      basePrice: 119,
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/MTO-G24-gris.png',
    },
    {
      id: 'XMI-R13C',
      brand: 'Xiaomi',
      name: 'Redmi 13C',
      basePrice: 149,
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XMI-R13C-navy-blue.png',
    },
    {
      id: 'OPP-R12FS',
      brand: 'OPPO',
      name: 'Reno 12 FS 4G',
      basePrice: 299,
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-R12FS-amber-orange.png',
    },
  ],
};

export const cartProductMock: CartProduct = {
  uuid: '826c768c-bfad-450f-9fc4-c5850e362af1',
  name: 'Galaxy S24 Ultra',
  storage: '256 GB',
  price: 1229,
  color: 'Titanium Black',
  imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-black.png',
};
