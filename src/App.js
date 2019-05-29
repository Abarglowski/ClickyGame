import React from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron"
import Clicky from "./components/Clicky"
import ClickyImages from "./components/images/ClickyImages"
import img from './img.json';
import Score from "./components/Score"

class App extends React.Component {
  state = {
    imglist : img,
    id: img.id,
    clicked: false,
    score: 0,
    highScore: 0
  };

  handleClick = imgID =>{
    const imgArr = [...this.state.imglist]

    var isClicked = false
  console.log(imgID);
    imgArr.forEach(img =>{
      if(img.id === imgID){
        if(!img.clicked){
          isClicked = true
          img.clicked = true
        }
      }
    })

    if(isClicked){
      this.setState({
        score: this.state.score + 1,
        imglist: this.state.imglist.sort(() => 0.5 - Math.random())
      });
    }
    else{
      imgArr.forEach(img => {
        img.clicked = false
      })
      alert("Sorry you selected a hero twice, you lose!")
      this.setState({
        score: 0,
        imglist: this.state.imglist.sort(() => 0.5 - Math.random())
      })
    }
    if(this.state.score === this.state.imglist.length) {
      alert("You have won!");
      this.setState({
        clicked : false,
        score : 0
      })
    }
    if(this.state.score >= this.state.highScore){
      this.setState({
        highScore: this.state.score
      })
    }
}

  render() {
    return (
      <div>
      <Jumbotron />
      <Score highScore={this.state.highScore} score={this.state.score}/>
      <Clicky>
      {this.state.imglist.map(img =>{
        return(
          <ClickyImages 
          key={img.id}
          id={img.id}
          image={img.image}
          handleClick={this.handleClick}
          />
        )
      })}
      </Clicky>
      </div>
    );
  }
}

export default App;
