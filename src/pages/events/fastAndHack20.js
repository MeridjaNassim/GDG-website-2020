import React from "react"
import SEO from "../../components/layout/seo"
import styled from "styled-components"
import Faq from "react-faq-component"
import { colors } from "../../constants/theme"
import Submissions from '../../components/events/fast&hack20/submissions'
//importing content : 
import landing from "../../content/events/fast&hack/landing.json"
import themes from "../../content/events/fast&hack/themes.json"
import mentors from "../../content/events/fast&hack/mentors.json"
import faq from "../../content/events/fast&hack/faq.json"
import submissions from '../../content/events/fast&hack/submissions.json'
import Fade from 'react-reveal/Fade'
const FastAndHack20 = () => {
  return (
    <>
      <SEO title="FAST&HACK20" />

      <Wrapper>
        <img
          className="logo"
          alt="Fast & Hack logo"
          src={require(`../../images/events/fastandhack20/${landing.logo}`)}
          loading="eager"
        ></img>


        <h2 className="title">{landing.title}</h2>
        <p className="description">{landing.description}</p>
       
        
        <Themes>

          <h2 className="title">{themes.title}</h2>
          <div className="theme-row">
            <Fade bottom>

           
              {themes.items.map(item => {
                return (
                  <div className="theme-item">
                    <img
                      src={require(`../../images/events/fastandhack20/themes/${item.icon}`)}
                      alt={item.title}
                      className="theme-icon"
                    ></img>
                    <h3 className="theme-title">{item.title}</h3>
                    <p className="theme-desc">{item.description}</p>
                  </div>
                )
              })}
               </Fade>
            </div>
        </Themes>
        <h1 className="title">Fast & Hack Submissions </h1>
        <Submissions submissionsData={submissions}></Submissions>    
         <MentorsComp mentors={mentors}></MentorsComp>
        <div className="faq">
          <Faq
            data={faq}
            styles={faqStyles}
            config={{ animate: true }}
          ></Faq>
        </div>
      </Wrapper>
    </>
  )
}


const MentorsComp = ({mentors}) => {
  return <Mentors>
  <h2 className="title">{mentors.title}</h2>
  
  <div className="mentors-row">
  <Fade bottom>
    {mentors.items.map((item,index) => {
      let color = cirColors[index % cirColors.length];
      return (
        

       
        <div className="mentor-item" key={item.name} >
          <img
            src={require(`../../images/events/fastandhack20/mentors/${item.image}`)}
            alt={item.name}
            className="mentor-image"
            style={{ borderColor: color}}
            loading="lazy"
          ></img>
          <h3 className="mentor-name" style={{color : color}}>{item.name}</h3>
          <h4 className="mentor-profession">{item.profession}</h4>
          <div className="sm">
            {item.socialmedia.map(sm => {
              return (
                <a
                  className="sm-item"
                  href={sm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require(`../../images/events/fastandhack20/icons/${sm.icon}`)}
                    alt={sm.alt}
                    title={sm.alt}
                  ></img>
                </a>
              )
            })}
          </div>
        </div>
    )
    })}
    </Fade>
  </div>
  
</Mentors>
}
export default FastAndHack20

