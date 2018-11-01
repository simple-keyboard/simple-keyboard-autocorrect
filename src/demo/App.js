import Keyboard from 'simple-keyboard';
import autocorrect from '../lib/components/Autocorrect';

import 'simple-keyboard/build/css/index.css';
import './css/App.css';

class App {
  constructor(){
    document.addEventListener('DOMContentLoaded', this.onDOMLoaded);
    this.layoutName = "default";

    console.log("Loading huge word list");
  }

  onDOMLoaded = async () => {
    fetch('https://gist.githubusercontent.com/hodgef/aa18d6be966cc9d8cfe0e83d1320a0bc/raw/e545cb474c771b551728aa1057a7cd51b0b7db14/words.json').then(response => {
      return response.json();
    }).then(data => {

      this.keyboard = new Keyboard({
        onChange: input => this.onChange(input),
        onKeyPress: button => this.onKeyPress(button),
        newLineOnEnter: true,
        autocorrectDict: data,
        modules: [
          autocorrect
        ],
        onModulesLoaded: () => {
          document.querySelector(".spinner").classList.add("hide_spinner");
          console.log("Loaded!");
        },
        onAutocorrectPrediction: (word, prediction) => {
          console.log("Autocorrect:", word, prediction);
        }
      });
  
      /**
       * Adding preview (demo only)
       */
      document.querySelector('.keyboardContainer').insertAdjacentHTML('beforebegin', `
      <div class="simple-keyboard-preview">
        <textarea class="input"></textarea>
      </div>
      `);
  
      document.querySelector(".input").addEventListener("input", event => {
        this.keyboard.setInput(event.target.value);
      });
    
      console.log(this.keyboard);
    }).catch(err => {
      console.warn(err);
    });
  }

  handleShiftButton = () => {
    let layoutName = this.layoutName;
    let shiftToggle = this.layoutName = layoutName === "default" ? "shift" : "default";
  
    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  }

  onChange = input => {
    document.querySelector('.input').value = input;
  }

  onKeyPress = button => {
    console.log("Button pressed", button);
  
      /**
       * Shift functionality
       */
      if(button === "{lock}" || button === "{shift}")
        this.handleShiftButton();
  }

}

export default App;