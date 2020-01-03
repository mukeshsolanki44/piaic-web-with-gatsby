import React from "react"
import Classes from "./how.module.scss"
import Grid from "@material-ui/core/Grid"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Header from "./../Components/Header/header"
import "./how.module.scss"
import {
    Footer
} from "./../Components"

const How = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHowItWorks {
        nodes {
          howText {
            json
          }
          howText2 {
            json
          }
          howText3 {
            json
          }
          howText4 {
            json
          }
          howText5 {
            json
          }
          howText6 {
            json
          }
          howText7 {
            json
          }
          image {
            file {
              url
            }
            title
          }
          roadmap {
            Roadmap {
              roadMapCity
              roadMapNum
              roadMapStatus
              color
              background
            }
          }
          howText1
          roadmaptitle
        }
      }
    }
  `)
  // let work = data.allContentfulHowtowork.edges[0].node
  console.log(data.allContentfulHowItWorks.nodes[0])
  return (
    <div>
      <Header />
      <div className={Classes.secMainDiv}>
        <br />
        <br />
        <br />
        <br />

        <Grid container justify="center">
          <Grid>
            <h2
              style={{
                color: "white",
                borderBottom: "2px solid #00b990",
                marginTop: "10px",
              }}
            >
              {data.allContentfulHowItWorks.nodes[0].howText1}
            </h2>
          </Grid>
        </Grid>
        <div>
          <Grid container justify="center">
            <Grid item xs={4} lg={1}>
              <div>
                <h2
                  style={{
                    backgroundColor: "#00cf9e",
                    color: "white",
                    borderRadius: "100%",
                    width: "70%",
                    textAlign: "center",
                    paddingBottom: "20px",
                    paddingTop: "25px",
                  }}
                >
                  1
                </h2>
              </div>
            </Grid>
            <Grid item xs={10} lg={8}>
              <p style={{ color: "white", paddingTop: "15px" }}>
                {documentToReactComponents(
                  data.allContentfulHowItWorks.nodes[0].howText.json
                )}
              </p>
            </Grid>
          </Grid>
        </div>
        <br />
        <br />
        <br />
        <Grid container justify="center">
          <Grid item lg={5}>
            <img
              width="275px"
              height="250px"
              src={data.allContentfulHowItWorks.nodes[0].image.file.url}
              style={{
                verticalAlign: "middle",
              }}
            />
          </Grid>

          <Grid item lg={5} xl={10}>
            <p style={{ color: "white", textAlign: "center" }}>
              {data.allContentfulHowItWorks.nodes[0].roadmaptitle}
            </p>

            <table>
              {data.allContentfulHowItWorks.nodes[0].roadmap.Roadmap.map(
                (v, i) => (
                  <tr>
                    <td className={Classes.Numbers}>{v.roadMapNum}</td>
                    <td>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "8px",
                          border: "2px solid rgb(0, 207, 158)",
                          borderRadius: "100%",
                        }}
                      ></span>
                    </td>
                    <td>
                      <input
                        type="text"
                        style={{
                          backgroundColor: v.background,
                          color: v.color,
                        }}
                        className={Classes.citiesNames}
                        outline={true}
                        value={v.roadMapCity}
                      />
                      <br /> <br /> 
                    </td>
                    <td className={Classes.Started}>{v.roadMapStatus}</td>
                  </tr>
                )
              )}
            </table>
          </Grid>
        </Grid>
      </div>

      <div className={Classes.secondDiv}>
        <Grid container justify="center">
          <Grid item xs={4} lg={1}>
            <h2
              style={{
                backgroundColor: "#00cf9e",
                color: "white",
                borderRadius: "100%",
                width: "70%",
                textAlign: "center",
                marginTop: "15px",
                paddingBottom: "20px",
                paddingTop: "25px",
              }}
            >
              2
            </h2>
          </Grid>

          <Grid item xs={10} lg={8}>
            <p className={Classes.secondparagh}>
              {documentToReactComponents(
                data.allContentfulHowItWorks.nodes[0].howText2.json
              )}{" "}
            </p>
            <hr />
            {/* <p className={Classes.secondivpar}>{documentToReactComponents(work.textNumber2.json)}
    <a style={{textDecoration:"none" ,color:"#268b7e"}} href="https://portal.piaic.org/signup"> Click Here </a></p> */}
          </Grid>
        </Grid>
      </div>

      <div className={Classes.thirddiv}>
        <Grid container justify="center">
          <Grid item xs={4} lg={1}>
            <h2
              style={{
                backgroundColor: "#00cf9e",
                color: "white",
                borderRadius: "100%",
                width: "70%",
                textAlign: "center",
                marginTop: "30px",
                paddingBottom: "20px",
                paddingTop: "25px",
              }}
            >
              3
            </h2>
          </Grid>

          <Grid item xs={10} lg={8}>
            <h6 className={Classes.thirddivPara}>
              {documentToReactComponents(
                data.allContentfulHowItWorks.nodes[0].howText3.json
              )}
            </h6>
          </Grid>
        </Grid>
      </div>

      <div className={Classes.forthDiv}>
        <Grid container justify="center">
          <Grid item xs={4} lg={1}>
            <h2
              style={{
                backgroundColor: "white",
                color: "#0ace93",
                borderRadius: "100%",
                width: "70%",
                textAlign: "center",
                marginTop: "70px",
                paddingBottom: "20px",
                paddingTop: "25px",
              }}
            >
              4
            </h2>
          </Grid>

          <Grid item xs={10} lg={8}>
            <h6 className={Classes.forthdivPara}>
              {documentToReactComponents(
                data.allContentfulHowItWorks.nodes[0].howText4.json
              )}
            </h6>
          </Grid>
        </Grid>
      </div>

      <div className={Classes.secondDiv}>
        <Grid container justify="center">
          <Grid item xs={4} lg={1}>
            <h2
              style={{
                backgroundColor: "white",
                color: "#0ace93",
                borderRadius: "100%",
                width: "70%",
                textAlign: "center",
                marginTop: "70px",
                paddingBottom: "20px",
                paddingTop: "25px",
              }}
            >
              5
            </h2>
          </Grid>

          <Grid item xs={10} lg={8}>
            <h6 className={Classes.fifthdivPara}>
              {documentToReactComponents(
                data.allContentfulHowItWorks.nodes[0].howText5.json
              )}
            </h6>
          </Grid>
        </Grid>
      </div>

      <div className={Classes.sixthDiv}>
        <Grid container justify="center">
          <Grid item xs={4} lg={1}>
            <h2
              style={{
                backgroundColor: "white",
                color: "#0ace93",
                borderRadius: "100%",
                width: "70%",
                textAlign: "center",
                marginTop: "30px",
                paddingBottom: "20px",
                paddingTop: "25px",
              }}
            >
              6
            </h2>
          </Grid>

          <Grid item xs={10} lg={8}>
            <h6 className={Classes.sixthdivPara}>
              {documentToReactComponents(
                data.allContentfulHowItWorks.nodes[0].howText6.json
              )}
            </h6>
          </Grid>
        </Grid>
      </div>

      <div className={Classes.sevenththDiv}>
        <Grid container justify="center">
          <Grid item xs={4} lg={1}>
            <h2
              style={{
                backgroundColor: "#0ace93",
                color: "white",
                borderRadius: "100%",
                width: "70%",
                textAlign: "center",
                marginTop: "30px",
                paddingBottom: "20px",
                paddingTop: "25px",
              }}
            >
              7
            </h2>
          </Grid>

          <Grid item xs={10} lg={8}>
            <p className={Classes.seventhdivPara}>
              {documentToReactComponents(
                data.allContentfulHowItWorks.nodes[0].howText7.json
              )}
            </p>
          </Grid>
        </Grid>
      </div>

      <Footer/>
    </div>
  )
}
export default How
