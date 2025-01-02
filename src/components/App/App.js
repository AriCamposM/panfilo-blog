import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupImage from '../PopupImage/PopupImage';


function App() {

  const [expandedComments, setExpandedComments] = React.useState(null);
  const [selectedPost, setSelectedPost] = React.useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const [newComment, setNewComment] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // This should be managed by your auth system

  const toggleComments = (postId) => {
    setExpandedComments(expandedComments === postId ? null : postId);
  };
 
  const clickImage = (post) =>{
    setSelectedPost(post);
  }

  const closeImage = () =>{
    setSelectedPost(null);
  }

  return (
    <div className="min-h-screen bg-pink-50">
      <Header />
      <Main clickImage={clickImage}  />
      {selectedPost && (<PopupImage selectedPost={selectedPost} closeImage={closeImage} />)}
      <Footer/>
    </div>
  );
}

export default App;
