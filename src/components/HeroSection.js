import React from "react";

export default function HeroSection() {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=1060&t=st=1697982877~exp=1697983477~hmac=737ca8eb4b6c1ede8cfd327bbac5e031c3e008b4d98abc15a411919a8131ac3c"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <p className="sub-heading">This is me</p>
            <h1 className="heading">
              Manas Pant
            </h1>
            <p className="lead">
            I am an full-stack web developer skilled in front-end and back-end technologies. My expertise spans responsive, dynamic web applications, and excels in problem-solving and adapting to evolving tech environments, making you a valuable asset in web development. I am an student at VIT University
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-lg px-4 me-md-2"
              >
                Contact me 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}