import { reviews } from "@/constants";
import { ReviewCard } from ".";

const CustomerReview = () => {
  return (
    <div className="pt-20 pb-20" id="reviews">
      <section className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold dark:text-white-400">
          What Our <span className="text-coral-red dark:text-dark-coral-red">Customers</span> Say?
        </h3>
        <p className="info-text text-center m-auto mt-4 max-w-lg dark:text-white-400">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review) => (
            <ReviewCard
              key={review.customerName}
              customerName={review.customerName}
              feedback={review.feedback}
              imgURL={review.imgURL}
              rating={review.rating}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CustomerReview;
