import ReviewCard from "../components/ReviewCard";
import { config } from "../lib/config";
import { tips } from "../lib/tips";

export default function Page() {
  return (
    <ReviewCard
      businessName={config.businessName}
      reviewLink={config.reviewLink}
      tagline={config.tagline}
      tips={tips}
    />
  );
}
