import React from "react";
import "./ProfileCard.css";
import avatar from "../../assets/image/img2.jpg";

function ProfileCard(props) {
	return (
		<div className="card-container" style={{alignItems: "center"}}>
			{/* <header style={{alignItems: "center"}}> */}
				<div className="header"><img src={avatar} alt={props.name} /></div>
			{/* </header> */}
			<h1 className="bold-text">
				<span className="normal-text">Kishore Rana</span>
			</h1>
			<h2 className="normal-text">Admin</h2>
			<div className="social-container">
				<div className="CoursesDesigned">
					<h1 className="bold-text">25</h1>
					<h2 className="smaller-text">Courses Designed</h2>
				</div>
				<div className="CoursesPublished">
					<h1 className="bold-text">12</h1>
					<h2 className="smaller-text">Courses Published</h2>
				</div>
				<div className="HoursSpent">
					<h1 className="bold-text">370</h1>
					<h2 className="smaller-text">Hours Spent this week</h2>
				</div>
			</div>
		</div>
	);
}

export default ProfileCard;