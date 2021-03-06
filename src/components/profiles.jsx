import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../hoc/card';
import Auth from '../hoc/auth';

const Profile = (props) => {
  console.log(props)
  const redir = () => {
    //props.history.push('/')
  }

  return (
    <Auth>
      <Card>
        <Link to={{
          pathname: `${props.match.url}/posts`
        }}>Redirect to /profile/posts</Link>
      </Card>
    </Auth>
  )
}
export default Profile;