/// styled components

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  flex-direction: column;
  padding: 64px;
  .logo {
    width: 50%;
  }
  .countdown-title {
    font-family: "Reem Kufi", sans-serif;
    font-size: 20px;
    color: #CE9138;
  }
  a img {
    width: 100px;
    height: 100px;
    cursor: pointer;
    padding: 20px;
    border-radius: 50%;
  }
  #joinslack {
    text-align: center;
    margin-bottom: 5px;
    color: #e01e5a;
    font-family: "Reem Kufi", sans-serif;
  }
  .btn {
    box-shadow: 0 4px 1px rgba(0,0,0,0.1), 0 6px 10px rgba(0,0,0,0.22);
    transition:  0.5s ease;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 20px rgba(0,0,0,0.22), 0 6px 10px rgba(0,0,0,0.22);
    }
  }
  .countdown {
    margin-top: 0%;
  }
  .faq {
    margin-top: 10%;
    background-color: inherit;
    width: 80%;
    font-family: var(--font-header);
    h2 {
      margin-top: 10px;
      font-family: "Reem Kufi", sans-serif;
    }
  }
  .styles_faq-row-wrapper__3Hsch {
    background-color: inherit !important;
    color: inherit !important;
    .styles_faq-row__2Rd2Y {
      border-color: transparent !important;
    }
    .styles_row-body__8wIE9 .styles_faq-row__2Rd2Y .styles_row-content__TVd0Y {
      color: inherit !important;
    }
  }
  p {
    font-style: italic;
    font-family: var(--font);
    text-align: center;
    max-width: 50%;
  }
  .title {
    color: var(--blue);
    margin-top: 5%;
    text-align : center;
    font-size: 48px;
    font-family: "Reem Kufi", sans-serif;
  }
  @media screen and (max-width: 768px) {
    .logo {
      width: 100%;
    }
    .faq {
      width: 100%;
    }
    padding: 32px;
    p {
      max-width: 90%;
    }
  }
`

const Themes = styled.section`
  width: 100%;
  margin-bottom : 10%;
  .title {
    text-align: center;
  }
  .not-revealed {
    text-align: center;
    color: var(--grey);
    font-family: var(--font);
    font-weight: 300;
    font-style: italic;
  }
  .theme-row {
    margin-top: 5%;
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    .theme-item {
      -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      -moz-box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        &:hover {
    box-shadow: 0 1px 10px rgba(0,0,0,0.12), 0 1px 10px rgba(0,0,0,0.24);
}
      border-radius: 20px;
      margin: 10px;
      padding: 30px;
      min-width: 25%;
      max-width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .theme-icon {
        width: 3rem;
      }
      .theme-title {
        color: #e01e5a;
      }
      .theme-desc {
        max-width: 90%;
      }
      @media screen and (max-width: 768px) {
        min-width: 90%;
      }
    }
  }
`
const Mentors = styled.section`
  width: 100%;
  display : flex;
  flex-direction : column ;
  justify-content : center ; 
  align-items : center;
  .title {
    text-align: center;
  }
  .btn {
    margin : 20px ;
    background : inherit ;
    color : var(--grey);
    cursor : pointer;
    outline : none;
    border : none;
    font-size : 3rem;
    font-weight : 200;
    border-radius : 50%;
    font-family: "Reem Kufi", sans-serif;
    padding :20px;
  }
  .mentors-row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .mentor-item {
      max-width: 25%;
      margin: 0 20px;
      .mentor-image {
        border-radius: 50%;
        box-shadow: 0 4px 1px rgba(0,0,0,0.1), 0 6px 10px rgba(0,0,0,0.22);
        width: 60%;
        margin: 10px 20%;
        border: 5px solid var(--green);
      }
      .mentor-name {
        font-family: "Reem Kufi", sans-serif;
        text-align: center;
        margin-bottom: 2px;
      }
      .mentor-profession {
        color: var(--grey);
        font-family: var(--font);
        letter-spacing: 3px;
        text-align: center;
        margin-bottom: 20px;
      }
      .sm {
        display: flex;
        justify-content: center;
        .sm-item {
          opacity: 0.8;
          margin: 0 4%;
          img {
            border: none;
            padding: 0;
            max-width: 30px;
            max-height: 30px;
            border-radius: 0;
          }
          cursor: pointer;
          transition: 0.5s ease;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1370px) {
    width: 100%;
    .mentors-row {
      width: 100%;
      .mentor-item {
        max-width: 25%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    .mentors-row {
      width: 100%;
      flex-direction: column;
      .mentor-item {
        max-width: 100%;
        margin: 10px 0px;
        width: 100% !important;
      }
    }
  }

`
/// styles :
const faqStyles = {
  bgColor: "inherit",
  titleTextColor: "var(--green)",
  rowTitleColor: "var(--green)",
  rowContentColor: "inherit",
  arrowColor: "var(--red)",
}

const cirColors = [colors.blue, colors.red, colors.green, colors.yellow]