import { ReviewsContainer, StyledReview } from './Reviews.styled';

const Reviews = ({ reviewsArray }) => {
  return (
    <ReviewsContainer>
      <h3>User Reviews</h3>
      {reviewsArray.map((review) => {
        return (
          <StyledReview key={review.id}>
            <h5>
              {review.author} <span>says:</span>
            </h5>
            <p>{review.content}</p>
          </StyledReview>
        );
      })}
    </ReviewsContainer>
  );
};

export default Reviews;
