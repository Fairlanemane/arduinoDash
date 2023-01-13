import React from 'react';
const styles={
    image:{
        margin:"5px", 
        borderRadius:"10px"
    }

}

function Gallery() {
  return (
    <div>
 
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Gallery
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div>

            <img style={styles.image} src='https://media.istockphoto.com/id/1292627391/photo/porcini-mushrooms.jpg?b=1&s=170667a&w=0&k=20&c=gE4yuPJXlL07Eo_F8J48v2tws97ShfT4hUxqNM4bC5M=' alt="mushroom"/>
            <img style={styles.image} src='https://media.istockphoto.com/id/1292627391/photo/porcini-mushrooms.jpg?b=1&s=170667a&w=0&k=20&c=gE4yuPJXlL07Eo_F8J48v2tws97ShfT4hUxqNM4bC5M='/>
            <img style={styles.image} src='https://media.istockphoto.com/id/1292627391/photo/porcini-mushrooms.jpg?b=1&s=170667a&w=0&k=20&c=gE4yuPJXlL07Eo_F8J48v2tws97ShfT4hUxqNM4bC5M='/>
            <img style={styles.image} src='https://media.istockphoto.com/id/1292627391/photo/porcini-mushrooms.jpg?b=1&s=170667a&w=0&k=20&c=gE4yuPJXlL07Eo_F8J48v2tws97ShfT4hUxqNM4bC5M='/>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
    </div>
  );
}

export default Gallery;