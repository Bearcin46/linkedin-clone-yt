import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const AddFriend = ({ currentUser }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    const querySnapshot = await db
      .collection("users")
      .where("email", "==", email)
      .get();
    if (querySnapshot.empty) {
      alert("User not found");
      return;
    }
    const friendId = querySnapshot.docs[0].id;
    await db
      .collection("users")
      .doc(currentUser.uid)
      .update({
        friends: firebase.firestore.FieldValue.arrayUnion(friendId),
      });
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add Friend</button>
    </form>
  );
};

export default AddFriend;
