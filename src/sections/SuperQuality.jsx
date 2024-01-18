import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          Premium <span className="text-emerald-600">plants</span> only, no
          compromises
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          We cooperate with carefully selected, experienced and trustworthy
          breeders to provide you the only the best and the healthiest plants
          that you can find in any online shop.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to quality and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain rounded-full"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
