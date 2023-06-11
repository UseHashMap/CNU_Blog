import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.325rem;
  width: 8rem;
  height: 3rem;
  text-decoration: none;
  transition: color 0.25s ease-in-out 0s;
  font-weight: 600;
  margin: auto;
  padding-top: 20px;
  a {
    color: #777;
  }
  .active {
    color: rgb(50, 148, 248);
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const ProfilePicture = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: #222;
`;

const Description = styled.p`
  white-space: pre-wrap;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: #222;
  letter-spacing: -0.004em;
`;

const Layout = () => {
  return (
    <div>
      <Profile>
        <div>
          <ProfilePicture
            src="data:image/jpeg;base64,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"
            alt="프로필 사진"
          />
        </div>
        <div>
          <Name>이성규</Name>
          <Description>2023-1학기 실전코딩</Description>
        </div>
      </Profile>
      <Nav>
        <NavLink to="/">포스트</NavLink>
        <NavLink to="/resume">소개</NavLink>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
