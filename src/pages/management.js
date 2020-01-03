import React from "react"
import Grid from "@material-ui/core/Grid"
import "./management.css"
import Header from "./../Components/Header/header"
import {
  Footer
} from "./../Components"

import { useStaticQuery, graphql } from "gatsby"

const Managment = () => {
  const all_data = useStaticQuery(graphql`
    query {
      allContentfulManagementCommittee {
        nodes {
          managecommittee {
            managementCommittee {
              description
              image
              name
              icons {
                icon
                url
              }
            }
          }
          title
        }
      }
      allContentfulStrategicPartners {
        nodes {
          strategicPartners {
            STRATEGICPARTNERS {
              image
              width
              url
            }
          }
          title
        }
      }
    }
  `)

  let management =
    all_data.allContentfulManagementCommittee.nodes[0].managecommittee
      .managementCommittee
  console.log(management)
  const strategicPartners = all_data.allContentfulStrategicPartners.nodes[0].strategicPartners.STRATEGICPARTNERS
  console.log(strategicPartners)
  return (
    <div>
    <div style={{ marginTop: 40, paddingLeft: "10%", paddingRight: "10%" }}>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <h1 className="heading1">
        {all_data.allContentfulManagementCommittee.nodes[0].title}
      </h1>

      <Grid container justify="center">
        {management.map((val, index) => (
          <div className="main">
            <img src={val.image} className="pics" />
            <p className="names">{val.name}</p>
            <p className="desig"> {val.description}</p>
            {val.icons &&
              val.icons.map((v, i) => (
                <a href={v.url} target="_blank">
                  <img src={v.icon} width="10%" style={{
                    padding:"1%"
                  }} />
                 </a>
              ))}
          </div>
        ))}
      </Grid>
      <div style={{ textAlign: "center" }}>
        <p className="heading2">
          {all_data.allContentfulStrategicPartners.nodes[0].title}
        </p>
        {strategicPartners.map((v, i) => (
          <a href={v.url}>
          <img src={v.image} style={{ margin: "3%" }} width={v.width} />
           </a>
        ))}

      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Managment
