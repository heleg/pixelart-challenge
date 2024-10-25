import s from "./App.module.css";
import Goals from "./Goals.tsx";
import images from "./images.json";
import clsx from "clsx";

function App() {
  return (
    <div className={s.container}>
      <h1>Everyday Pixel Art</h1>
      <Goals />
      {images.map(({ image, description, size, scale }) => (
        <div
          key={image}
          className={clsx(s.imageContainer, "nes-container with-title")}
        >
          <p className="title">{description}</p>

          <img
            width={size[0] * scale}
            height={size[1] * scale}
            src={`images/${image}`}
            alt={description}
            className={s.image}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
