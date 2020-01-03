import React from "react"
import Grid from "@material-ui/core/Grid"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Header from "./../Components/Header/header"
// import "./WIT.css";
import {
  Footer
} from "./../Components"
const WIT = () => {
  const all_data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulWit {
        nodes {
          wit {
            WIT {
              image
              subTitle
              tilte
              gallery {
                url
              }
            }
          }
          description {
            json
          }
        }
      }
    }
  `)

  const WITData = all_data.allContentfulWit.nodes[0].wit.WIT[0]
  console.log(WITData)
  const descriptions = all_data.allContentfulWit.nodes[0].description.json
  console.log(descriptions)

  return (
    <div>
      <Header />
      <br />
      <br />
      <img
        src={WITData.image}
        style={{
          width: "100%",
          height: "546.391px",
        }}
        className="img1"
      />
      <Grid container justify="center">
        <Grid item lg={10} xl={10} md={10} sm={8} xs={8}>
          <p style={{ textAlign: "justify" }} className="description">
            {documentToReactComponents(descriptions)}
          </p>
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Grid item lg={10} xl={12} md={10} sm={8} xs={8}>
          <p
            style={{
              fontSize: "50px",
              textAlign: "center",
              wordSpacing: "30px",
              fontFamily: "sans-serif",
              color: "#3f4247",
              borderBottom: "1px solid #3f4247",
            }}
          >
            {WITData.tilte}
          </p>
        </Grid>
      </Grid>

      <p
        style={{
          textAlign: "center",
          letterSpacing: "15px",
          color: "#3f4247",
          marginTop: "-30px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        {WITData.subTitle}
      </p>
      <Footer />
    </div>
  )
}

export default WIT
