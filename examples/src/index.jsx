import React from 'react';
import { render } from 'react-dom';
import SpeechSynthesisExample from './useSpeechSynthesis';
import SpeechRecognitionExample from './useSpeechRecognition';
import {
  GlobalStyles,
  Row,
  GitLink,
  Title
} from './shared';
import gh from './images/github.png';

const App = () => (
  <div>
    <GlobalStyles />
    <Title>
      {'CIP Speech Kit Demo, by Marvin, Trust in Digital Data!'}
      <span role="img" aria-label="microphone">
        🎤
      </span>
    </Title>
    <Row>
      <SpeechRecognitionExample />
      <SpeechSynthesisExample />
    </Row>
    <GitLink>
      <img alt="Github" src={gh} />
      <a href="https://github.com/cip-core-mirrors/react-speech-kit">
        By CIP Professional Services Team
      </a>, based on <a href="https://github.com/MikeyParton/react-speech-kit"> Mikey Parton's excellent work.</a>
    </GitLink>
  </div>
);

render(<App />, document.getElementById('root'));
