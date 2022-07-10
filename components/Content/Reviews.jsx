import { useReducer } from 'react';

import { getCertainReviews } from '@/utils/data-utils';
import { ReviewsContainer, StyledReview } from './Reviews.styled';
import { ReviewButton } from '@/components/UI/Buttons.styled';

const Reviews = ({ reviewsArray, ...props }) => {
  const areReviewsMany = reviewsArray.length > 2;
  const [showAll, setShowAll] = useReducer((state) => !state, false);
  const reviews = showAll ? reviewsArray : getCertainReviews(reviewsArray, 2);
  const buttonText = showAll ? 'Show less' : `See ${reviewsArray.length - 2} more reviews`;

  const reviewHandler = () => setShowAll();

  return (
    <ReviewsContainer {...props}>
      <h3>User Reviews</h3>
      {reviews.map((review) => {
        return (
          <StyledReview key={review.id}>
            <h5>
              {review.author} <span>says:</span>
            </h5>
            <p>{review.content}</p>
          </StyledReview>
        );
      })}
      {areReviewsMany && (
        <ReviewButton onClick={reviewHandler} title={buttonText}>
          {buttonText}
        </ReviewButton>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
