import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPhoto } from '../../app/actions/action';
import "./Profile.css"

const Profile = () => {
	const photos = useSelector(state => state.photos);
	const dispatch = useDispatch();

	// const addPhoto = (newPhotoUrl) => {
	// 	setPhotos([...photos, newPhotoUrl])
	// }

	const handleFileChange = (event) => {
		const file = event.target.files[0]

		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				const newPhotoUrl = reader.result;
				dispatch(addPhoto(newPhotoUrl));
			};

			reader.readAsDataURL(file);
		}
	};

	return (
		<>
			<header>
				<div className="container">
					<div className="profile">
						<div className="profile-image">
							<img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" />
						</div>
						<div className="profile-user-settings">
							<h1 className="profile-user-name">janedoe_</h1>
							<button className="btn profile-edit-btn">Edit Profile</button>
							<input
								type="file"
								accept="image/*"
								id="photoInput"
								style={{ display: 'none' }}
								onChange={handleFileChange}
							/>
							<label htmlFor="photoInput" className="btn profile-edit-btn">
								Add Photo
							</label>
							<button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
						</div>
						<div className="profile-stats">
							<ul>
								<li><span className="profile-stat-count">164</span> posts</li>
								<li><span className="profile-stat-count">188</span> followers</li>
								<li><span className="profile-stat-count">206</span> following</li>
							</ul>
						</div>
						<div className="profile-bio">
							<p><span className="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
						</div>
					</div>
					{/* End of profile section  */}
				</div>
				{/* End of container  */}
			</header>

			<main>
				<div className="container">
					<div className="gallery">
						{photos.map((photoUrl, index) => (
							<>
								<div className="gallery-item" key={index} tabIndex="0">
									<img src={photoUrl} className="gallery-image" alt="" />
								</div>
							</>
						))}
					</div>
				</div>

				{/* End of container */}
			</main>
		</>
	)
}

export default Profile