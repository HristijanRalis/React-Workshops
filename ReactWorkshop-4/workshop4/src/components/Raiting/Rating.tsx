type Props = {
  stars: number;
};

export const Rating = ({ stars }: Props) => {
  return (
    <>
      {[...Array(stars)].map((_, index) => (
        <i key={`rating-${index}`} className="fa fa-star"></i>
      ))}
    </>
  );
};
