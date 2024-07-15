import SingleItemDetail from "./SingleItemDetail";

const ItemInfo = () => {
    const sampleItem = {
      image: '["https://i.imgur.com/QkIa5tT.jpeg"]',
      title: 'Sample Item',
      price: 29.99,
      rating: 4,
      description: 'This is a sample item description.',
      sizes: ['S', 'M', 'L', 'XL'],
    };
  
    return (
      <div>
        <SingleItemDetail item={sampleItem} />
      </div>
    );
  };
  
  export default ItemInfo;