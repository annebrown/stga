import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { paragraph } = feature;
  return (
    <div className="">
      <div className="bg-green-600 rounded-lg">
        <p className="text-base font-medium leading-relaxeds text-white p-5">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
