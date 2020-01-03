import React from "react"
import './aboutpresident.css'
import Grid from '@material-ui/core/Grid';
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Header from './../Components/Header/header'

import {
  Footer
} from "./../Components"



const Aboutpresident = () => {

  const all_data = useStaticQuery(graphql`
  query  {
    allContentfulThePresident {
      nodes {
        socialIcons {
          icons {
            icon
            url
          }
        }
        briefDescription {
          json
        }
       name
       description
       image {
        file {
          url
        }
      }
      icons {
        file {
          url
        }
      }
      }
    }
  }
`)


  const presidentDes = all_data.allContentfulThePresident.nodes[0].briefDescription.json;
  const presidentName = all_data.allContentfulThePresident.nodes[0].name;
  const presidentIntro = all_data.allContentfulThePresident.nodes[0].description;
  const presidentImage = all_data.allContentfulThePresident.nodes[0].image.file.url
  const socialIcons = all_data.allContentfulThePresident.nodes[0].socialIcons.icons


  console.log(socialIcons)

  console.log(presidentDes)

  return (
    <div className="mainDiv">
      <Header/>
      <br/><br/><br/><br/><br/>
      <div >
        <center>
          <img src={presidentImage} className="p_image" />
        </center>


        <center>
          <p className="name">{presidentName}</p>
        </center>

        <center>
          <p>{presidentIntro}</p>
        </center>

        <center>
          
        {
          socialIcons.map((v,i)=>{
            return (
            <a href={v.url} target="_blank">
            <img src={v.icon} className="iconImage" />
            </a>
            )
          })
        }
          
        </center>

        <Grid container justify="center">
          <Grid item lg={9} xl={10} md={10} sm={8} xs={8}>
            <p style={{ textAlign: "justify" }} className="description">
              {
                documentToReactComponents(presidentDes)
              }
            </p>
          </Grid>
        </Grid>
      </div>
      <Footer/>
    </div>
  )
}

export default Aboutpresident;