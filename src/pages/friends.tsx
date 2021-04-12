import { GetStaticProps } from "next";
import Data from '../interfaces/data';

export default function Home({ users }) {
  return (
    <div className="container">
      {users.map(friend => (
        <img src={friend.avatar.startsWith('a_') === true ? friend.avatarURL.replace('webp', 'gif') : friend.avatarURL} alt="such"/>
      ))}
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