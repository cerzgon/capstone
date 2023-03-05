import React, { useState } from "react";
//import { post } from "axios";
import axios from 'axios';

import { useNavigate } from "react-router-dom";

function CrudAdd(props) {
	const initialState = {
		companyName: "",
		phone: "",
		email: "",
		location: "",
		link: "",
		description: "",
	};
	const [crud, setCrud] = useState(initialState);

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		//if (!crud.companyName || !crud.email) return;
		async function postCrud() {
			try {
				const response = await axios.post("/api/cruds/", crud);
				navigate(`/cruds/${response.data._id}`);
			} catch (error) {
				console.log("error", error);
			}
		}
		postCrud();
	}

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/cruds");
	}

	return (
		<div className="container" style={{ maxWidth: "400px" }}>
			<h1>Service Request</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Company Name / Contact Name</label>
					<input
						name="companyName"
						type="text"
						required
						value={crud.companyName}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input
						name="phone"
						type="tel"
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
						required
						value={crud.phone}
						onChange={handleChange}
						className="form-control"
					/>
					<small>Format: 416-XXX-XXXX</small>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						name="email"
						type="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
						required
						value={crud.email}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Location or our business</label>
					<input
						name="location"
						type="text"
						required
						value={crud.location}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Website</label>
					<input
						name="link"
						type="url"
						value={crud.link}
						onChange={handleChange}
						className="form-control"
					/>
					<small>Format: https://www.yourcharityaddress.com</small>
				</div>

				<div className="form-group">
					<label>Description of your cyber security problem</label>
					<textarea
						name="description"
						row="10"
						value={crud.description}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="btn-group">
					<input type="submit" value="Submit" className="btn btn-primary" />
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default CrudAdd;


/*

import React, { useState } from "react";
import axios from 'axios';
//import { post } from "axios";

import { useNavigate } from "react-router-dom";

function CrudAdd(props) {
	const initialState = {
		companyName: "",
		phone: "",
		email: "",
		location: "",
		link: "",
		description: "",
	};
	const [crud, setCrud] = useState(initialState);

	const navigate = useNavigate();
	
	function handleSubmit(event) {
		event.preventDefault();
		//if (!crud.companyName || !crud.email) return;
		async function postCrud() {
			try {
				const response = await axios.post("/cruds/", crud);
				navigate(`/cruds/${response.data._id}`);
			} catch (error) {
				console.log("error", error);
			}
		}
		postCrud();
	}

	

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/cruds");
	}

	return (
		<div className="container" style={{ maxWidth: "400px" }}>
			<h1>Create CRUD</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Company Name</label>
					<input
						name="companyName"
						type="text"
						required
						value={crud.companyName}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input
						name="phone"
						type="tel"
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
						required
						value={crud.phone}
						onChange={handleChange}
						className="form-control"
					/>
					<small>Format: 416-XXX-XXXX</small>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						name="email"
						type="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
						required
						value={crud.email}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Location</label>
					<input
						name="location"
						type="text"
						required
						value={crud.location}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Website/Social Link</label>
					<input
						name="link"
						type="url"
						value={crud.link}
						onChange={handleChange}
						className="form-control"
					/>
					<small>Format: https://www.yourcharityaddress.com</small>
				</div>

				<div className="form-group">
					<label>Description of your cyber security problem</label>
					<textarea
						name="description"
						row="10"
						value={crud.description}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="btn-group">
					<input type="submit" value="Submit" className="btn btn-primary" />
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default CrudAdd;

*/
