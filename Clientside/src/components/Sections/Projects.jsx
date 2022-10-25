// import React from "react";
// import styled from "styled-components";
// // Components
// import ProjectBox from "../Elements/ProjectBox";
// import FullButton from "../Buttons/FullButton";
// // Assets
// import ProjectImg1 from "../../assets/img/projects/img1.jpg";
// import ProjectImg2 from "../../assets/img/projects/profile2.jpg";
// import ProjectImg3 from "../../assets/img/projects/img1.jpg";
// import ProjectImg4 from "../../assets/img/projects/4.png";
// import ProjectImg5 from "../../assets/img/projects/5.png";
// import ProjectImg6 from "../../assets/img/projects/6.png";
// import AddImage2 from "../../assets/img/add/add2.png";

// import im1 from 'src/assets/images/avatars/2.jpg';
// import im2 from 'src/assets/images/avatars/3.jpg';
// import im3 from 'src/assets/images/avatars/6.jpg';
// import im4 from 'src/assets/images/avatars/9.jpg';


// export default function Projects() {
//   return (
//     <Wrapper id="projects">
//       <div className="whiteBg">
//         <div className="container">
//           <HeaderInfo>
//             <h1 className="font40 extraBold">Our Awesome Service Providers</h1>
//             <p className="font18">
//               Get register today
//               <br />
//               Start the work and Be a successful worker
//             </p>
//           </HeaderInfo>
//           <div className="row textCenter">
//             <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
//               <ProjectBox
//                 img={im1}
//                 title="Heshan Bandara"
//                 text="Carpenter"
//                 action={() => alert("clicked")}

//               />
//             </div>
//             <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
//               <ProjectBox
//                 img={ProjectImg2}
//                 title="Anil Perera"
//                 text="Mason"
//                 action={() => alert("clicked")}

//               />
//             </div>
//             <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
//               <ProjectBox
//                 img={im2}
//                 title="Gamage Nuwan"
//                 text="Electrician"
//                 action={() => alert("clicked")}
//               />
//             </div>
//           </div>
//           <div className="row textCenter">
//             <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
//               <ProjectBox
//                 img={im3}
//                 title="Ayesha Dias"
//                 text="Plumber"
//                 action={() => alert("clicked")}
//               />
//             </div>
//             <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
//               <ProjectBox
//                 img={im4}
//                 title="Kasun Perera"
//                 text="Electrician"
//                 action={() => alert("clicked")}
//               />
//             </div>
//             <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
//               <ProjectBox
//                 img={ProjectImg1}
//                 title="Mahin Kumara"
//                 text="Plumber"
//                 action={() => alert("clicked")}
//               />
//             </div>
//           </div>
//           <div className="row flexCenter">
//             <div style={{ margin: "50px 0", width: "200px" }}>
//               <FullButton title="See More" action={() => alert("clicked")} />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="lightBg">
//         <div className="container">
//           <Advertising className="flexSpaceCenter">
//             <AddLeft>
//               <AddLeftInner>
//                 <ImgWrapper className="flexCenter">
//                   <img className="radius8" src={ProjectImg1} style={{width:426,height:607}} alt="add" />
//                 </ImgWrapper>
//               </AddLeftInner>
//             </AddLeft>
//             <AddRight>
//               <h4 className="font15 semiBold">Struggling to find a work..</h4>
//               <h2 className="font40 extraBold">I want to find a work</h2>
//               <p className="font14">
//                 If you are a person who is finding a work to earn money, here is the best option. you can register with us.
//                 you can choose the categories you are interested to work.
//               </p>
//               <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
//                 <div style={{ width: "190px" }}>
//                   <FullButton title="Register to work" action={() => alert("clicked")} />
//                 </div>
//                 {/**<div style={{ width: "190px", marginLeft: "15px" }}>
//                   <FullButton title="Contact Us" action={() => alert("clicked")} border />
//                 </div>**/}
//               </ButtonsRow>
//             </AddRight>
//           </Advertising>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.section`
//   width: 100%;
// `;
// const HeaderInfo = styled.div`
//   @media (max-width: 860px) {
//     text-align: center;
//   }
// `;
// const Advertising = styled.div`
//   padding: 100px 0;
//   margin: 100px 0;
//   position: relative;
//   @media (max-width: 1160px) {
//     padding: 60px 0 40px 0;
//   }
//   @media (max-width: 860px) {
//     flex-direction: column;
//     padding: 0 0 30px 0;
//     margin: 80px 0 0px 0;
//   }
// `;
// const ButtonsRow = styled.div`
//   @media (max-width: 860px) {
//     justify-content: space-between;
//   }
// `;
// const AddLeft = styled.div`
//   position: relative;
//   width: 50%;
//   p {
//     max-width: 475px;
//   }
//   @media (max-width: 860px) {
//     width: 80%;
//     order: 2;
//     text-align: center;
//     h2 {
//       line-height: 3rem;
//       margin: 15px 0;
//     }
//     p {
//       margin: 0 auto;
//     }
//   }
// `;
// const AddRight = styled.div`
//   width: 50%;
//   @media (max-width: 860px) {
//     width: 80%;
//     order: 2;
//   }
// `;
// const AddLeftInner = styled.div`
//   width: 100%;
//   position: absolute;
//   top: -300px;
//   left: 0;
//   @media (max-width: 1190px) {
//     top: -250px;
//   }
//   @media (max-width: 920px) {
//     top: -200px;
//   }
//   @media (max-width: 860px) {
//     order: 1;
//     position: relative;
//     top: -60px;
//     left: 0;
//   }
// `;
// const ImgWrapper = styled.div`
//   width: 100%;
//   padding: 0 15%;
//   img {
//     width: 100%;
//     height: auto;
//   }
//   @media (max-width: 400px) {
//     padding: 0;
//   }
// `;

import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.jpg";
import ProjectImg2 from "../../assets/img/projects/profile2.jpg";
import ProjectImg3 from "../../assets/img/projects/img1.jpg";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/add/add2.png";

import im1 from 'src/assets/images/avatars/2.jpg';
import im2 from 'src/assets/images/avatars/3.jpg';
import im3 from 'src/assets/images/avatars/6.jpg';
import im4 from 'src/assets/images/avatars/9.jpg';


export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Service Providers</h1>
            <p className="font18">
              Get register today
              <br />
              Start the work and Be a successful worker
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={im1}
                title="Heshan Bandara"
                text="Carpenter"
                action={() => alert("clicked")}

              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Anil Perera"
                text="Mason"
                action={() => alert("clicked")}

              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={im2}
                title="Gamage Nuwan"
                text="Electrician"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={im3}
                title="Ayesha Dias"
                text="Plumber"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={im4}
                title="Kasun Perera"
                text="Electrician"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Mahin Kumara"
                text="Plumber"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="See More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>

      <div className="blueBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={ProjectImg3} style={{width:426,height:607}} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font20 semiBold darkColor">Struggling to find a work..</h4>
              <h2 className="font40 extraBold darkColor">I want to find a work</h2>
              <p className="font20 darkColor">
                If you are a person who is finding a work to earn money, here is the best option. you can register with us.
                you can choose the categories you are interested to work.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Register to work" action={() => alert("clicked")} />
                </div>
                {/**<div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Contact Us" action={() => alert("clicked")} border />
                </div>**/}
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;

