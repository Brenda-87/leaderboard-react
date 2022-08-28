import React from "react";
import { useState } from "react";

export default function Profiles() {
  const [profiles, setProfiles] = useState([
    {
      firstName: "Brenda",
      lastName: "Sariowan",
      profileID: 5,
    },
    {
      firstName: "user",
      lastName: "2",
      profileID: 2,
    },
    {
      firstName: "user",
      lastName: "3",
      profileID: 6,
    },
    {
      firstName: "user",
      lastName: "4",
      profileID: 7,
    },
    {
      firstName: "user",
      lastName: "5",
      profileID: 9,
    },
  ]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileID, setProfileID] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setProfiles([
      ...profiles,
      {
        firstName: firstName,
        lastName: lastName,
        profileID: profileID,
      },
    ]);
  };

  const handleRemove = (removeProfileID) => {
    let newProfiles = profiles.filter(
      (profile) => profile.profileID !== removeProfileID
    );
    if (window.confirm("Weet je zeker dat je dit profiel wilt verwijderen?")) {
      setProfiles(newProfiles);
    }
  };

  return (
    <div>
      <h3 className="profile">Profiel formulier</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Voornaam:
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <br />
          Achternaam:
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <br />
          Profielnummer:
          <input
            type="number"
            value={profileID}
            onChange={(event) => setProfileID(event.target.value)}
          />
          <br />
        </label>
        <input className="profile" type="submit" value="Profiel aanmaken" />
      </form>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.profileID}>
            {profile.profileID}: {profile.firstName} {profile.lastName}{" "}
            <button onClick={() => handleRemove(profile.profileID)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
