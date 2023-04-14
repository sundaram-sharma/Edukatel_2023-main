import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/Trip1.jpg";
import Trip2 from "../assets/Trip2.jpg";
import Trip3 from "../assets/Trip3.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Our Services</h1>
      <p>Top notch education starts with modern technology</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Online Tuition"
          text="Edukatel's online tuition service brings learning to your fingertips, 
          allowing you to learn from the comfort of your own home or anywhere with 
          an internet connection. Our online platform connects you with experienced 
          and qualified teachers who are passionate about their subjects and are 
          dedicated to helping you achieve your academic goals. With our personalized 
          approach, you can learn at your own pace and schedule, getting the one-on-one 
          attention you need to excel in your studies. Our online tuition service is 
          perfect for students who prefer a flexible and convenient learning experience."
        />
        <TripData
          image={Trip2}
          heading="Home Tuition"
          text="Edukatel's home tuition service provides personalized learning in the 
          comfort of your own home. Our experienced and qualified teachers will come 
          to your home at a time that is convenient for you, ensuring that you get 
          the attention and support you need to excel in your studies. Our teachers 
          are trained to tailor their teaching approach to your individual learning 
          style, making sure that you get the most out of every lesson. Our home tuition 
          service is perfect for students who prefer a more intimate and personalized 
          learning experience."
        />
        <TripData
          image={Trip3}
          heading="Offline Tuition"
          text="Edukatel's offline tuition service offers personalized learning experiences 
          in our own and partnered centers. Our centers are equipped with modern facilities 
          and offer a comfortable and stimulating environment for learning. Our experienced 
          and qualified teachers are passionate about their subjects and are dedicated to 
          helping you achieve your academic goals. With our personalized approach, you can 
          learn at your own pace and schedule, getting the one-on-one attention you need to 
          excel in your studies. Our offline tuition service is perfect for students who prefer 
          a traditional classroom setting with the added benefit of personalized attention from 
          their educators."
        />
      </div>
    </div>
  );
}

export default Trip;
