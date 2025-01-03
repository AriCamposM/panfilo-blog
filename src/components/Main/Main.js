import React from "react";
import Card from "../Card/Card";

//Contexts
import { AdminLogStatusContext } from "../../contexts/AdminLogStatusContext";

//Imagenes
import panfile from '../../images/panfile.jpg'
import panfileEdi from '../../images/panfile-edi.jpg'
import panfileFresa from '../../images/panfile-fresa.jpg'

const blogPosts = [
  {
    id: 1,
    title: "My First Carrot Adventure",
    date: "April 1, 2023",
    description: "Today, I discovered the most amazing carrot patch in the garden. The carrots were so orange and crunchy! I couldn't resist taking a little nibble...",
    image: panfile, // Placeholder image
    likes: 120,
    comments: [
      { id: 1, user: "BunnyLover", text: "So cute! I love hearing about your adventures!" },
      { id: 2, user: "CarrotFan", text: "Those carrots sound delicious! Lucky bunny!" }
    ],
  },
  {
    id: 2,
    title: "Hoppy Easter Celebrations",
    date: "April 9, 2023",
    description: "The humans decorated the house with colorful eggs, and I got to hop around and explore all the new sights and smells. It was egg-citing!",
    image: panfileEdi, // Placeholder image
    likes: 95,
    comments: [
      { id: 3, user: "EasterEnthusiast", text: "Happy Easter, Fluffy! Looks like you had a great time!" },
      { id: 4, user: "BunnyMom", text: "Be careful not to eat any chocolate eggs, sweetie!" }
    ],
  },
  {
    id: 3,
    title: "Panfilo FRESITA",
    date: "April 15, 2023",
    description: "I found the perfect sunny spot for my afternoon nap. The warm sunbeams felt so good on my fur, and I dozed off into bunny dreamland...",
    image: panfileFresa, // Placeholder image
    likes: 150,
    comments: [
      { id: 5, user: "SleepyBunny", text: "Naps in the sun are the best! So relaxing." },
      { id: 6, user: "GardenLover", text: "Your fur looks so soft and shiny in the sunlight!" }
    ],
  },
];


function Main ({clickImage, openAddPostModal}) {
    
  const isAdminTrue = React.useContext(AdminLogStatusContext)

    return(
        <main className="container mx-auto px-4 py-8 max-w-2xl">
            <div className="space-y-8" >
            {isAdminTrue && (
          <div className="mb-8">
            <button
              onClick={openAddPostModal}
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300"
            >
              Add Post
            </button>
          </div>
        )}
                 
                {blogPosts.map((post) => (
                    <Card key={post.id} 
                    post={post}
                    clickImage={clickImage}
                    />
                ))}
            </div>
        </main>
    )
}

export default Main;