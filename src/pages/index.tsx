import { GetStaticProps } from "next";
import Data from '../interfaces/data';

export default function Home({ users }) {
  return (
    <div className="container">
      <img src={users[0].avatar.startsWith('a_') === true ? users[0].avatarURL.replace('webp', 'gif') : users[0].avatarURL} alt="such"/>
      <p>{users[0].username}</p>
      <div className="btn">
        <a href="http:///localhost:3000/contact">contact</a>
        <a href="http:///localhost:3000/friends">allies</a>
        <a href="http:///localhost:3000/portfolio">portfolio</a>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:4444");
  const data: Data = await response.json();
  return {
    props: {
      users: data,
    },
    revalidate: 5,
  };
};