import MaxWidthWrapper from "./MaxWidthWrapper";

const Reviews = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden="true"
        src="/what-people-are-buying.png"
        className="absolute select-none hidden xl:block -left-32 top-1/3"
        alt=""
      />
    </MaxWidthWrapper>
  );
};

export default Reviews;
