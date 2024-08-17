import { FC, HTMLAttributes } from "react";
import { Container, Title, Cards } from "./styles";
import CustomersSayCard from "../CustomersSayCard";

const CustomersSay: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Title>Our customer Reviews</Title>
      <Cards>
        <CustomersSayCard
          rating={5}
          
          customerName="Rabi"
          testimonial="I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!"
        />
        <CustomersSayCard
          rating={4}
         
          customerName="John"
          testimonial="I went to the restaurant with my family and we were very pleased with everything. The food was wonderful and the atmosphere was very cozy. I highly recommend it!"
        />
        <CustomersSayCard
          rating={3}
         
          customerName="Bran"
          testimonial="I have been to many restaurants, but this one certainly stood out. The quality of the ingredients and the preparation of the dishes were impeccable. Not to mention the presentation, which was beautiful. It was an amazing dining experience!"
        />
        <CustomersSayCard
          rating={5}
          
          customerName="Ned"
          testimonial="The restaurant has a great variety of dishes and all the ones I tried were excellent. In addition, the price is fair and the service is very attentive. I will definitely recommend it to my friends."
        />
      </Cards>
    </Container>
  );
};

export default CustomersSay;