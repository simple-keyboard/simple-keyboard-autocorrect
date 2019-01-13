import Keyboard from 'simple-keyboard';
import autocorrect from '../lib/components/Autocorrect';

import 'simple-keyboard/build/css/index.css';
import './css/App.css';

class App {
  constructor(){
    document.addEventListener('DOMContentLoaded', this.onDOMLoaded);
    this.layoutName = "default";

    console.log("Loading word list (Can take a while)");
  }

  longList = 'https://gist.githubusercontent.com/hodgef/aa18d6be966cc9d8cfe0e83d1320a0bc/raw/e545cb474c771b551728aa1057a7cd51b0b7db14/words.json';
  shortList = 'https://gist.githubusercontent.com/hodgef/91f5056473b82fd85ba5447a3a3416a7/raw/6d044abcddb14462f6068b7aa3e3610c2896c872/words_short.json';

  onDOMLoaded = async () => {
    fetch(this.shortList).then(response => {
      return response.json();
    }).then(data => {

      this.keyboard = new Keyboard({
        onChange: input => this.onChange(input),
        onKeyPress: button => this.onKeyPress(button),
        //disableAutocorrectSetInput: true,
        autocorrectHotkey: "{enter}",
        autocorrectDict: data,
        modules: [
          autocorrect
        ],
        onModulesLoaded: () => {
          document.querySelector(".spinner").classList.add("hide_spinner");
          console.log("Loaded", data);
        },
        onAutocorrectPrediction: (word, prediction) => {
          console.log("Autocorrect:", word, prediction);
          if(this.keyboard){
            document.querySelector(".input").value = this.keyboard.getInput();
          }
        }
      });
  
      /**
       * Adding preview (demo only)
       */
      document.querySelector('.keyboardContainer').insertAdjacentHTML('beforebegin', `
      <div class="simple-keyboard-preview">
        <textarea class="input" placeholder="Type 'pizzer' and press Enter"></textarea>
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