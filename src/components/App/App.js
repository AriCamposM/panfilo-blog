import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupImage from '../PopupImage/PopupImage';
import AuthModal from '../AuthModal/AuthModal';
import AddPostModal from '../AddPostModal/AddPostModal';
import { UserLogStatusContext } from '../../contexts/UserLogStatusContext';
import { AdminLogStatusContext } from '../../contexts/AdminLogStatusContext';


function App() {

  const [expandedComments, setExpandedComments] = React.useState(null);
  const [selectedPost, setSelectedPost] = React.useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const [newComment, setNewComment] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // This should be managed by your auth system
  const [isAdminTrue, setIsAdminTrue] = React.useState(true); 
  const [isAddPostModalOpen , setIsAddPostModalOpen]= React.useState(false) 
  
  const toggleComments = (postId) => {
    setExpandedComments(expandedComments === postId ? null : postId);
  };
 
  const clickImage = (post) =>{
    setSelectedPost(post);
  }

  const closeImage = () =>{
    setSelectedPost(null);
  }

  const openAuthModal = () =>{
    setIsAuthModalOpen(true)
  }

  const closePopups = () =>{
    setSelectedPost(null);
    setIsAuthModalOpen(false)
    setIsAddPostModalOpen(false)
  }

  const closeAuthModal = () =>{
    setIsAuthModalOpen(false)
  }

  const LogOutClick = () => {
    setIsLoggedIn(false);
    setIsAuthModalOpen(false)
  }

  const openAddPostModal = () => {
    setIsAddPostModalOpen(true)
  }


  
  return (
    <div className="min-h-screen bg-pink-50">
      <UserLogStatusContext.Provider value={isLoggedIn}>
      <AdminLogStatusContext.Provider value={isAdminTrue}> 
        <Header openAuthModal={openAuthModal} />
        {isAuthModalOpen && <AuthModal closePopups={closePopups} LogOutClick={LogOutClick}/>}
        {isAddPostModalOpen && <AddPostModal closePopups={closePopups} />}
        <Main clickImage={clickImage} openAddPostModal={openAddPostModal}  />
        {selectedPost && (<PopupImage selectedPost={selectedPost} closePopups={closePopups} />)}
        <Footer/>
      </AdminLogStatusContext.Provider>
      </UserLogStatusContext.Provider>
    </div>
  );
}

export default App;
