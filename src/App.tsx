import clsx from "clsx";
import { Tooltip } from "react-tooltip";
import s from "./App.module.css";
import Goals from "./Goals.tsx";
import images from "./images.json";

function App() {
  return (
    <div className={s.container}>
      <h1>Everyday Pixel Art</h1>
      <Goals />

      <div className={clsx(s.imageContainer)}>
        {images.map(({ variants, description, size, scale, background }) => {
          return variants.map((image) => (
            <div
              key={image}
              style={{
                backgroundColor: background ?? undefined,
              }}
            >
              <img
                data-tooltip-id={image}
                data-tooltip-content={description}
                key={image}
                width={size[0] * scale}
                height={size[1] * scale}
                src={`/images/${image}`}
                alt={description}
                className={s.image}
              />
              <Tooltip id={image} />
            </div>
          ));
        })}
      </div>
    </div>
  );
}

export default App;
