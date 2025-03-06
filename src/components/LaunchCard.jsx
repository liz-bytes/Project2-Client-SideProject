import React from "react";
import './LaunchCard.css'

function LaunchCard({ launch, onBack }) {
  return (
    <div>
      <h3>Name of the Launch: {launch.name}</h3>
      <p>Launch Date: {new Date(launch.date_utc).toLocaleString()}</p>
      <p>Details: {launch.details || "No details available"}</p>
      <p>Rocket: {launch.rocket}</p>
      <p>Launchpad: {launch.launchpad}</p>
      <p>Success: {launch.success ? "Yes" : "No"}</p>
      <p>Flight Number: {launch.flight_number}</p>
      {/* <p>Webcast: {launch.links.webcast}</p>
      <p>Article: {launch.links.article}</p>
      <p>Wikipedia: {launch.links.wikipedia}</p>
      <p>Reddit: {launch.links.reddit}</p>
      <p>Youtube: {launch.links.youtube}</p>
      <p>Twitter: {launch.links.twitter}</p>
      <p>Instagram: {launch.links.instagram}</p>
      <p>Facebook: {launch.links.facebook}</p>
      <p>Linkedin: {launch.links.linkedin}</p>
      <p>Flickr: {launch.links.flickr}</p>
      <p>Presskit: {launch.links.presskit}</p> */}
      <p>Upcoming: {launch.upcoming ? "Yes" : "No"}</p>

      {launch.links?.patch?.small && (
        <img src={launch.links.patch.small} alt={`Patch for ${launch.name}`} style={{ width: '100px' }} />
      )}

      <br />
      <br />

      <div className="go-back-btn">
        <button onClick={onBack} className="space-button">Go Back</button>
      </div>
    </div>
  );
}

export default LaunchCard;