import React, { useState } from 'react';
import logo from './logo.svg';
import './bootstrap.css'
import './album.css'
import Header from './header';
import { MainSection }from './MainSection';
import { Card } from './Card';

function App() {
  let [cardsDescriptions, setCardDescriptions] = useState<string[]>([]);

   return <>
      <Header />
      <main role="main">
        <MainSection onAddCard={description => { setCardDescriptions(cardsDescriptions.concat([description]))}}/>

        <div className="album py-5 bg-light">
          <div className="container">

            <div className="row">
              {cardsDescriptions.map(d => <Card description={d} />)}
            </div>
          </div>
        </div>

      </main>

      <footer className="text-muted">
        <div className="container">
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
          <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
          <p>New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read our <a href="../getting-started/introduction/">getting started guide</a>.</p>
        </div>
      </footer>
    </>  
}

export default App;
