import styles from "./Book.module.css";

const Book = (props) => {
  const calculatedWidth = props.width * 0.1;
  const widthInPixels = calculatedWidth + "px";

  return (
    <div className={styles.book} style={{ width: widthInPixels }}>
      <p>{props.text}</p>
    </div>
  );
};

export default Book;
