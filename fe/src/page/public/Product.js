import React from 'react';
import { Sidebar } from '../../component';

const data = [
  {
    id: 1,
    img: 'https://matpetfamily.com/wp-content/uploads/2023/09/c7cadcd7b7d2628c3bc3-e1694153315563-270x270.jpg',
    name: 'Poodle nâu dễ thương',
    gia: '10.000.000',
  },
  {
    id: 2,
    img: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
    name: 'Poodle nâu dễ thương',
    gia: '10.000.000',
  },
  {
    id: 3,
    img: 'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/378081409_852922006203709_947746487416276016_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_ohc=QXdkoKNyLHkAX-5U4_z&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCsWLg27qqu9igveO1Ztef1IVSpRSeMDDfR-hMtNlYufQ&oe=650483C6',
    name: 'Poodle nâu dễ thương',
    gia: '10.000.000',
  },
  {
    id: 4,
    img: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/375055729_851480609681182_7079421094298647830_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=__TLO2NK-aAAX--k7jV&_nc_ht=scontent.fdad3-3.fna&oh=00_AfCqjmTmFYGxHlruYjhnImMDs_hRRG-u2-X-D-4JLslx9Q&oe=65055757',
    name: 'Poodle nâu dễ thương',
    gia: '10.000.000',
  },
  {
    id: 5,
    img: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/375055729_851480609681182_7079421094298647830_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=__TLO2NK-aAAX--k7jV&_nc_ht=scontent.fdad3-3.fna&oh=00_AfCqjmTmFYGxHlruYjhnImMDs_hRRG-u2-X-D-4JLslx9Q&oe=65055757',
    name: 'Poodle nâu dễ thương',
    gia: '10.000.000',
  },
  {
    id: 6,
    img: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/375055729_851480609681182_7079421094298647830_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=__TLO2NK-aAAX--k7jV&_nc_ht=scontent.fdad3-3.fna&oh=00_AfCqjmTmFYGxHlruYjhnImMDs_hRRG-u2-X-D-4JLslx9Q&oe=65055757',
    name: 'Poodle nâu dễ thương',
    gia: '10.000.000',
  },
];
const Product = () => {
  return (
    <div className="w-[92%] mx-auto flex flex-row">
      <div className="w-1/3 border-2">
        <Sidebar />
      </div>
      <div className="w-full">
        <div className="grid grid-cols-3 gap-y-6 px-4 py-8">
          {data.map((item) => {
            return (
              <div className="border-2 rounded-3xl flex flex-col justify-start mx-4">
                <img
                  src={item.img}
                  alt=""
                  key={item.id}
                  className="object-cover w-full h-[380px] rounded-3xl"
                />
                <div>
                  <h1
                    className="text-2xl font-bold mt-6
                  "
                  >
                    {item.name}
                  </h1>
                  <p className="text-blue-500 text-xl">{item.gia}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
