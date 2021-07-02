import {useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './App.css';


function App() {
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div>
      <section>
        <p>
          We’re still assembling the full menu. Until the presentation shines brilliantly, send us an email to speak about employer branding, content marketing, and making your tech products lovable.
        </p>


        <CopyToClipboard text="hi@unusualsour.com" onCopy={onCopyText}>
          <p className="mail">{isCopied ? "Copied!" : "hi@unusualsour.com"}</p>
        </CopyToClipboard>
      </section>
    </div>
  );
}

export default App;
