import Keyboard from 'simple-keyboard';
import SimpleKeyboardAutocorrect from '../src/index';

test('Runs without crashing', () => {
  const div = document.createElement('div');
  
  div.className = "simple-keyboard";
  document.body.appendChild(div);

  new Keyboard({
    debug: true,
    onChange: input => input,
    onKeyPress: button => button,
    newLineOnEnter: true,
    autocorrectDict: ["dog", "house"],
    modules: [
      SimpleKeyboardAutocorrect
    ]
  });
});

it('Keyboard disableButtonHold will work', () => {
  const div = document.createElement('div');
  
  div.className = "simple-keyboard";
  document.body.appendChild(div);

  let keyboard = new Keyboard({
    debug: true,
    onChange: input => input,
    onKeyPress: button => button,
    newLineOnEnter: true,
    useMouseEvents: true,
    autocorrectDict: ["dog", "house"],
    modules: [
      SimpleKeyboardAutocorrect
    ]
  });

  console.log(keyboard.getButtonElement("o"));

  keyboard.getButtonElement("d").onclick();
  keyboard.getButtonElement("o").onclick();
  keyboard.getButtonElement("{space}").onclick();
  keyboard.getButtonElement("{bksp}").onclick();

  expect(keyboard.getInput()).toBe("dog");
});
