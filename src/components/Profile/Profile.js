import PropTypes from "prop-types";

export default function Profile({
  userName,
  tag,
  location,
  avatar,
  stats: {follovers, views, likes }
}) {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={userName} class="avatar" />
        <p class="name">{userName}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">{follovers}</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">{views}</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">{likes}</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  follovers: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
};
