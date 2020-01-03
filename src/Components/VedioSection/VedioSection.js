import React from "react"
import Styles from "./VedioSection.module.scss"
import Grid from "@material-ui/core/Grid"

export default class VedioSection extends React.Component {
  constructor() {
    super()
    this.state = {
      url: "https://www.youtube.com/embed/_rUQ301EJAo",
    }
  }
  render() {
    return (
      <>
        <div className={Styles.main_container}>
          {/* play vedio */}
          <section id={Styles.main_body_container}>
            <h1 style={{ fontWeight: "bold", paddingBottom: 10 }}>Vedios</h1>
            <Grid container justifyContent="center">
              <Grid lg={8} xl={6} md={6} sm={12} xs={12}>
                <article id={Styles.main_article}>
                  <section style={{ textAlign: "center", width: "100%" }}>
                    <iframe
                      style={{ minWidth: "99%", minHeight: "480px" }}
                      src={this.state.url}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </section>
                  <div className={Styles.vedio_play_content}>
                    <h4>PIAIC Classes Coming Soon!</h4>
                    <p>
                      The mission of PIAIC is to reshape Pakistan by
                      revolutionizing education, research, and business by
                      adopting latest, cutting-edge technologies.
                    </p>
                  </div>
                </article>
              </Grid>

              {/* vedio 1 */}
              <Grid
                lg={4}
                xl={5}
                md={5}
                sm={12}
                xs={12}
                onClick={e => console.log("vedio data ==========> ", e)}
              >
                <aside className={Styles.scrollbar} id={Styles.sidebar_styling}>
                  <Grid container justifyContent="center">
                    {this.props.slider &&
                      this.props.slider.map((v, i) => {
                        return (
                          <>
                            <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                              <article className={Styles.slider_article}>
                                <section
                                  onClick={() =>
                                    this.setState({ url: v.videoUrl })
                                  }
                                  className={Styles.iframe_section}
                                  style={{
                                    backgroundImage: `url(${v.videoImage})`,
                                  }}
                                ></section>
                              </article>
                            </Grid>
                            <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                              <div className={Styles.vedio_content}>
                                <h3>{v.videoTitle}</h3>
                                <p>{v.videoDes}</p>
                              </div>
                            </Grid>
                          </>
                        )
                      })}
                  </Grid>
                  <div class="force-overflow"></div>
                </aside>
              </Grid>
            </Grid>
          </section>
        </div>
      </>
    )
  }
}
