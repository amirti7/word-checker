# Word Checker

A simple React application that lets users input a 5-letter word using an on-screen keyboard, and checks if the word exists in the English dictionary.

## Features

- **On-screen Keyboard**: Clickable QWERTY keyboard for input.
- **Word Input**: Letters appear in squares as you click keys. Max 5 letters.
- **Backspace & Enter**: Remove letters or submit the word.
- **Word Validation**: Uses an external API to check if the word exists in the English dictionary.
- **Visual Feedback**: Squares turn green if the word is valid, red if not.
- **Loader**: Shows a loader while checking the word.
- **Component Structure**: Clean separation of components and styles.
- **Custom Action Listener**: Keyboard actions are handled via a custom event system (`MyActionListener`).

## Tools & Technologies

- **React**: Functional components and hooks for UI and state management.
- **useRef**: For persistent, mutable references (used for the action listener instance).
- **External API**: [dictionaryapi.dev](https://dictionaryapi.dev/) for word validation.
- **CSS Modules**: For component-specific styling.

## File Structure

```
src/
  components/
    Keyboard.js
    Squares.js
  styles/
    App.css
    Keyboard.css
    Squares.css
  utils/
    MyActionListener.js
    dictionary.js
  App.js
  index.js
```

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Notes
- The app is fully responsive and works in modern browsers.
- All keyboard actions are handled via a custom event system for flexibility and decoupling.
- The word check uses a free public API; network issues may affect validation.

---
Feel free to explore, modify, and extend the project!
