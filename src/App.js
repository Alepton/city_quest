import logo from "./logo.svg";
import "./App.css";

import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/profile' render={ () => <Profile state={props.appState.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} /> } />
          <Route path='/dialogs' render={ () => <Dialogs state={props.appState.dialogsPage} />} />
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/settings' render={ () => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
