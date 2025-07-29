import { useState } from "react";
import SectionHeaders from "../../components/SectionHeaders/SectionHeaders";
import User from "../../assets/user.svg";
import Rating from "../../components/Rating/Rating";
import Button from "../../components/Button/Button";
import "./Review.css"

const Review = () => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        review: '',
        rating: 5
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRatingChange = (rating) => {
        setFormData(prev => ({
            ...prev,
            rating: rating
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSubmitted(true);
            // Reset form after successful submission
            setFormData({
                name: '',
                title: '',
                review: '',
                rating: 5
            });
        } catch (error) {
            console.error('Error submitting review:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setIsSubmitted(false);
        setFormData({
            name: '',
            title: '',
            review: '',
            rating: 5
        });
    };

    return (
        <div id="review" className="review-container">
            <SectionHeaders heading="What Clients Say" subheading={`Problems trying to resolve the conflict between \\\\n the two major realms of Classical physics: Newtonian mechanics `} />

            {/* Existing client testimonial */}
            <div className="client-review">
                <img src={User} alt="client review"/>
                <SectionHeaders subheading={`Slate helps you see how many more days you need \\\\n to work to reach your financial goal for the month and year.`} />
                <Rating value={4} readOnly={true} />
                <h3 className="client-name">Regina Miles</h3>
                <p className="client-title">Designer</p>
            </div>

            {/* Review submission section */}
            <div className="review-submission-section">
                <SectionHeaders
                    heading="Share Your Experience"
                    subheading="We'd love to hear about your experience with our services"
                />

                {isSubmitted ? (
                    <div className="review-confirmation">
                        <div className="confirmation-content">
                            <div className="success-icon">✓</div>
                            <h3>Thank You!</h3>
                            <p>Your review has been submitted successfully. We appreciate your feedback!</p>
                            <Button primary medium onClick={resetForm}>
                                Submit Another Review
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="review-form-container">
                        <form onSubmit={handleSubmit} className="review-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Your Title/Role"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="review"
                                    placeholder="Share your experience with our services..."
                                    value={formData.review}
                                    onChange={handleInputChange}
                                    rows="4"
                                    required
                                />
                            </div>

                            <div className="form-group rating-group">
                                <label>Rate your experience:</label>
                                <Rating
                                    value={formData.rating}
                                    onChange={handleRatingChange}
                                />
                            </div>

                            <Button
                                type="submit"
                                primary
                                medium
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Review'}
                            </Button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Review