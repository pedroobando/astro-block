import confetti from 'canvas-confetti';

export const ConfettiPress = () => {
  const onClickPress = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <button
      onClick={onClickPress}
      style={{
        padding: '6px 14px',
        border: 'solid 0.6px',
        borderRadius: '10px',
        backgroundColor: '#1fd6c2',
        fontSize: '1.1em',
      }}
    >
      Presione
    </button>
  );
};
