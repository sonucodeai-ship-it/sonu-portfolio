export default function RobotSpeechBubble({ message }) {
  return (
    <div className="robot-speech" aria-live="polite" key={message.id}>
      <div className="robot-speech-topline">
        <span className="speech-avatar" aria-hidden="true">R</span>
        <span className="speech-eyebrow">
          <i /> {message.title}
        </span>
        <span className="speech-live">LIVE</span>
      </div>
      <p>{message.text}</p>
      <span className="speech-bottom-line" aria-hidden="true">
        <span />
      </span>
    </div>
  );
}
