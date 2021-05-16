import React from "react";

function Article() {
  return (
    <div className="container" style={{paddingTop: "1rem"}}>
      <div className="row gutter-sm justify-content-center gy-5">
        <div>
          <h2>What is a Brute Force Attack?</h2>
          <p>
            Below excerpt from {""}
            <a href="https://en.wikipedia.org/wiki/Brute-force_attack">
              Wikipedia
            </a>
            :
          </p>
        </div>
        <div className="text-center">
          <p>
            A brute-force attack consists of an attacker submitting many
            passwords or passphrases with the hope of eventually guessing a
            combination correctly. The attacker systematically checks all
            possible passwords and passphrases until the correct one is found.
            Alternatively, the attacker can attempt to guess the key which is
            typically created from the password using a key derivation function.
            This is known as an exhaustive key search.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Article;
