import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
import Head from "next/head";
const UserPage = (props) => {
  const email = props.logins[props.logins.length - 1].email;
  return (
    <>
      <Head>
        <title>User data of {email}</title>
      </Head>
      <h1>Succesfully loggedin</h1>
      <h3>{email}</h3>
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://sanjan:rVDSHEUCvu0UgxBD@cluster0.6xxxo4h.mongodb.net/login?retryWrites=true&w=majority"
  );
  const db = client.db();
  const loginCollection = db.collection("login");
  const logins = await loginCollection.find().toArray();
  client.close();
  return {
    props: {
      logins: logins.map((login) => ({
        email: login.email,
        id: login._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default UserPage;
