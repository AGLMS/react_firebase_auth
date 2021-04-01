import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import point from "../../assets/point.png";

class Lecture_main extends Component {
  state = {
    instructor: {
      name: "SAEED AGHABOZORGI",
      img:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/a0/8de0c0730a11e8a983190cf39a362d/My_Photo_lowsize3-copy.jpg?auto=format%2Ccompress&dpr=1&w=200&h=200",
      position: "Associate Professor in Data Science",
    },
    syllabus: [
      "ML Introduction",
      "Pre Processing",
      "Feature Processing",
      "Modelling",
      "Q&A session",
    ],
    requirements: ["CSE, EEE, ECE", "2nd, 3rd", "None"],
  };
  render() {
    return (
      <div>
        <Navbar style={{ borderBottom: "1px solid black", padding: "5px" }}>
          <Nav.Link href="/" style={{ fontWeight: "bold", color: "#ffa600" }}>
            About
          </Nav.Link>
          <Nav.Link href="#instructors" style={{ color: "gray" }}>
            Instructor
          </Nav.Link>
          <Nav.Link href="#syllabus" style={{ color: "gray" }}>
            Syllabus
          </Nav.Link>
          <Nav.Link href="#requirements" style={{ color: "gray" }}>
            Requirements
          </Nav.Link>
          <Nav.Link href="#registration" style={{ color: "gray" }}>
            Registration
          </Nav.Link>
        </Navbar>
        <div
          id="instructors"
          style={{
            padding: "20px",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#282c34",
          }}
        >
          Instructors
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            className="rounded-circle z-depth-2"
            alt="50x50"
            src={this.state.instructor.img}
            style={{
              borderWidth: "1px",
              width: "80px",
              border: "1px solid #ffa600",
              padding: "2px",
              marginLeft: "20px",
            }}
            data-holder-rendered="true"
          />
          <div>
            <div
              style={{
                paddingLeft: "20px",
                fontSize: "25px",
                fontWeight: "bold",
                color: "#525252",
              }}
            >
              {this.state.instructor.name}
            </div>
            <div
              style={{
                paddingLeft: "20px",
                fontSize: "15px",
                color: "#282c34",
              }}
            >
              {this.state.instructor.position}
            </div>
          </div>
        </div>
        <div
          id="syllabus"
          style={{
            padding: "20px",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#282c34",
          }}
        >
          Syllabus
        </div>
        {this.state.syllabus.map((line) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: "5px",
            }}
          >
            <img
              src={point}
              style={{ height: "25px", paddingLeft: "40px" }}
              alt=""
            />
            <div style={{ paddingLeft: "20px", fontSize: "20px" }}>{line}</div>
          </div>
        ))}
        <div
          id="requirements"
          style={{
            padding: "20px",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#282c34",
          }}
        >
          Requirements
        </div>
        <div
          style={{
            paddingLeft: "40px",
            fontSize: "20px",
            color: "#282c34",
          }}
        >
          Department : {this.state.requirements[0]}
        </div>
        <div
          style={{
            paddingLeft: "40px",
            fontSize: "20px",
            color: "#282c34",
          }}
        >
          Year : {this.state.requirements[1]}
        </div>
        <div
          style={{
            paddingLeft: "40px",
            fontSize: "20px",
            color: "#282c34",
          }}
        >
          Topics : {this.state.requirements[2]}
        </div>
        <div
          id="registration"
          style={{
            padding: "20px",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#282c34",
          }}
        >
          Registration
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
          <div>
            <div
              style={{
                display: "flex",
                paddingLeft: "40px",
                paddingRight: "40px",
                fontSize: "20px",
                color: "#282c34",
              }}
            >
              Before registering do check the fee details below. You would be
              required to pay the fee amount after registration to complate the
              registration process.
            </div>
            <div style={{fontWeight:"bold",fontSize:"20px",width:"20%",padding:"10px",color:"white",display:"inline-block",marginLeft:"40px",marginTop:"10px",borderRadius:"10px",backgroundImage:`url("https://t3.ftcdn.net/jpg/03/38/48/62/360_F_338486227_qQitUvh3nILqYiuQOUGxdfindoNMbtpH.jpg")`}}>
              Fee: ₹ 0
            </div>
          </div>
          <div style={{padding:"3px",border: "3px solid green",borderRadius:"10px",backgroundColor:"white",boxShadow:"0 0 10px black",margin:"20px",marginTop:"0px"}}>
          <div style={{display:"flex",height:"200px",width:"150px",color:"white",backgroundImage:`url("https://img.freepik.com/free-vector/black-dark-3d-low-poly-geometric-background_79145-393.jpg?size=626&ext=jpg")`,borderRadius:"10px",alignItems:"center",justifyContent:"center",padding:"10px",textAlign:"center",fontWeight:"bold"}}>
            Click here to Register
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lecture_main;
//backgroundColor:"#009929"