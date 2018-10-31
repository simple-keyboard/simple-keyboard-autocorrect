import 'simple-keyboard';
import SimpleKeyboardAutocorrect from './Autocorrect';


it('Keyboard renders without crashing', () => {
  const div = document.createElement('div');
  
  div.className += "simple-keyboard";
  document.body.appendChild(div);

  let keyboard = new SimpleKeyboardAutocorrect({
    debug: true,
    onChange: input => input,
    onKeyPress: button => button,
    newLineOnEnter: true
  });
});