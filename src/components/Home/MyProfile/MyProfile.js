import React, { useEffect, useState } from "react";
import "./MyProfile.css";

function MyProfile() {

  return (
    <div className="userDetails">
      <h3 className="myProfileHead">My Profile</h3>
      <table>
        <tbody>
          <tr>
            <td className="tdofMyProfile">Username:</td>
            <td></td>
          </tr>
          <tr>
            <td className="tdofMyProfile">Name:</td>
            <td></td>
          </tr>

          <tr>
            <td className="tdofMyProfile">Contact:</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyProfile;
