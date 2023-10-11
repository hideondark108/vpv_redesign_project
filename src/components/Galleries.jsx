import { Gallery } from "../constants";
import styles from "../style";

const Galleries = () => {
  return (
    <section>
      <div className="mb-4">
        <h1 className={`${styles.heading2_black} ${styles.flexCenter}`}>
          Gallery
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 gap-5">
          {Gallery.map((gallery) => (
            <div key={gallery.id}>
              <img
                src={gallery.imageUrl}
                alt={gallery.title}
                className="w-full h-32 sm:h-80 object-cover border-2 border-sky-500"
              />
              <h3
                className={`${styles.flexCenter} text-xl font-medium m-2 text-sky-800`}
              >
                {gallery.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-10" />
    </section>
  );
};

export default Galleries;
