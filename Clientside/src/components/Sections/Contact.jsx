import React from "react";
import Colors from "src/views/theme/colors/Colors";
import styled from "styled-components";

// Assets
import ContactImg1 from "../../assets/img/contact1.jpg";
import ContactImg2 from "../../assets/img/contact2.jpg";
import ContactImg3 from "../../assets/img/contact.jpg";


export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="blueBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold lightColor">Let's get in touch</h1>
            <p className="font20 lightColor">
              We will contact you in the shortest time.
              <br />
              Monday to Friday 9.00am to 5.00pm
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 lightColor">
              <Form>
                <label className="font20">First name:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                <label className="font20">Email:</label>
                <input type="text" id="email" name="email" className="font20 extraBold" />
                <label className="font20">Phone Number:</label>
                <input type="text" id="phn" name="phn" className="font20 extraBold" />
                <label className="font20">Subject:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold" />
                <textarea rows="2" cols="30" type="text" id="message" name="message" className="font20 extraBold" />
              </Form>
               <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px"}} />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" style={{height:204,width:180}}/>
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" style={{height:295,width:180}} />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" style={{height:330,width:278}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









