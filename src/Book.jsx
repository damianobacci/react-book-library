import styles from "./Book.module.css";

const Book = (props) => {
  const calculatedWidth = Math.max(45, props.width * 0.15);
  const widthInPixels = calculatedWidth + "px";

  return (
    <div className={styles.book} style={{ "--book-width": widthInPixels }}>
      <p>{props.text}</p>
    </div>
  );
};

export default Book;
