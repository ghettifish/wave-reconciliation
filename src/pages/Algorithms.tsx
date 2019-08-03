import React, { useState } from "react";

//This is where I will define my Algorithms

const Index = () => (
  <>
    <h1>Algorithms</h1>

    <h2>Helpful Tips</h2>
    <ul>
      <li>
        <h3>Understand The Problem</h3>
        <p>Questions:</p>
        <ol>
          <li>Can you restate the problem in your own words?</li>
          <li>What are the inputs that go into the problem?</li>
          <li>What are the outputs?</li>
          <li>
            Can the outputs be determined from the inputs. Can you get the
            outputs just from the inputs?
          </li>
        </ol>
      </li>
      <li>
        <h3>Example Problem</h3>
        <strong>
          Write a function that takes two numbers and returns their sum
        </strong>
        <CharCounter />
        {
          //Write a function that takes two numbers and returns their sum.
          // Implment Addition
          // What are the inputs?
          // ints? floats? large numbers?
          // What are the outputs?
          // ints? Floats? string?
          //How should I label the important pieces of data?
        }
      </li>
      <li />
      <li />
      <li />
    </ul>
  </>
);
export default Index;

interface CharCounterObj {
  [key: string]: { val: number };
}
const CharCounter = () => {
  const [input, setInput] = useState("");
  const [characterCount, setCharacterCount] = useState({} as CharCounterObj);

  const countChars = (string: string) => {
    setInput(string);
    setCharacterCount(charcount(string));
  };
  return (
    <div>
      <label>Enter a phrase</label>
      <input
        type="text"
        value={input}
        onChange={event => countChars(event.target.value)}
      />
      <div>
        <h4>Output:</h4>
        <ul>
          {Object.keys(characterCount).map(function(key) {
            return (
              <li key={"object_"+key}>
                <strong>
                  {key}: {characterCount[key]}
                </strong>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
charcount("aaaa");
// Shoulr return a: 4

charcount("12aa");
// Should return
/* {
    1: 1
    2: 2
    a: 2
 }*/

function charcount(str: string) {

  const isAlphaNumeric = (x: string) => {
    const code = x.charCodeAt(0);
    return !(
            !(code > 47 && code < 58) && // Numbers
            !(code > 64 && code < 91) && // Uppercase
            !(code > 96 && code < 123)   // Lowercase
    )
  }
  const output: any = {};

  const arrayFromString: string[] = str.toLowerCase().split("");

  arrayFromString.forEach((x) => {
    if(isAlphaNumeric(x)) {
      output[x] = ++output[x] || 1;
    }
  });
  //if the char is number/letter and Not in the obj, add it with a val of 1
  //if character is something else, don't do anything
  // return object at end

  return output;
}
