
import FuzzySet from 'fuzzyset.js';
import defaultWords from '../assets/words.json';
import SimpleKeyboard from "simple-keyboard";

class SimpleKeyboardAutocorrect extends SimpleKeyboard {
  constructor(...options){
    super(...options);

    this._moduleInit();
    delete this._moduleInit;
  }

  _moduleInit = () => {
    this.set = FuzzySet(this.options.words || defaultWords);

    this.registerModule(
      "autocorrect",
      (module) => {
        module.get = (string) => {
          return this.set.get(string);
        }
      }
    );
  }

  handleButtonClicked(button){
    let hotkey = this.options.autocorrectHotkey || "{space}";

    if(button === hotkey && !this.options.disableAutocorrectSetInput){
      let input = this.getInput();
      let inputWords = input.split(" ");

      if(inputWords) {
        let autocorrectedWord = this.modules.autocorrect.get(inputWords[inputWords.length - 1]);

        if(autocorrectedWord){
          let autocorrectedWordStr = autocorrectedWord[0][1];
          inputWords[inputWords.length - 1] = autocorrectedWordStr;
          this.setInput(inputWords.join(" "));
          this.utilities.updateCaretPos(autocorrectedWordStr.length);
        }
      }
    }

    super.handleButtonClicked(button);
  }
}

export default SimpleKeyboardAutocorrect;