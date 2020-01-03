import React from "react"
import Header from "./../Components/Header/header"
import "bootstrap/dist/css/bootstrap.min.css"
import HomeStyle from "./Styles/Home.module.scss"
// import PresidentImg from "./../images/president.png"
import Grid from "@material-ui/core/Grid"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  ProgramSlider,
  Courses,
  ImageSlider,
    VedioSection,
    Footer
  //   MainFooter,
} from "./../Components"
const IndexPage = () => {
  let all_Data = useStaticQuery(graphql`
    query {
      allContentfulHome {
        nodes {
          videos {
            videos {
              videoDes
              videoImage
              videoTitle
              videoUrl
            }
          }
          applications
          button
          description {
            json
          }
          presidentImage {
            file {
              url
            }
          }
          subtitle
          title
          programsTitle
          programs {
            programs {
              description
              heading
              title
              color
              background
            }
          }
          programsInDevelopment {
            programsDevelop {
              background
              title
            }
          }
          programsInDevelopmentTitle
          imageTitle
          images {
            images {
              description
              title
              url
            }
          }
        }
      }
      allContentfulStrategicPartners {
        nodes {
          title
          strategicPartners {
            STRATEGICPARTNERS {
              image
              width
            }
          }

        }
      }
    }
  `)
  return (
    <div>
      <Header />
      <br />
      <br />

      <>
        <div className={HomeStyle.container}>
          <Grid
            container
            justifyContent={"center"}
            style={{
              backgroundColor: "rgb(231, 227, 228)",
              padding: "2%",
              paddingTop: 0,
            }}
          >
            <Grid item lg={4} sm={12} xs={12} xl={4} md={4}>
              <img
                src={
                  all_Data.allContentfulHome.nodes[0].presidentImage.file.url
                }
                className={HomeStyle.presidentImg}
                alt="president"
              />
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
              <div className={HomeStyle.innderSection_A}>
                <p className={HomeStyle.title}>
                  {all_Data.allContentfulHome.nodes[0].title}
                </p>
                <p className={HomeStyle.info}>
                  {all_Data.allContentfulHome.nodes[0].subtitle}
                </p>
                <br />
                <p>
                  {/* {documentToReactComponents(all_Data.allContentfulHome.nodes[0].description.json)} */}
                  The mission of PIAIC is to reshape Pakistan by revolutionizing
                  education, research, and business by adopting latest,
                  cutting-edge technologies. Experts are calling this the 4th
                  industrial revolution. We want Pakistan to become a global hub
                  for AI, data science, cloud native computing, edge computing,
                  blockchain, augmented reality, and internet of things.
                </p>
                <br />
                <br />
                <br />

                <table style={{ fontWeight: "bolder", float: "right" }}>
                  <tr>
                    <td style={{ borderRight: "2px solid" }} rowSpan="2">
                      <button className={HomeStyle.apply_btn}>
                        {all_Data.allContentfulHome.nodes[0].button}
                      </button>
                    </td>
                    <td className={HomeStyle.total_student}>
                      {all_Data.allContentfulHome.nodes[0].applications}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: 12 }}>Application Received</td>
                  </tr>
                </table>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </Grid>
          </Grid>
        </div>

        <div>
          <div className={HomeStyle.card_div}>
            <h2
              style={{
                color: "grey",
                letterSpacing: 12,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {all_Data.allContentfulHome.nodes[0].programsTitle}
            </h2>
            {/* *********** courses section ************* */}
            <div className={HomeStyle.row}>
              {all_Data.allContentfulHome.nodes[0].programs.programs &&
                all_Data.allContentfulHome.nodes[0].programs.programs.map(
                  (v, i) => {
                    return (
                      <Courses
                        style={{ backgroundColor: v.background }}
                        heading={v.title}
                        description={v.description}
                        heading={v.heading}
                        color={v.color}
                      />
                    )
                  }
                )}
            </div>

            {/*** vedio section and image gallery **** */}
          </div>
          <ProgramSlider
            title={
              all_Data.allContentfulHome.nodes[0].programsInDevelopmentTitle
            }
            slides={
              all_Data.allContentfulHome.nodes[0].programsInDevelopment
                .programsDevelop
            }
          />
          <VedioSection
          slider={all_Data.allContentfulHome.nodes[0].videos.videos}
          // title={data.videos.title}
        />
          <ImageSlider
            slider={all_Data.allContentfulHome.nodes[0].images.images}
            title={all_Data.allContentfulHome.nodes[0].imageTitle}
          />
        </div>

        {/* *********** Strategic Partners section ************* */}

        <div style={{ textAlign: "center" }}>
          <p
            style={{
              marginTop: "300px",
              fontWeight: "600",
              fontSize: "25px",
              color: "#017969",
              fontFamily: "sans-serif",
            }}
          >
            {all_Data.allContentfulStrategicPartners.nodes[0].title}
          </p>
          {all_Data.allContentfulStrategicPartners.nodes[0].strategicPartners.STRATEGICPARTNERS.map(
            (v, i) => (
              // <a href={v.url}>
              <img src={v.image} style={{ margin: "2%" }} width={v.width} />
              // </a>
            )
          )}
        </div>

        {/* *** footer***** */}

        <Footer/>
        
      </>
    </div>
  )
}

export default IndexPage
