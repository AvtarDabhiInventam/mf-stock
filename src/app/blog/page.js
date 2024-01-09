import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Blog() {
  return (
    <Container className={`mb-4 mt-5`}>
      <h3 class="main_title text-center">Blogs</h3>
      <Row>
        <Col xs={6} md={4}>
          <div className="blog_card">
            <div className="card__header">
              <img
                src="https://source.unsplash.com/600x400/?trading"
                alt="card__image"
                className="card__image"
              />
            </div>
            <div className="blog_card__body">
              <span className="tag tag-blue">Stocks</span>
              <h4>Tata Technologies IPO</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                ea atque quidem!
              </p>
            </div>
            <div className="blog_card__footer">
              <div className="user">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  alt="user__image"
                  className="user__image"
                />
                <div className="user__info">
                  <h5>Jane Doe</h5>
                  <small>2h ago</small>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div className="blog_card">
            <div className="card__header">
              <img
                src="https://source.unsplash.com/600x400/?stocks"
                alt="card__image"
                className="card__image"
              />
            </div>
            <div className="blog_card__body">
              <span className="tag tag-blue">Stocks</span>
              <h4>Best Stocks Under Rs 50 in India</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                ea atque quidem!
              </p>
            </div>
            <div className="blog_card__footer">
              <div className="user">
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  alt="user__image"
                  className="user__image"
                />
                <div className="user__info">
                  <h5>Jony Doe</h5>
                  <small>Yesterday</small>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div className="blog_card">
            <div className="card__header">
              <img
                src="https://source.unsplash.com/600x400/?,stocks"
                alt="card__image"
                className="card__image"
              />
            </div>
            <div className="blog_card__body">
              <span className="tag tag-blue">Banking</span>
              <h4>Consequences of Credit Card Default</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                ea atque quidem!
              </p>
            </div>
            <div className="blog_card__footer">
              <div className="user">
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="user__image"
                  className="user__image"
                />
                <div className="user__info">
                  <h5>John Doe</h5>
                  <small>2d ago</small>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div className="blog_card">
            <div className="card__header">
              <img
                src="https://source.unsplash.com/600x400/?stocks"
                alt="card__image"
                className="card__image"
              />
            </div>
            <div className="blog_card__body">
              <span className="tag tag-blue">Stocks</span>
              <h4>Best Stocks Under Rs 50 in India</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                ea atque quidem!
              </p>
            </div>
            <div className="blog_card__footer">
              <div className="user">
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  alt="user__image"
                  className="user__image"
                />
                <div className="user__info">
                  <h5>Jony Doe</h5>
                  <small>Yesterday</small>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div className="blog_card">
            <div className="card__header">
              <img
                src="https://source.unsplash.com/600x400/?,stocks"
                alt="card__image"
                className="card__image"
              />
            </div>
            <div className="blog_card__body">
              <span className="tag tag-blue">Banking</span>
              <h4>Consequences of Credit Card Default</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                ea atque quidem!
              </p>
            </div>
            <div className="blog_card__footer">
              <div className="user">
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="user__image"
                  className="user__image"
                />
                <div className="user__info">
                  <h5>John Doe</h5>
                  <small>2d ago</small>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
