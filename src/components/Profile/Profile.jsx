import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Image,
  Name,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled.jsx';

export const Profile = ({
  url,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileCard>
      <Description>
        <Image src={url} alt="User avatar" />
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>
      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
