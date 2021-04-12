import { GetStaticProps } from "next";
import Data from "../interfaces/data";


export default function Friends({ users }) {
    return(
      <div>
    {users.map(user => {
      console.log(user.avatarURL);
          <img src={user.avatar.startsWith('a_') === true ? user.avatarURL.replace('webp', 'gif') : user.avatarURL}/>
      })}
      </div>
      
    )
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
  