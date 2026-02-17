function TextArea({ text, setText, charLimit }) {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const isOverLimit = text.length > charLimit;

  return (
    <div>
      <textarea value={text} onChange={handleChange} rows={6} cols={60} />

      {isOverLimit && (
        <p style={{ color: "red" }}>
          Limit reached! Your text exceeds {charLimit} characters.
        </p>
      )}
    </div>
  );
}

export default TextArea;
