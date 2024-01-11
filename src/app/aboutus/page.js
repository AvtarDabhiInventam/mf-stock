import React from "react";
import { Container } from "react-bootstrap";
import style from "@/app/aboutus/aboutus.module.scss";
import about_1 from "../../images/mf-about.jpg";
import Image from "next/image";
import { ImAccessibility } from "react-icons/im";
import { LiaCoinsSolid } from "react-icons/lia";
import { LiaHandPeaceSolid } from "react-icons/lia";

function AboutUs() {
  return (
    <Container className={`mb-4 mt-5`}>
      <h3 className="main_title text-center">About Us</h3>
      <section className="section_all" id="about">
        <div className="row vertical_content_manage mt-5">
          <div className="col-lg-6">
            <div className="img_about mt-3">
              <Image
                src={about_1}
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_header_main mt-3">
              <div className="about_icon_box">
                <p className="text_custom font-weight-bold">
                  Lorem Ipsum is simply dummy text
                </p>
              </div>
              <h4 className="about_heading text-capitalize font-weight-bold mt-4">
                Lorem Ipsum is simply dummy text of the printing industry.
              </h4>
              <p className="text-muted mt-3">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>

              <p className="text-muted mt-3">
                {" "}
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage.
              </p>
              <p className="text-muted mt-3">
                {" "}
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage.
              </p>
              <p className="text-muted mt-3">
                Lorem Ipsum is simply dummy text of the printing industry.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="about_content_box_all mt-3">
              <div className="about_detail text-center">
                <div className={`${style.about_icon}`}>
                  <ImAccessibility fontSize={35} />
                </div>
                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                  Accessible
                </h5>
                <p className="edu_desc mt-3 mb-0 text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="about_content_box_all mt-3">
              <div className="about_detail text-center">
                <div className={`${style.about_icon}`}>
                  <LiaCoinsSolid fontSize={35} />
                </div>
                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                  Affordable
                </h5>
                <p className="edu_desc mb-0 mt-3 text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="about_content_box_all mt-3">
              <div className="about_detail text-center">
                <div className={`${style.about_icon}`}>
                  <LiaHandPeaceSolid fontSize={35} />
                </div>
                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                  best platform
                </h5>
                <p className="edu_desc mb-0 mt-3 text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row text-center mt-5">
          <h3 className="main_title text-center">Our Team</h3>
          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt=""
                width="100"
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 class="mb-0">Manuella Nevoresky</h5>
              <span class="small text-uppercase text-muted">CEO - Founder</span>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                alt=""
                width="100"
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 class="mb-0">Samuel Hardy</h5>
              <span class="small text-uppercase text-muted">CEO - Founder</span>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar8.png"
                alt=""
                width="100"
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 class="mb-0">Tom Sunderland</h5>
              <span class="small text-uppercase text-muted">CEO - Founder</span>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                alt=""
                width="100"
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 class="mb-0">John Tarly</h5>
              <span class="small text-uppercase text-muted">CEO - Founder</span>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default AboutUs;
