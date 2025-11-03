import React from 'react';

export const Saqlanganlar = () => {

  const StarIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-400 fill-orange-400" viewBox="0 0 24 24">
      <path d="M12 .587l3.668 7.568L24 9.748l-6 5.854L19.335 24 12 19.897 4.665 24 6 15.602 0 9.748l8.332-1.593z"/>
    </svg>
  );

  const TrashIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 6h18"/>
      <path d="M8 6V4h8v2"/>
      <path d="M19 6l-1 14H6L5 6"/>
      <path d="M10 11v6"/>
      <path d="M14 11v6"/>
    </svg>
  );

  const books = [
    { id: 1, title: "Элжеренга аталган гуллар", author: "SIYOSAT, FANTASTIKA", rating: 4.7, chapters: 244 },
    { id: 2, title: "Элжеренга аталган гуллар", author: "SIYOSAT, FANTASTIKA", rating: 4.7, chapters: 244 }
  ];

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border-4 border-blue-500 p-8">
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Сақланганлар</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {books.map((book) => (
              <div key={book.id} className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition">

                <div className="shrink-0 w-32 h-44 bg-green-100 rounded-lg shadow-md flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-green-700 text-xs">ЭДИБИЯТ</p>
                    <p className="text-green-800 font-bold text-2xl">КИЗ</p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{book.title}</h3>
                    <p className="text-blue-600 text-sm mb-3">{book.author}</p>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1">
                        {StarIcon}
                        <span className="text-orange-500 font-bold text-lg">{book.rating}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{book.chapters} фиқлар</span>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                    {TrashIcon}
                    Ўчириш
                  </button>

                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
